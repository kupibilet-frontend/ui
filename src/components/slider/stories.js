import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Slider from './index'

const startDate = new Date(2017, 3, 2, 1).valueOf()
const endDate = new Date(2017, 3, 2, 2).valueOf()

const obj = {}

for (let i = 0; i < 150; ++i) {
  obj[i] = ~~(Math.random() * 10)
}

const ticketsCount = {
  0: 2,
  1: 1,
  2: 3,
  3: 5,
  4: 10,
  5: 8,
}

storiesOf('Slider', module)
  .addWithInfo('Slider', () => (
    <div style={{ width: '252px' }}>
      <Slider
        sliderData={obj}
        displayValue={(val) => val * 2}
      />
    </div>
  ))
