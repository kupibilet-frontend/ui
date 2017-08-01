import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import DateRangePicker from '@kupibilet/react-dates/lib/components/DateRangePicker'
import * as consts from '@kupibilet/react-dates/constants'
import Button from 'components/button'
import Icon from 'components/icons'

import StyledDateRange, { DateInput, DateInputValue, DateInputDayOfWeek } from './styled'

const shortMonths = [null, 'янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
const formatShortMonths = (date) => shortMonths[date.format('M')]

const renderInputText = (day) => (
  <DateInput>
    <DateInputValue>
      { `${day.format('DD')} ${formatShortMonths(day)}` }
    </DateInputValue>
    <DateInputDayOfWeek>
      { day.format('dd') }
    </DateInputDayOfWeek>
  </DateInput>
)

const renderHoverPlaceholder = (day) => (
  <DateInput>
    <DateInputValue>
      { `${day.format('DD')} ${formatShortMonths(day)}` }
    </DateInputValue>
  </DateInput>
)

const CalendarNav = ({ direction }) => (
  <Button
    icon={
      <Icon name={`arrow-${direction}`} fill="background" />
    }
  />
)
CalendarNav.defaultProps = {
  direction: 'left',
}
CalendarNav.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
}

/* eslint-disable react/prop-types */
class DateRangePickerWrapper extends React.PureComponent {
  state = {
    focusedInput: null,
    hoveredDate: null,
    calendarMonthCursor: moment(),
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.focusedInput !== this.props.focusedInput) {
      this.setState({
        hoveredDate: null,
      })
    }
  }

  onDayHover = (day) => {
    this.setState({
      hoveredDate: day,
    })
  }

  onPrevMonthClick = () => {
    const currentMonthCursor = moment(this.state.calendarMonthCursor)
    currentMonthCursor.subtract(1, 'months')
    const calendarMonthCursor = moment.max(currentMonthCursor, moment())

    this.setState({ calendarMonthCursor })

    if (this.props.onPrevMonthClick) {
      this.props.onPrevMonthClick(calendarMonthCursor)
    }
  }

  onNextMonthClick = () => {
    const currentMonthCursor = moment(this.state.calendarMonthCursor)
    currentMonthCursor.add(1, 'months')
    const calendarMonthCursor = moment.min(currentMonthCursor, moment().add(1, 'years'))

    this.setState({ calendarMonthCursor })

    if (this.props.onNextMonthClick) {
      this.props.onNextMonthClick(calendarMonthCursor)
    }
  }

  getDisplayFormat() {
    const { displayFormat } = this.props
    return typeof displayFormat === 'string' ? displayFormat : displayFormat()
  }

  initialVisibleMonth = () => {
    const { initialVisibleMonth } = this.props
    return initialVisibleMonth ? initialVisibleMonth() : this.state.calendarMonthCursor
  }

  modifiers = {
    // Needed to invert arrow direction of the hovered day
    beforeStart: (day) => day.isBefore(this.props.startDate, 'day'),
  }

  // Render values as placeholder emulation when dates already picked
  // but DayPicker calendar opens again
  renderInputText = (day, format, inputReference) => {
    const { startDate, focusedInput } = this.props
    const { hoveredDate } = this.state
    const isStartDateInput = inputReference === consts.START_DATE

    if (hoveredDate && !day.isSame(hoveredDate)) {
      // When picking endDate but hovered date are before picked startDate
      // and click will pick startDate instead of focuesd endDate
      if (focusedInput === consts.END_DATE && hoveredDate.isBefore(startDate, 'day')) {
        if (isStartDateInput) {
          return renderHoverPlaceholder(hoveredDate, format)
        }

        return this.props.renderInputText(day, format)
      }

      if (
        (focusedInput === consts.START_DATE && isStartDateInput) ||
        (focusedInput === consts.END_DATE && !isStartDateInput)
      ) {
        return renderHoverPlaceholder(hoveredDate, format)
      }
    }

    return this.props.renderInputText(day, format)
  }

  render() {
    const { hoveredDate } = this.state
    const { startDate, focusedInput, endDate, meta = {} } = this.props
    const { touched, error } = meta

    const hoveredStartDate = hoveredDate && (
      (focusedInput === consts.START_DATE) ||
      (focusedInput === consts.END_DATE && hoveredDate.isBefore(startDate, 'day'))
    )
    const hoveredEndDate = hoveredDate && !hoveredStartDate

    const startDatePlaceholder = hoveredStartDate ? (
      renderHoverPlaceholder(hoveredDate, this.getDisplayFormat())
    ) : (
      this.props.startDatePlaceholderText
    )
    const endDatePlaceholder = hoveredEndDate ? (
      renderHoverPlaceholder(hoveredDate, this.getDisplayFormat())
    ) : (
      this.props.endDatePlaceholderText
    )

    return (
      <div
        className={cn({
          'DateInput--startDate--error': touched && error,
          'DateInput--startDate--focused': focusedInput === consts.START_DATE,
          'DateInput--endDate--focused': focusedInput === consts.END_DATE,
          'DateInput--startDate--placeholder': (
            !startDate || (hoveredStartDate && !hoveredDate.isSame(startDate, 'days'))
          ),
          'DateInput--endDate--placeholder': (
            !endDate || (hoveredEndDate && !hoveredDate.isSame(endDate, 'days'))
          ),
        })}
      >
        <DateRangePicker
          {...this.props}
          onDayHover={this.onDayHover}
          onPrevMonthClick={this.onPrevMonthClick}
          onNextMonthClick={this.onNextMonthClick}
          initialVisibleMonth={this.initialVisibleMonth}
          modifiers={this.modifiers}
          renderInputText={this.renderInputText}
          customArrowIcon={<span />}
          navPrev={<CalendarNav />}
          navNext={<CalendarNav direction="right" />}
          startDatePlaceholderText={startDatePlaceholder}
          endDatePlaceholderText={endDatePlaceholder}
        />
      </div>
    )
  }
}

const DateRange = (props) => {
  const dimensions = {
    ...DateRange.defaultProps.dimensions,
    ...props.dimensions,
  }

  return (
    <StyledDateRange dimensions={dimensions}>
      <DateRangePickerWrapper {...props} dimensions={dimensions} />
    </StyledDateRange>
  )
}

DateRange.defaultProps = {
  ...DateRangePicker.defaultProps,
  minimumNights: 0,
  startDatePlaceholderText: 'Туда',
  endDatePlaceholderText: 'Обратно',
  displayFormat: () => 'DD MMM',
  monthFormat: 'MMMM YYYY',
  anchorDirection: consts.ANCHOR_RIGHT,
  dimensions: {
    calendarMonthWidth: 320,
    dayPickerPadding: 9,
    monthPadding: 23,
    dayPickerWidth: 340,
  },
  renderInputText,
}

DateRange.propTypes = {
  ...DateRangePicker.propTypes,
  children: PropTypes.node,
  onDatesChange: PropTypes.func.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
}

Object.assign(DateRange, consts)

export default DateRange
