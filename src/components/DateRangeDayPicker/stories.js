import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from '@kupibilet/moment'
import DateRangeDayPicker from 'components/DateRangeDayPicker'
import CalendarDay from 'components/CalendarDay'

storiesOf('Controls/DateRangeDayPicker', module)
  .addWithInfo('DateRange', 'with custom calendar cells', () => {
    return (
      <DateRangeDayPicker
        renderDay={(day) => (
          <CalendarDay
            day={moment(day)}
            isCheap={(Number(moment(day).format('DDD')) % 9 === 0)}
            cost={Math.floor(moment(day).format('DDD') * 321 % 100) * 100}
          />
        )}
      />
    )
  })
