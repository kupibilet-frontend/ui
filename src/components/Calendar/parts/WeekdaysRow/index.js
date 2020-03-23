// @flow
import React from 'react'
import {
  WeekdaysWrapper,
  Weekday,
} from './styled'

export type TWeekdays = {
  MONDAY: string,
  TUESDAY: string,
  WEDNESDAY: string,
  THURSDAY: string,
  FRIDAY: string,
  SATURDAY: string,
  SUNDAY: string,
}

type TProps = {
  weekdays: TWeekdays,
}

const WeekdaysRow = ({ weekdays }: TProps) => {
  return (
    <WeekdaysWrapper>
      {Object.values(weekdays).map((day: string) => <Weekday key={day}>{day}</Weekday>)}
    </WeekdaysWrapper>
  )
}

export default WeekdaysRow
