// @flow
import React, { PureComponent } from 'react'
import moment from '@kupibilet/moment'
import { Portal } from 'react-portal'
import GlobalStylesScope from 'components/ThemeProvider'
import H4 from 'components/Typography/H4'
import Button from 'components/Button'
import { StyledIcon } from 'components/Modal/styled'
import { withMedia } from 'utils/media-queries'
import MonthCaption from './parts/MonthCaption'
import {
  StyledDayPicker,
  DateContainer,
  DateInput,
  FakeInputPlaceholder,
  DateInputWrap,
  DayPickerWrapper,
  Navbar,
  NavbarInfo,
  NavbarButtons,
  StyledHeader,
  WeekdaysWrapper,
  Weekday,
  StyledModal,
  PortalWrapper,
  StyledCloseButton,
  ButtonWrapper,
  MainWrapper,
  FakeInputWeekDay,
} from './styled'

type Props = {
  fromDate: string | Object,
  toDate: string | Object,
  isTablet: boolean,
  isDesktop: boolean,
  isMobile: boolean,
  onMonthVisibilityChange: () => void,
  renderDay: () => void,
  changeFromDate: () => void,
  changeToDate: () => void,
  onOnewayOnlySelected: () => void,
  meta: {},
}

type State = {
  showFromCalendar: boolean,
  showToCalendar: boolean,
  showCalendar: boolean,
  departureDate: {} | null,
  returnDate: {} | null,
}

const BACKSPACE_KEYCODE = 8
const DELETE_KEYCODE = 46
const WEEKDAYS_SHORT_FROM_SUNDAY = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
const WEEKDAYS_SHORT_FROM_MONDAY = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const WeekdaysRow = ({ showToCalendar }: { showToCalendar: boolean}) => {
  const weekdays = WEEKDAYS_SHORT_FROM_MONDAY.map((day) => <Weekday key={day}>{day}</Weekday>)
  return (
    <WeekdaysWrapper showToCalendar={showToCalendar}>{weekdays}</WeekdaysWrapper>
  )
}

/* eslint-disable react/prop-types */ // TODO add proptypes unreported before
const FakeInput = ({
  children,
  onBlur,
  onFocus,
  neighboringInGroup,
  focused,
  onClick,
  value,
  invalid,
  ...props
}) => {
  const inputDate = value && moment(value).format('DD MMM')
  const weekDay = value && moment(value).format('ddd')

  return (
    <DateContainer
      neighboringInGroup={neighboringInGroup}
      focused={focused}
      inModal={props.inModal}
      hasError={invalid}
      tabIndex={0}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <DateInput
        {...props}
        value={inputDate}
        neighboringInGroup={neighboringInGroup}
      >
        {inputDate || <FakeInputPlaceholder>{props.placeholder}</FakeInputPlaceholder>}
        {weekDay && <FakeInputWeekDay>{weekDay}</FakeInputWeekDay>}
      </DateInput>

    </DateContainer>
  )
}
/* eslint-disable react/prop-types */

class ReactDayPicker extends PureComponent <Props, State> {
  static defaultProps = {
    changeFromDate: () => {},
    changeToDate: () => {},
    fromDate: '',
    toDate: '',
    isTablet: false,
    isDesktop: true,
    isMobile: false,
    onMonthVisibilityChange: () => {},
    changeDateInputFocus: () => {},
    onOnewayOnlySelected: () => {},
    meta: {},
  }

