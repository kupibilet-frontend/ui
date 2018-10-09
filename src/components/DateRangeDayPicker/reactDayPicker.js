// @flow
import React, { PureComponent } from 'react'
import { Portal } from 'react-portal'

import moment from '@kupibilet/moment'
import DayPicker from '@kupibilet/react-day-picker'

import H4 from 'components/Typography/H4'
import mq from 'utils/media-queries'
import Button from 'components/Button'
import GlobalStylesScope from 'components/ThemeProvider'

import MonthCaption from './parts/MonthCaption'

import {
  DateContainer,
  DateInput,
  FakeInputPlaceholder,
  WeekdaysWrapper,
  DateInputWrap,
  PortalWrap,
  StyledHeader,
  StyledCloseButton,
  StyledIcon,
  ReactPickerDateRange,
  ButtonWrap,
  Weekday,
} from './styled'

type Props = {
  focus?: boolean,
  showFromCalendar?: boolean,
  showToCalendar?: boolean,
  getFromState?: Function,
  getToState?: Function,
  inModal?: boolean,
  onMonthVisibilityChange?: Function,
  fromDate: string,
  toDate: string,
  getLeftFocus?: Function,
  getRightFocus?: Function,
  header?: React.Element<*>,
  closeCalendar?: Function,
  onReturnDateUnneeded?: Function,
  renderDay?: Function,
  onDayClick?: Function,
}

type State = {
  showFromCalendar: boolean,
  showToCalendar: boolean,
  showCalendar: boolean,
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

const FakeInput = ({
  children,
  onBlur,
  onFocus,
  neighboringInGroup,
  focused,
  onClick,
  ...props
}) => {
  const realOnClick = props.inModal ? onClick : () => {}

  return (
    <DateContainer
      neighboringInGroup={neighboringInGroup}
      focused={focused}
      inModal={props.inModal}
      onClick={props.getFocus}
    >
      <DateInput
        {...props}
        onClick={realOnClick}
      >
        {props.value || <FakeInputPlaceholder>{props.placeholder}</FakeInputPlaceholder>}
      </DateInput>
    </DateContainer>
  )
}

const WeekdaysRow = () => {
  const weekdays = WEEKDAYS_SHORT.map((day) => <Weekday key={day}>{day}</Weekday>)

  return (
    <WeekdaysWrapper>{weekdays}</WeekdaysWrapper>
  )
}

class ReactDayPicker extends PureComponent<Props, State> {
  static defaultProps = {
    fromDate: null,
    toDate: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      showFromCalendar: false,
      showToCalendar: false,
      showCalendar: false,
    }
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ showCalendar: true })
    }, 0)
  }

  UNSAFE_componentWillMount() {
    if (this.props.focus && this.props.showFromCalendar) {
      this.setState({
        showFromCalendar: true,
      })

      this.props.getFromState()
    }

    if (this.props.focus && this.props.showToCalendar) {
      this.setState({
        showToCalendar: true,
      })

      this.props.getToState()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.showFromCalendar || nextProps.showToCalendar) {
      this.setState({
        showFromCalendar: nextProps.showFromCalendar,
        showToCalendar: nextProps.showToCalendar,
      })
    }
  }

  handleFromClick = () => {
    if (this.props.inModal) {
      this.setState({
        showFromCalendar: true,
        showToCalendar: false,
      })
    }

    this.props.getFromState()
  }

  handleToClick = () => {
    if (this.props.inModal) {
      this.setState({
        showToCalendar: true,
        showFromCalendar: false,
      })
    }

    this.props.getToState()
  }

  render() {
    const today = new Date()
    const lastDay = new Date()
    lastDay.setMonth(lastDay.getMonth() + 12)

    const fromDate = moment(this.props.fromDate).toDate()
    const toDate = this.props.toDate && moment(this.props.toDate).toDate()

    const inputFromDate = this.props.fromDate && `${moment(this.props.fromDate).format('DD MMM')}, ${moment(this.props.fromDate).format('ddd')}`
    const inputToDate = this.props.toDate && `${moment(this.props.toDate).format('DD MMM')}, ${moment(this.props.toDate).format('ddd')}`

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


    const dayPickers = (
      <DateInputWrap inModal={this.props.inModal}>
        <FakeInput
          neighboringInGroup="right"
          focused={this.state.showFromCalendar}
          onClick={this.handleFromClick}
          inModal={this.props.inModal}
          value={inputFromDate}
          placeholder="Туда"
          getFocus={this.props.getLeftFocus}
        />

        <FakeInput
          neighboringInGroup="left"
          focused={this.state.showToCalendar}
          onClick={this.handleToClick}
          inModal={this.props.inModal}
          value={inputToDate}
          placeholder="Обратно"
          getFocus={this.props.getRightFocus}
        />
      </DateInputWrap>
    )

    return (
      <React.Fragment>
        {this.props.inModal ?
          <Portal>
            <GlobalStylesScope className="responsive">
              <PortalWrap>
                <React.Fragment>
                  <StyledHeader>
                    <H4>{this.props.header}</H4>
                  </StyledHeader>

                  <StyledCloseButton onClick={() => this.props.closeCalendar()}>
                    <StyledIcon
                      name="cross"
                      fill="primaryDarkest"
                      onClick={this.closePortal}
                      size="normal"
                    />
                  </StyledCloseButton>
                </React.Fragment>

                {dayPickers}

                {this.state.showToCalendar &&
                  <ButtonWrap>
                    <Button
                      onClick={this.props.onReturnDateUnneeded}
                      variant="secondary"
                    >
                      Обратный билет не нужен
                    </Button>
                  </ButtonWrap>
                }

                <WeekdaysRow />
              </PortalWrap>
            </GlobalStylesScope>
          </Portal> : dayPickers
        }

        {this.state.showCalendar && (this.state.showToCalendar || this.state.showFromCalendar) &&
          <React.Fragment>

            <ReactPickerDateRange
              inModal={this.props.inModal}
              modifiers={modifiers}
              month={today}
              firstDayOfWeek={1}
              numberOfMonths={13}
              months={MONTHS}
              locale="ru"
              showWeekDays={false}
              renderDay={this.props.renderDay}
              captionElement={captionElement}
              onDayClick={(day) => this.props.onDayClick(day, modifiers.disabled)}
            />
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}


export default ReactDayPicker
