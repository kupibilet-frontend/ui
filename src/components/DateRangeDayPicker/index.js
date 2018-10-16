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
  ExtraText,
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
  fromDate: {},
  toDate: {},
  isTablet: boolean,
  isDesktop: boolean,
  isMobile: boolean,
  onMonthVisibilityChange: () => void,
  renderDay: () => void,
  changeFromDate: () => void,
  changeToDate: () => void,
}

type State = {
  showFromCalendar: boolean,
  showToCalendar: boolean,
  showCalendar: boolean,
  departureDate: {} | null,
  returnDate: {} | null,
}

const WEEKDAYS_SHORT = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const WeekdaysRow = ({ showToCalendar }: { showToCalendar: boolean}) => {
  const weekdays = WEEKDAYS_SHORT.map((day) => <Weekday key={day}>{day}</Weekday>)
  return (
    <WeekdaysWrapper showToCalendar={showToCalendar}>{weekdays}</WeekdaysWrapper>
  )
}

const FakeInput = ({
  children,
  onBlur,
  onFocus,
  neighboringInGroup,
  focused,
  onClick,
  value,
  ...props
}) => {
  const inputDate = value && moment(value).format('DD MMM')
  const weekDay = value && moment(value).format('ddd')

  return (
    <DateContainer
      neighboringInGroup={neighboringInGroup}
      focused={focused}
      inModal={props.inModal}
      onClick={onClick}
    >
      <DateInput
        {...props}
        onClick={onClick}
        value={inputDate}
      >
        {inputDate || <FakeInputPlaceholder>{props.placeholder}</FakeInputPlaceholder>}
        {weekDay && <FakeInputWeekDay>{weekDay}</FakeInputWeekDay>}
      </DateInput>

    </DateContainer>
  )
}

class ReactDayPicker extends PureComponent <Props, State> {
  static defaultProps = {
    changeFromDate: () => {},
    changeToDate: () => {},
    fromDate: null,
    toDate: null,
    isTablet: false,
    isDesktop: true,
    isMobile: false,
    onMonthVisibilityChange: () => {},
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
    document.addEventListener('click', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false)
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
    }

    if (showFromCalendar) {
      this.setState({
        departureDate: day,
        showFromCalendar: false,
        showToCalendar: true,
      })
      changeFromDate(day)
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
    if (this.dayPicker.current.contains(e.target) || this.props.isMobile) return
    this.setState({ showCalendar: false })
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
          <ExtraText>Цены примерные на 1 взрослого, эконом</ExtraText>
          {showToCalendar &&
            <Button
              variant="secondary"
              onClick={this.onReturnDateUnneeded}
              size="small"
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
          />
          <Button
            onClick={(e) => {
              e.preventDefault()
              onNextClick()
            }}
            icon="arrow-right"
          />
        </NavbarButtons>
      </Navbar>
    )
  }

  onReturnDateUnneeded = () => {
    this.setState({
      returnDate: null,
      showFromCalendar: false,
      showToCalendar: false,
      showCalendar: false,
    })
    this.props.changeToDate(null)
  }

  closeDayPicker = () => {
    this.setState({ showCalendar: false })
  }

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
    } = this.props
    const numberOfMonths = this.getNumberOfMonths()

    const today = new Date()
    const lastDay = new Date()
    lastDay.setMonth(lastDay.getMonth() + 12)

    const fromDate = departureDate && moment(departureDate).toDate()
    const toDate = returnDate && moment(returnDate).toDate()

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
          onClick={this.handleFromClick}
          inModal={inModal}
          value={departureDate}
          placeholder="Туда"
        />

        <FakeInput
          neighboringInGroup="left"
          focused={showToCalendar}
          onClick={this.handleToClick}
          inModal={inModal}
          value={returnDate}
          placeholder="Обратно"
        />
      </DateInputWrap>
    )

    const calendar = (
      <DayPickerWrapper>
        <StyledDayPicker
          weekdaysShort={WEEKDAYS_SHORT}
          showWeekDays={!isMobile}
          modifiers={modifiers}
          month={!isMobile ? (fromDate || today) : today}
          firstDayOfWeek={0}
          numberOfMonths={numberOfMonths}
          months={MONTHS}
          locale="ru"
          renderDay={this.props.renderDay}
          navbarElement={!isMobile ? this.renderNavbar : undefined}
          captionElement={captionElement}
          onDayClick={(day) => this.onDayChange(day, modifiers.disabled)}
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
                  variant="secondary"
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
