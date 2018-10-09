import React, { Fragment } from 'react'
import moment from '@kupibilet/moment'
import styled from 'styled-components'
import DayPicker from '@kupibilet/react-day-picker'
import { Container, Input } from 'components/AirportInput/styled'
import { StyledDateRange } from './styled'
import css from '@kupibilet/react-day-picker/lib/style.css'

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

const ReactPickerDateRange = styled(DayPicker)`
  ${css}
`

const DateContainer = styled(Container)`
  width: 50%;
`

const DateInput = Input.withComponent('div')

const FakeInputPlaceholder = styled.span`
  color: ${({ theme }) => theme.color.miscDark};
  font-weight: 400;

  &:disabled {
    color: ${({ theme }) => theme.color.misc};
  }
`

const DateInputWrap = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  padding-bottom: 12px;
  z-index: 2;

  ${(props) => (props.inModal && `
    margin-top: 60px;
    padding: 0 18px;
    position: fixed;
    width: 100%;
  `)}
`

const FakeInput = ({
  children,
  onBlur,
  onFocus,
  neighboringInGroup,
  focused,
  onClick,
  ...props
}) => {

  return (
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
}

class ReactDayPicker extends React.PureComponent {
  static defaultProps = {
    fromDate: null,
    toDate: null,
    inModal: false,
    isHandleld: false,
    isMobile: false,
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

  render() {
    const { departureDate, flightBackDate } = this.state
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

    const dayPickers = (
      <DateInputWrap
        inModal={this.props.inModal}
      >
        <FakeInput
          neighboringInGroup="right"
          focused={this.state.showFromCalendar}
          onClick={this.handleFromClick}
          inModal={this.props.inModal}
          value={inputFromDate}
          placeholder="Туда"
        />

        <FakeInput
          neighboringInGroup="left"
          focused={this.state.showToCalendar}
          onClick={this.handleToClick}
          inModal={this.props.inModal}
          value={inputToDate}
          placeholder="Обратно"
        />
      </DateInputWrap>
    )

    return (
      <div ref={this.dayPicker}>
        {dayPickers}
        {this.state.showCalendar && (this.state.showToCalendar || this.state.showFromCalendar) &&
          <Fragment>
            <ReactPickerDateRange
              inModal={this.props.inModal}
              modifiers={modifiers}
              month={today}
              firstDayOfWeek={1}
              numberOfMonths={numberOfMonths}
              months={MONTHS}
              locale="ru"
              showWeekDays={false}
              // renderDay={this.props.renderDay}
              // captionElement={captionElement}
              onDayClick={(day) => this.onDayChange(day, modifiers.disabled)}
            />
          </Fragment>
        }
      </div>
    )
  }
}


export default ReactDayPicker
