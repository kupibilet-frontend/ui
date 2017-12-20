import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from './index'


const onChange = (values) => {
  console.info(values)
}

storiesOf('Controls/Slider', module)
  .addWithInfo('default', () => (
    <div style={{ width: '252px' }}>
      <Slider
        min={1}
        max={1000}
        onChange={onChange}
      />
    </div>
  ))
