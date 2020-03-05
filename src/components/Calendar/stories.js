// @flow
import React from 'react'
import moment from '@kupibilet/moment'
import styled from 'styled-components'
import { text } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Calendar from 'components/Calendar'
import CalendarDay from 'components/CalendarDay'


const ContainerWithFixedSize = styled.div`
  height: 365px;
  max-width: 700px;
  border: 1px solid #eee;
`

const onDayClick = (day) => {
  const from = text('from')
  const to = moment(text('to'))
  const targerDay = moment(day)
  const utcTargetDay = targerDay.valueOf()

  if (!from) {
    updateKnob('from', 'text', utcTargetDay)
    return
  }

  if (targerDay.isSameOrBefore(from, 'day')) {
    updateKnob('from', 'text', utcTargetDay)
    return
  }
  if (!to || targerDay.isBefore(to, 'day')) {
    updateKnob('to', 'text', utcTargetDay)
    return
  }
  if (targerDay.isSame(to, 'day')) {
    updateKnob('to', 'text', '')
    return
  }
  updateKnob('to', 'text', utcTargetDay)
}

const renderDay = (day) => (
  <CalendarDay
    day={moment(day)}
    isCheap={(Number(moment(day).format('DDD')) % 9 === 0)}
    cost={Math.floor(moment(day).format('DDD') * 321 % 100) * 100 || `\u00A0`}
  />
)


export const CalendarStory = () => (
  <ContainerWithFixedSize>
    <Calendar
      renderDay={renderDay}
      selectedDays={[text('from'), text('to')]}
      onDayClick={onDayClick}
    />
  </ContainerWithFixedSize>
)

CalendarStory.story = {
  name: 'default',
  props: {
    from: text('from', ''),
    to: text('to', ''),
  },
}

export default {
  title: 'COMPONENTS|Complex controls/Calendar',
  parameters: {
    component: Calendar,
    componentSubtitle: `import Calendar from '@kupibilet/ui/components/Calendar'`,
  },
}
