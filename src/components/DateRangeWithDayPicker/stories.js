import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from '@kupibilet/moment'
import DateRangeDayPicker from 'components/DateRangeWithDayPicker'
import CalendarDay from 'components/CalendarDay'

storiesOf('Controls/DateRangeDayPicker', module)
  .add(
    'DateRangeWithDayPicker',
    () => (
      <DateRangeDayPicker
        renderDay={(day) => (
          <CalendarDay
            day={moment(day)}
            isCheap={(Number(moment(day).format('DDD')) % 9 === 0)}
            cost={Math.floor(moment(day).format('DDD') * 321 % 100) * 100}
          />
        )}
      />
    ),
    { notes: 'with custom calendar cells' },
  )
