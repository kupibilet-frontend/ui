import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import DateRangePicker from '@kupibilet/react-dates/lib/components/DateRangePicker'
import * as consts from '@kupibilet/react-dates/constants'
import StyledDateRange, { DateInput, DateInputValue, DateInputDayOfWeek } from './styled'

import Button from '../button'
import Icon from '../icons'

const renderInputText = (day) => (
  <DateInput>
    <DateInputValue>
      { day.format('DD') }
      &nbsp;
      { day.format('MMM').substr(0, 3) }
    </DateInputValue>
    <DateInputDayOfWeek>
      { day.format('dd') }
    </DateInputDayOfWeek>
  </DateInput>
)

const renderHoverPlaceholder = (day) => (
  <DateInput>
    <DateInputValue>
      { day.format('DD') }
      &nbsp;
      { day.format('MMM').substr(0, 3) }
    </DateInputValue>
  </DateInput>
)

const CalendarNav = ({ direction }) => (
  <Button
    icon={
      <Icon name={`arrow-${direction}`} stroke="background" />
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

  getDisplayFormat() {
    const { displayFormat } = this.props
    return typeof displayFormat === 'string' ? displayFormat : displayFormat()
  }

  modifiers = {
    // Needed to invert arrow direction of the hovered day
    beforeStart: (day) => day.isBefore(this.state.startDate, 'day'),
  }

  // Render values as placeholder emulation when dates already picked
  // but DayPicker calendar opens again
  renderInputText = (day, format, inputReference) => {
    const { startDate, focusedInput, endDate } = this.props
    const { hoveredDate } = this.state
    const isStartDateInput = inputReference === consts.START_DATE

    if (hoveredDate && !day.isSame(hoveredDate)) {
      // When picking endDate but hovered date are before picked startDate
      // and click will pick startDate instead of focuesd endDate
      if (focusedInput === consts.END_DATE && hoveredDate.isBefore(startDate, 'day')) {
        if (isStartDateInput) {
          return hoveredDate.format(this.getDisplayFormat())
        }
        return endDate.format(this.getDisplayFormat())
      }

      if (
        (focusedInput === consts.START_DATE && isStartDateInput) ||
        (focusedInput === consts.END_DATE && !isStartDateInput)
      ) {
        return hoveredDate.format(this.getDisplayFormat())
      }
    }

    if (this.props.renderInputText) {
      return this.props.renderInputText(day, format)
    }
    return day.format(format)
  }

  render() {
    const { startDate, focusedInput, endDate, meta = {} } = this.props
    const { touched, error } = meta
    const { hoveredDate } = this.state
    const startDatePlaceholder = hoveredDate && focusedInput === consts.START_DATE ? (
      renderHoverPlaceholder(hoveredDate, this.getDisplayFormat())
    ) : (
      this.props.startDatePlaceholderText
    )
    const endDatePlaceholder = hoveredDate && focusedInput === consts.END_DATE && (!startDate || hoveredDate.isAfter(startDate, 'day')) ? (
      renderHoverPlaceholder(hoveredDate, this.getDisplayFormat())
    ) : (
      this.props.endDatePlaceholderText
    )

    return (
      <div
        className={cn({
          'DateInput--startDate--focused': focusedInput === consts.START_DATE,
          'DateInput--startDate--placeholder': !startDate || (hoveredDate && (
            (focusedInput === consts.START_DATE && !hoveredDate.isSame(startDate, 'day')) ||
            (focusedInput === consts.END_DATE && hoveredDate.isBefore(startDate, 'day'))
          )),
          'DateInput--startDate--error': touched && error,
          'DateInput--endDate--focused': focusedInput === consts.END_DATE,
          'DateInput--endDate--placeholder': !endDate || (
            hoveredDate &&
            focusedInput === consts.END_DATE &&
            !hoveredDate.isSame(endDate, 'day') &&
            hoveredDate.isAfter(startDate, 'day')
          ),
        })}
      >
        <DateRangePicker
          {...this.props}
          minimumNights={0}
          onDayHover={this.onDayHover}
          modifiers={this.modifiers}
          renderInputText={this.renderInputText}
          startDatePlaceholderText={startDatePlaceholder}
          endDatePlaceholderText={endDatePlaceholder}
          customArrowIcon={<span />}
          navPrev={<CalendarNav />}
          navNext={<CalendarNav direction="right" />}
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
    inputWidth: 109,
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
