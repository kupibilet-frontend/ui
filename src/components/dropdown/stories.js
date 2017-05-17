import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Dropdown from './index'

storiesOf('Dropdown', module)
  .addWithInfo('Defalut', () => (
    <Dropdown overlay={<div><h2>Tethered</h2></div>}>
      <div><span>Tethered</span><button>click</button></div>
    </Dropdown>
  ))
