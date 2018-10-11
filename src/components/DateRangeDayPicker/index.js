// @flow
import React, { PureComponent } from 'react'
import moment from '@kupibilet/moment'
import { Portal } from 'react-portal'
import GlobalStylesScope from 'components/ThemeProvider'
import H4 from 'components/Typography/H4'
import Button from 'components/Button'
import { StyledIcon } from 'components/Modal/styled'
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
  departureDate: {},
  flightBackDate: {},
  isHandleld: Boolean,
  isMobile: Boolean,
  onMonthVisibilityChange: () => void,
  renderDay: () => void,
  closeCalendar: () => void,
  onReturnDateUnneeded: () => void,
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

const WeekdaysRow = () => {
  const weekdays = WEEKDAYS_SHORT.map((day) => <Weekday key={day}>{day}</Weekday>)
  return (
    <WeekdaysWrapper>{weekdays}</WeekdaysWrapper>
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
    // onClick={props.getFocus}
  >
    <DateInput
      {...props}
      onClick={onClick}
    >
      {props.value || <FakeInputPlaceholder>{props.placeholder}</FakeInputPlaceholder>}
    </DateInput>
  </DateContainer>
)

class ReactDayPicker extends PureComponent <Props> {
  static defaultProps = {
    fromDate: null,
    toDate: null,
    inModal: false,
    isHandleld: true,
    isMobile: true,
  }

  static getDerivedStateFromProps(props) {
    if (props.showFromCalendar || props.showToCalendar) {
      return {
        showFromCalendar: props.showFromCalendar,
        showToCalendar: props.showToCalendar,
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
      departureDate: props.departureDate,
      flightBackDate: props.flightBackDate,
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
      flightBackDate,
    } = this.state

    const day = moment(date)
    const clickBefore = day.isBefore(disabled.before, 'day')
    const clickAfter = day.isAfter(disabled.after, 'day')

    if (clickBefore || clickAfter) {
      return
    }

    if (showFromCalendar && day.isAfter(flightBackDate)) {
      this.setState({
        departureDate: day,
        flightBackDate: day,
        showFromCalendar: false,
        showToCalendar: true,
      })
    }

    if (showToCalendar && day.isBefore(departureDate)) {
      this.setState({
        departureDate: day,
        flightBackDate: day,
        showFromCalendar: false,
        showToCalendar: false,
        showCalendar: false,
      })
    }

    if (showFromCalendar) {
      this.setState({
        departureDate: day,
        showFromCalendar: false,
        showToCalendar: true,
      })
    }

    if (this.state.showToCalendar) {
      this.setState({
        flightBackDate: day,
        showFromCalendar: false,
        showToCalendar: false,
        showCalendar: false,
      })
    }
  }

  getNumberOfMonths = () => {
    const { isHandleld, isMobile } = this.props
    if (!isHandleld) return 2
    if (!isMobile) return 1
    return 13
  }

  handleClickOutside = (e) => {
    if (this.dayPicker.current.contains(e.target)) return
    this.setState({ showCalendar: false })
  }

  handleFromClick = () => {
    console.log('from')
    this.setState({
      showCalendar: true,
      showFromCalendar: true,
      showToCalendar: false,
    })

    // this.props.getFromState()
  }

  handleToClick = () => {
    console.log('to')
    this.setState({
      showCalendar: true,
      showToCalendar: true,
      showFromCalendar: false,
    })

    // this.props.getToState()
  }

  renderNavbar = ({ onPreviousClick, onNextClick }) => (
    <Navbar>
      <NavbarInfo>
        <ExtraText>Цены примерные на 1 взрослого, эконом</ExtraText>
        <Button variant="secondary">Обратный билет не нужен</Button>
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

  closeDayPicker = () => {
    this.setState({ showCalendar: false })
  }

  render() {
    const { departureDate, flightBackDate } = this.state
    const { isMobile } = this.props
    const numberOfMonths = this.getNumberOfMonths()

    const today = new Date()
    const lastDay = new Date()
    lastDay.setMonth(lastDay.getMonth() + 12)

    const fromDate = moment(departureDate).toDate()
    const toDate = flightBackDate && moment(flightBackDate).toDate()

    const inputFromDate = departureDate &&
    `${moment(departureDate).format('DD MMM')}, ${moment(departureDate).format('ddd')}`
    const inputToDate = flightBackDate &&
    `${moment(flightBackDate).format('DD MMM')}, ${moment(flightBackDate).format('ddd')}`

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
        showFromCalendar={this.state.showFromCalendar}
        showToCalendar={this.state.showToCalendar}
        onMonthVisibilityChange={this.props.onMonthVisibilityChange}
      />
    )

    const dayPickers = (inModal = false) => (
      <DateInputWrap
        inModal={inModal}
      >
        <FakeInput
          neighboringInGroup="right"
          focused={this.state.showFromCalendar}
          onClick={this.handleFromClick}
          inModal={inModal}
          value={inputFromDate}
          placeholder="Туда"
        />

        <FakeInput
          neighboringInGroup="left"
          focused={this.state.showToCalendar}
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
          month={today}
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
              <H4>{this.state.showFromCalendar ? 'Дата туда' : 'Дата обратно'}</H4>
            </StyledHeader>

            <StyledCloseButton onClick={() => this.props.closeCalendar()}>
              <StyledIcon
                name="cross"
                fill="primaryDarkest"
                onClick={this.closePortal}
                size="normal"
              />
            </StyledCloseButton>

            {dayPickers(true)}

            {this.state.showToCalendar &&
              <ButtonWrapper>
                <Button
                  onClick={this.props.onReturnDateUnneeded}
                  variant="secondary"
                >
                  Обратный билет не нужен
                </Button>
              </ButtonWrapper>
            }

            <WeekdaysRow />
          </PortalWrapper>
        </GlobalStylesScope>
      </Portal>
    )

    return (
      <div ref={this.dayPicker}>
        {dayPickers()}
        {this.state.showCalendar && (this.state.showToCalendar || this.state.showFromCalendar) &&
          (
            isMobile ?
              <StyledModal
                isOpen={this.state.showCalendar}
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

export default ReactDayPicker
