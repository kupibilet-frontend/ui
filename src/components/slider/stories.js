import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Slider from './index'

const startDate = new Date(2017, 3, 2, 1).valueOf()
const endDate = new Date(2017, 3, 2, 2).valueOf()

const ticketsCount = {
  1491084000000: 3,
  1491084900000: 10,
  1491085800000: 0,
  1491086700000: 2,
}

storiesOf('Slider', module)
  .addWithInfo('Slider', () => (
    <div style={{ width: '252px' }}>
      <Slider
        sliderData={ticketsCount}
        min={startDate}
        max={endDate}
        values={[startDate, endDate]}
        step={900000}
      />
    </div>
  ))
