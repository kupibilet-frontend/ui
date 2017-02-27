import React, { PropTypes } from 'react'
import styled from 'styled-components'
import cn from 'classnames'

import DateRangePicker from 'react-dates/lib/components/DateRangePicker'
import { START_DATE, END_DATE } from 'react-dates/constants'
import styles from './styles'

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    }

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate })
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput })
  }

  isOutsideRange = (day) => {
    const {startDate, endDate} = this.state
    if(startDate && day.isBefore(startDate, 'days')) {
      return true
    }
    if(endDate && day.isAfter(endDate, 'days')) {
      return true
    }
    return false
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state
    return (
      <div
        className={cn({
          'DateInput--startDate--focused': focusedInput === START_DATE,
          'DateInput--endDate--focused': focusedInput === END_DATE,
        })}
      >
        <DateRangePicker
          {...this.props}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          showCaret={false}
          minimumNights={0}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          isOutsideRange={this.isOutsideRange}
        />
      </div>
    )
  }
}

const StyledDateRange = styled.div`
  ${styles}
`

const DateRange = (props) => (

  <StyledDateRange>
    <DateRangePickerWrapper {...props} />
  </StyledDateRange>
)

DateRange.propTypes = {
  children: PropTypes.node,
}


export default DateRange
