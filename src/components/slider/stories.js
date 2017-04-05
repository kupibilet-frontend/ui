import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Slider from './index'

const startDate = new Date(2017, 3, 1).valueOf()
const endDate = new Date(2017, 3, 2).valueOf()
const pitPoints = [1491038100000, 1491039000000, 1491039900000, 1491040800000, 1491041700000, 1491048900000, 1491049800000] // eslint-disable-line max-len

const snapPoints = [startDate] // startDate чтобы ползунок возвращался обратно
let i = startDate
while (i < endDate) {
  snapPoints.push(i += 900000)
}

storiesOf('Slider', module)
  .addWithInfo('Slider', () => (
    <Slider
      min={startDate}
      max={endDate}
      snap
      snapPoints={snapPoints}
      pitPoints={pitPoints}
      values={[startDate, endDate]}
    />
  ))
