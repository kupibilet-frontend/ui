import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from '@kupibilet/moment'

import DateRangePicker from '@kupibilet/react-dates/lib/components/DateRangePicker'
import getCalendarMonthWidth from '@kupibilet/react-dates/lib/utils/getCalendarMonthWidth'
import * as consts from '@kupibilet/react-dates/constants'
import Button from 'components/Button'
import Icon from 'components/Icon'

import StyledDateRange, {
  DateInput,
  DateInputValue,
  DateInputDayOfWeek,
} from './styled'

const renderInputText = day => (
  <DateInput>
    <DateInputValue>{day.format('DD MMM')}</DateInputValue>
    <DateInputDayOfWeek>{day.format('dd')}</DateInputDayOfWeek>
  </DateInput>
)

const renderHoverPlaceholder = day => (
  <DateInput>
    <DateInputValue>{day.format('DD MMM')}</DateInputValue>
  </DateInput>
)

const CalendarNav = ({ direction, ...props }) => (
  <Button
    {...props}
    icon={<Icon name={`arrow-${direction}`} fill="background" />}
  />
)
CalendarNav.defaultProps = {
  className: '',
  direction: 'left',
}
CalendarNav.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
}

/* eslint-disable react/prop-types */
class DateRangePickerWrapper extends React.PureComponent {
  state = {
    focusedInput: null,
    hoveredDate: null,
    calendarMonthCursor: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.focusedInput !== this.props.focusedInput) {
      this.setState({
        hoveredDate: null,
      })
    }
  }

  onDayHover = day => {
    this.setState({
      hoveredDate: day,
    })
  }

  onPrevMonthClick = calendarCursor => {
    const calendarMonthCursor = calendarCursor.startOf('month')
    this.setState({ calendarMonthCursor })

    if (this.props.onPrevMonthClick) {
      this.props.onPrevMonthClick(calendarMonthCursor)
    }
  }

  onNextMonthClick = calendarCursor => {
    const calendarMonthCursor = calendarCursor.startOf('month')
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
    if (initialVisibleMonth) {
      return initialVisibleMonth
    }
    if (this.state.calendarMonthCursor) {
      return this.state.calendarMonthCursor
    }
    if (this.props.startDate) {
      return this.props.startDate.clone().startOf('month')
    }
    return moment()
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
      if (
        focusedInput === consts.END_DATE &&
        hoveredDate.isBefore(startDate, 'day')
      ) {
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

    const hoveredStartDate =
      hoveredDate &&
      (focusedInput === consts.START_DATE ||
        (focusedInput === consts.END_DATE &&
          hoveredDate.isBefore(startDate, 'day')))
    const hoveredEndDate = hoveredDate && !hoveredStartDate

    const startDatePlaceholder = hoveredStartDate
      ? renderHoverPlaceholder(hoveredDate, this.getDisplayFormat())
      : this.props.startDatePlaceholderText
    const endDatePlaceholder = hoveredEndDate
      ? renderHoverPlaceholder(hoveredDate, this.getDisplayFormat())
      : this.props.endDatePlaceholderText

    return (
      <div
        className={cn({
          'DateInput--startDate--error': touched && error,
          'DateInput--startDate--focused': focusedInput === consts.START_DATE,
          'DateInput--endDate--focused': focusedInput === consts.END_DATE,
          'DateInput--startDate--placeholder':
            !startDate ||
            (hoveredStartDate && !hoveredDate.isSame(startDate, 'days')),
          'DateInput--endDate--placeholder':
            !endDate ||
            (hoveredEndDate && !hoveredDate.isSame(endDate, 'days')),
        })}
      >
        <DateRangePicker
          {...this.props}
          readOnly
          onDayHover={this.onDayHover}
          onPrevMonthClick={this.onPrevMonthClick}
          onNextMonthClick={this.onNextMonthClick}
          initialVisibleMonth={this.initialVisibleMonth}
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

const daySize = 42 // single day cell width in px
const dayPickerPadding = 9

const DateRange = props => {
  const dimensions = {
    dayPickerWidth: getCalendarMonthWidth(daySize) + 2 * dayPickerPadding,
    ...props.dimensions,
  }

  return (
    <StyledDateRange dimensions={dimensions}>
      <DateRangePickerWrapper {...props} />
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
  daySize,
  renderInputText,
}

DateRange.propTypes = {
  ...DateRangePicker.propTypes,
  children: PropTypes.node,
  onDatesChange: PropTypes.func.isRequired,
  daySize: PropTypes.number,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
}

Object.assign(DateRange, consts)

export default DateRange
