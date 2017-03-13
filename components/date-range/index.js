import React, { PropTypes } from 'react'
import cn from 'classnames'

import DateRangePicker from '@kupibilet/react-dates/lib/components/DateRangePicker'
import { START_DATE, END_DATE, ANCHOR_RIGHT } from '@kupibilet/react-dates/constants'
import StyledDateRange from './styled'

import Icon from '../icons'

const CalendarNav = ({ direction }) => (
  <Icon name={`arrow-${direction}`} stroke="background" size="xxsmall" />
)
CalendarNav.defaultProps = {
  direction: 'left',
}
CalendarNav.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
}

class DateRangePickerWrapper extends React.PureComponent {
  state = {
    focusedInput: null,
    hoveredDate: null,
  }

  onFocusChange = (focusedInput) => {
    this.setState({
      focusedInput,
      hoveredDate: null,
    })

    /* eslint-disable react/prop-types */
    if (this.props.onFocusChange) {
      this.props.onFocusChange(focusedInput)
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

  focus = (focusedInput = START_DATE) => {
    this.setState({ focusedInput })
  }

  modifiers = {
    // Needed to invert arrow direction of the hovered day
    beforeStart: (day) => day.isBefore(this.state.startDate, 'day'),
  }

  // Render values as placeholder emulation when dates already picked
  // but DayPicker calendar opens again
  renderInputText = (day, format, inputReference) => {
    const { startDate, endDate } = this.props
    const { focusedInput, hoveredDate } = this.state
    const isStartDateInput = inputReference === START_DATE

    if (hoveredDate && !day.isSame(hoveredDate)) {
      // When picking endDate but hovered date are before picked startDate
      // and click will pick startDate instead of focuesd endDate
      if (focusedInput === END_DATE && hoveredDate.isBefore(startDate, 'day')) {
        if (isStartDateInput) {
          return hoveredDate.format(this.getDisplayFormat())
        }
        return endDate.format(this.getDisplayFormat())
      }

      if (
        (focusedInput === START_DATE && isStartDateInput) ||
        (focusedInput === END_DATE && !isStartDateInput)
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
    const { startDate, endDate } = this.props
    const { focusedInput, hoveredDate } = this.state
    const startDatePlaceholder = hoveredDate && focusedInput === START_DATE ? (
      hoveredDate.format(this.getDisplayFormat())
    ) : (
      this.props.startDatePlaceholderText
    )
    const endDatePlaceholder = hoveredDate && focusedInput === END_DATE && (!startDate || hoveredDate.isAfter(startDate, 'day')) ? (
      hoveredDate.format(this.getDisplayFormat())
    ) : (
      this.props.endDatePlaceholderText
    )

    return (
      <div
        className={cn({
          'DateInput--startDate--focused': focusedInput === START_DATE,
          'DateInput--startDate--placeholder': !startDate || (hoveredDate && (
            (focusedInput === START_DATE && !hoveredDate.isSame(startDate, 'day')) ||
            (focusedInput === END_DATE && hoveredDate.isBefore(startDate, 'day'))
          )),
          'DateInput--endDate--focused': focusedInput === END_DATE,
          'DateInput--endDate--placeholder': !endDate || (
            hoveredDate &&
            focusedInput === END_DATE &&
            !hoveredDate.isSame(endDate, 'day') &&
            hoveredDate.isAfter(startDate, 'day')
          ),
        })}
      >
        <DateRangePicker
          {...this.props}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          showCaret={false}
          minimumNights={0}
          onFocusChange={this.onFocusChange}
          onDayHover={this.onDayHover}
          dimensions={{
            calendarMonthWidth: 320,
            dayPickerPadding: 9,
            monthPadding: 23,
          }}
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

const DateRange = (props) => (
  <StyledDateRange>
    <DateRangePickerWrapper {...props} />
  </StyledDateRange>
)

DateRange.defaultProps = {
  ...DateRangePicker.defaultProps,
  startDatePlaceholderText: 'Туда',
  endDatePlaceholderText: 'Обратно',
  displayFormat: () => 'DD MMM',
  monthFormat: 'MMMM YYYY',
  anchorDirection: ANCHOR_RIGHT,
}

DateRange.propTypes = {
  ...DateRangePicker.propTypes,
  children: PropTypes.node,
  onDatesChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func,
}

export * from '@kupibilet/react-dates/constants'
export default DateRange
