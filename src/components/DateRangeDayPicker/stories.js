import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, date } from '@storybook/addon-knobs'
import moment from '@kupibilet/moment'
import updateKnob from 'storybook/updateKnob'

import DateRangeDayPicker from 'components/DateRangeDayPicker'
import CalendarDay from 'components/CalendarDay'

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
  updateKnob('startDate', 'date', startDate || null)
  updateKnob('endDate', 'date', endDate || null)
}

storiesOf('Controls/DateRangeDayPicker', module)
  .addWithInfo('DateRange', 'with custom calendar cells', () => {
    const startDate = date('startDate', null)
    const endDate = date('endDate', null)

    return (
      <DateRangeDayPicker />
    )
  })
