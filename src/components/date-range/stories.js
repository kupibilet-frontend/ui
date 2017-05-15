import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, date } from '@kadira/storybook-addon-knobs'
import moment from 'moment'
import updateKnob from '../../utils/updateKnob'

import DateRange from './index'
import CalendarDay from '../calendar-day'

const getFocusedInput = (defaultFocusedInput = 'none') => {
  const focusedInput = select('focusedInput', {
    none: 'None',
    [DateRange.START_DATE]: 'Start date',
    [DateRange.END_DATE]: 'End date',
  }, defaultFocusedInput)

  if (focusedInput === 'none') {
    return null
  }

  return focusedInput
}

const onFocusChange = (focusedInput) => {
  updateKnob('focusedInput', 'select', focusedInput || 'none')
}

const onDatesChange = ({ startDate, endDate }) => {
  updateKnob('startDate', 'date', startDate ? startDate.toDate() : null)
  updateKnob('endDate', 'date', endDate ? endDate.toDate() : null)
}

storiesOf('DateRange', module)
  .addWithInfo('DateRange', 'with custom calendar cells', () => {
    const startDate = date('startDate', null)
    const endDate = date('endDate', null)

    return (
      <DateRange
        startDate={startDate ? moment(startDate) : null}
        endDate={endDate ? moment(endDate) : null}
        focusedInput={getFocusedInput()}
        onFocusChange={onFocusChange}
        onDatesChange={onDatesChange}
        renderDay={(day) => (
          <CalendarDay
            day={day}
            isCheap={(+day.format('DDD') % 9 === 0)}
            cost={Math.floor(day.format('DDD') * 321 % 100) * 100}
          />
        )}
      />
    )
  },
)
