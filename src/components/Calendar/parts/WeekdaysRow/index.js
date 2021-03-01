// @flow
import React from 'react'
import {
  WeekdaysWrapper,
  Weekday,
} from './styled'

type TProps = {
  weekdays: string[],
}

const WeekdaysRow = ({ weekdays }: TProps) => {
  const [sunday, ...rest] = weekdays
  const weekdaysFromMonday = [...rest, sunday]

  return (
    <WeekdaysWrapper>
      {Object.values(weekdaysFromMonday).map((day: string) => <Weekday key={day}>{day}</Weekday>)}
    </WeekdaysWrapper>
  )
}

export default WeekdaysRow
