import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from './index'

// const startDate = new Date(2017, 3, 2, 1).valueOf()
// const endDate = new Date(2017, 3, 2, 2).valueOf()


const ticketsCount = {}

for (let i = 0; i < 150; ++i) {
  ticketsCount[i] = i % 4
}

storiesOf('Controls/Slider', module)
  .addWithInfo('Slider', () => (
    <div style={{ width: '252px' }}>
      <Slider
        sliderData={ticketsCount}
        displayValue={(val) => val * 2}
      />
    </div>
  ))