  static getDerivedStateFromProps(props, state) {
    const { isDateInputFocused, changeDateInputFocus } = props
    const { showFromCalendar, showCalendar } = state
    if (isDateInputFocused && !showCalendar && !showFromCalendar) {
      changeDateInputFocus(false)
      return {
        showFromCalendar: true,
        showCalendar: true,
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      showFromCalendar: false,
      showToCalendar: false,
      showCalendar: false,
      departureDate: props.fromDate || null,
      returnDate: props.toDate || null,
    }
    this.dayPicker = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false)
    document.addEventListener('keydown', this.shouldClearDate, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
    document.removeEventListener('keydown', this.shouldClearDate, false)
  }

  onDayChange = (date, disabled) => {
    const {
      showFromCalendar,
      showToCalendar,
      departureDate,
      returnDate,
    } = this.state

    const {
      changeFromDate,
      changeToDate,
    } = this.props

    const day = moment(date)
    const clickBefore = day.isBefore(disabled.before, 'day')
    const clickAfter = day.isAfter(disabled.after, 'day')

    if (clickBefore || clickAfter) {
      return
    }

    if (showFromCalendar && day.isAfter(returnDate)) {
      this.setState({
        departureDate: day,
        returnDate: day,
        showFromCalendar: false,
        showToCalendar: true,
      })
      changeFromDate(day)
      changeToDate(day)
      return
    }

    if (showToCalendar && (day.isBefore(departureDate) || !departureDate)) {
      this.setState({
        departureDate: day,
        returnDate: day,
        showFromCalendar: false,
        showToCalendar: false,
        showCalendar: false,
      })
      changeFromDate(day)
      changeToDate(day)
      return
    }

    if (showFromCalendar) {
      this.setState({
        departureDate: day,
        showFromCalendar: false,
        showToCalendar: true,
      })
      changeFromDate(day)
      return
    }

    if (showToCalendar) {
      this.setState({
        returnDate: day,
        showFromCalendar: false,
        showToCalendar: false,
        showCalendar: false,
      })
      changeToDate(day)
    }
  }

  getNumberOfMonths = () => {
    const { isTablet, isDesktop } = this.props
    if (isDesktop) return 2
    if (isTablet) return 1
    return 13
  }

  handleClickOutside = (e) => {
    if (this.dayPicker.current.contains(e.relatedTarget || e.target) || this.props.isMobile) return
    this.setState({
      showCalendar: false,
      showFromCalendar: false,
      showToCalendar: false,
    })
  }

  shouldClearDate = (e) => {
    const { keyCode } = e
    const { showFromCalendar, showToCalendar } = this.state
    const { changeFromDate, changeToDate } = this.props
    const clearDate = keyCode === BACKSPACE_KEYCODE || keyCode === DELETE_KEYCODE

    if (clearDate && showFromCalendar) {
      this.setState({
        departureDate: null,
        showCalendar: false,
        showFromCalendar: false,
        showToCalendar: false,
      })
      changeFromDate(null)
    }
    if (clearDate && showToCalendar) {
      this.setState({
        returnDate: null,
        showCalendar: false,
        showFromCalendar: false,
        showToCalendar: false,
      })
      changeToDate(null)
    }
  }

  handleFromClick = () => {
    this.setState({
      showCalendar: true,
      showFromCalendar: true,
      showToCalendar: false,
    })
  }

  handleToClick = () => {
    this.setState({
      showCalendar: true,
      showToCalendar: true,
      showFromCalendar: false,
    })
  }

  renderNavbar = ({ onPreviousClick, onNextClick }) => {
    const { showToCalendar } = this.state
    return (
      <Navbar>
        <NavbarInfo>
          {showToCalendar &&
            <Button
              onClick={this.onReturnDateUnneeded}
              size="small"
              onBlur={this.handleClickOutside}
            >
              Обратный билет не нужен
            </Button>}
        </NavbarInfo>
        <NavbarButtons>
          <Button
            onClick={(e) => {
              e.preventDefault()
              onPreviousClick()
            }}
            icon="arrow-left"
            tabIndex={-1}
          />
          <Button
            onClick={(e) => {
              e.preventDefault()
              onNextClick()
            }}
            icon="arrow-right"
            tabIndex={-1}
          />
        </NavbarButtons>
      </Navbar>
    )
  }

  onReturnDateUnneeded = () => {
    const {
      changeToDate,
      onOnewayOnlySelected,
    } = this.props
    this.setState({
      returnDate: null,
      showFromCalendar: false,
      showToCalendar: false,
      showCalendar: false,
    })
    changeToDate(null)
    onOnewayOnlySelected()
  }

  closeDayPicker = () => {
    this.setState({ showCalendar: false })
  }

  getMaxVisibleMonth = (date) => new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())

