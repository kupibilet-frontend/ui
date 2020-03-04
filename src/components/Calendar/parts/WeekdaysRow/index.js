// @flow
import React from 'react'
import {
  WeekdaysWrapper,
  Weekday,
} from './styled'

const WEEKDAYS_SHORT_FROM_MONDAY = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const WeekdaysRow = () => {
  const weekdays = WEEKDAYS_SHORT_FROM_MONDAY
    .map((day: string) => <Weekday key={day}>{day}</Weekday>)

  return (
    <WeekdaysWrapper>{weekdays}</WeekdaysWrapper>
  )
}

export default WeekdaysRow
