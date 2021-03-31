import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Calendar, { DocGenCalendar, TProps } from 'components/Calendar'
import CalendarDay from 'components/CalendarDay'
import { useArgs } from '@storybook/addons'


const weekdays = [
  'Вс',
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
]

const ContainerWithFixedSize = styled.div`
  height: 365px;
  max-width: 700px;
  border: 1px solid #eee;
`

const renderDay = (day: Date) => (
  <CalendarDay
    day={moment(day)}
    isCheap={(Number(moment(day).format('DDD')) % 9 === 0)}
    cost={Math.floor((moment(day).format('DDD') as unknown as number) * 321 % 100) * 100}
  />
)

export function CalendarStory(args: TProps): JSX.Element {
  const [, updateArgs] = useArgs()

  function onDayClick(day: Date) {
    const [selectedDayFrom, selectedDayTo] = args.selectedDays
    const momentSelectedDay = moment(day)
    const utcSelectedDay = moment(day).valueOf()

    if (momentSelectedDay.isSameOrBefore(selectedDayFrom, 'day')) {
      updateArgs({ selectedDays: [utcSelectedDay, selectedDayTo] })
    } else if (momentSelectedDay.isBefore(selectedDayTo, 'day')) {
      updateArgs({ selectedDays: [selectedDayFrom, utcSelectedDay] })
    } else if (momentSelectedDay.isSame(selectedDayTo, 'day')) {
      updateArgs({ selectedDays: [selectedDayFrom, null] })
    } else {
      updateArgs({ selectedDays: [selectedDayFrom, utcSelectedDay] })
    }
  }

  return (
    <ContainerWithFixedSize>
      <Calendar {...args} onDayClick={onDayClick} />
    </ContainerWithFixedSize>
  )
}

const ONE_DAY_IN_MILLISECONDS = 3600 * 24 * 1000
const TODAY = Date.now()

CalendarStory.args = {
  weekdays,
  renderDay,
  months: moment.months(),
  selectedDays: [TODAY + 3 * ONE_DAY_IN_MILLISECONDS, TODAY + 15 * ONE_DAY_IN_MILLISECONDS],
}

export default {
  component: Calendar,
  title: 'Calendar',
  parameters: {
    component: DocGenCalendar,
  },
}