  render() {
    const {
      departureDate,
      returnDate,
      showFromCalendar,
      showToCalendar,
      showCalendar,
    } = this.state
    const {
      isMobile,
      onMonthVisibilityChange,
      meta,
    } = this.props
    const numberOfMonths = this.getNumberOfMonths()

    const today = new Date()
    const lastDay = new Date()
    lastDay.setDate(lastDay.getDate() - 1)
    lastDay.setMonth(lastDay.getMonth() + 12)

    const fromDate = departureDate && moment(departureDate).toDate()
    const toDate = returnDate && moment(returnDate).toDate()

    const hasError = meta && meta.error
    const { touched } = meta

    const modifiers = {
      disabled: {
        before: today,
        after: lastDay,
      },
      selected: [
        fromDate,
        { from: fromDate, to: toDate },
      ],
      start: fromDate,
      end: toDate,
    }

    const captionElement = (
      <MonthCaption
        modifiers={modifiers}
        showFromCalendar={showFromCalendar}
        showToCalendar={showToCalendar}
        onMonthVisibilityChange={onMonthVisibilityChange}
        isMobile={isMobile}
      />
    )

    const dayPickers = (inModal = false) => (
      <DateInputWrap
        inModal={inModal}
      >
        <FakeInput
          neighboringInGroup="right"
          focused={showFromCalendar}
          onFocus={this.handleFromClick}
          onBlur={this.handleClickOutside}
          inModal={inModal}
          value={departureDate}
          invalid={touched && hasError}
          placeholder="Туда"
        />

        <FakeInput
          neighboringInGroup="left"
          focused={showToCalendar}
          onFocus={this.handleToClick}
          onBlur={this.handleClickOutside}
          inModal={inModal}
          value={returnDate}
          placeholder="Обратно"
        />
      </DateInputWrap>
    )

    const calendar = (
      <DayPickerWrapper>
        <StyledDayPicker
          weekdaysShort={WEEKDAYS_SHORT_FROM_SUNDAY}
          showWeekDays={!isMobile}
          modifiers={modifiers}
          month={!isMobile ? (fromDate || today) : today}
          fromMonth={today}
          toMonth={this.getMaxVisibleMonth(today)}
          firstDayOfWeek={1}
          numberOfMonths={numberOfMonths}
          months={moment.months()}
          locale="ru"
          renderDay={(day) => this.props.renderDay(day, showToCalendar)}
          navbarElement={!isMobile ? this.renderNavbar : undefined}
          captionElement={captionElement}
          onDayClick={(day) => this.onDayChange(day, modifiers.disabled)}
          tabIndex={-1}
        />
      </DayPickerWrapper>
    )

    const mobileCalendarHeader = (
      <Portal>
        <GlobalStylesScope className="responsive">
          <PortalWrapper>
            <StyledHeader>
              <H4>{showFromCalendar ? 'Дата туда' : 'Дата обратно'}</H4>
            </StyledHeader>

            <StyledCloseButton onClick={() => this.closeDayPicker()}>
              <StyledIcon
                name="cross"
                fill="primaryDarkest"
                size="normal"
              />
            </StyledCloseButton>

            {dayPickers(true)}

            {showToCalendar &&
              <ButtonWrapper>
                <Button
                  onClick={this.onReturnDateUnneeded}
                >
                  Обратный билет не нужен
                </Button>
              </ButtonWrapper>
            }

            <WeekdaysRow showToCalendar={showToCalendar} />
          </PortalWrapper>
        </GlobalStylesScope>
      </Portal>
    )

    return (
      <div ref={this.dayPicker}>
        <MainWrapper>
          {dayPickers()}
          {showCalendar && (showToCalendar || showFromCalendar) &&
            (
              isMobile ?
                <StyledModal
                  isOpen={showCalendar}
                  onClose={this.closeDayPicker}
                  showCloseButton={false}
                >
                  {mobileCalendarHeader}
                  {calendar}
                </StyledModal>
                :
                calendar
            )
          }
        </MainWrapper>
      </div>
    )
  }
}

export default withMedia(ReactDayPicker)
