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
} from './styled'

type Props = {
  fromDate: {},
  toDate: {},
  isTablet: Boolean,
  isDesktop: Boolean,
  isMobile: Boolean,
  onMonthVisibilityChange: () => void,
  renderDay: () => void,
  changeFromDate: () => void,
  changeToDate: () => void,
}

type State = {
  showFromCalendar: Boolean,
  showToCalendar: Boolean,
  showCalendar: Boolean,
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

const WeekdaysRow = ({ showToCalendar }: { showToCalendar: Boolean}) => {
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
  ...props
}) => (
  <DateContainer
    neighboringInGroup={neighboringInGroup}
    focused={focused}
    inModal={props.inModal}
  >
    <DateInput
      {...props}
      onClick={onClick}
    >
      {props.value || <FakeInputPlaceholder>{props.placeholder}</FakeInputPlaceholder>}
    </DateInput>
  </DateContainer>
)

class ReactDayPicker extends PureComponent <Props, State> {
  static defaultProps = {
    changeFromDate: () => {},
    changeToDate: () => {},
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
      console.log(1)
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
      console.log(2)
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
      console.log(3)
      this.setState({
        departureDate: day,
        showFromCalendar: false,
        showToCalendar: true,
      })
      changeFromDate(day)
    }

    if (showToCalendar) {
      console.log(4)
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
    console.log('from')
    this.setState({
      showCalendar: true,
      showFromCalendar: true,
      showToCalendar: false,
    })
  }

  handleToClick = () => {
    console.log('to')
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
            >
              Обратный билет не нужен
            </Button>}
        </NavbarInfo>
        <NavbarButtons>
          <Button
            onClick={() => onPreviousClick()}
            icon="arrow-left"
          />
          <Button
            onClick={() => onNextClick()}
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

    const inputFromDate = departureDate &&
    `${moment(departureDate).format('DD MMM')}, ${moment(departureDate).format('ddd')}`
    const inputToDate = returnDate &&
    `${moment(returnDate).format('DD MMM')}, ${moment(returnDate).format('ddd')}`

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
          value={inputFromDate}
          placeholder="Туда"
        />

        <FakeInput
          neighboringInGroup="left"
          focused={showToCalendar}
          onClick={this.handleToClick}
          inModal={inModal}
          value={inputToDate}
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
      </div>
    )
  }
}

export default withMedia(ReactDayPicker)
