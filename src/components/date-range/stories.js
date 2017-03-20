import React from 'react'
import { storiesOf } from '@kadira/storybook'
import styled from 'styled-components'

import DateRange from './index'

/* eslint-disable react/prop-types */

class DateRangeState extends React.PureComponent {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
  }

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput })
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state

    return (
      <DateRange
        {...this.props}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        startDate={startDate}
        endDate={endDate}
        focusedInput={focusedInput}
      />
    )
  }
}

const AvgCost = styled.div`
  font-size: 11px;
  color: ${({ isCheap, theme }) => (isCheap ? theme.color.success : theme.color.textLight)};
  letter-spacing: .5px;
  line-height: 1;
  text-align: center;

  .CalendarDay:not(.CalendarDay--blocked):hover &,
  .CalendarDay--selected-start &,
  .CalendarDay--selected-end & {
    color: ${({ theme }) => theme.color.background}
  }
`

const DayCell = ({ day }) => (
  <span>
    { day.format('D') }
    <AvgCost isCheap={(+day.format('DDD') % 9 === 0)}>
      { Math.floor(day.format('DDD') * 321 % 100) } 000
    </AvgCost>
  </span>
)

storiesOf('DateRange', module)
  .addWithInfo('DateRange', 'with custom calendar cells', () => (
    <DateRangeState
      renderDay={(day) => (
        <DayCell day={day} />
      )}
      numberOfMonths={2}
    />
  ),
)
