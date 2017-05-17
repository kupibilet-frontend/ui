import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Dropdown from './index'

storiesOf('Dropdown', module)
  .addWithInfo('Defalut', () => (
    <Dropdown
      template={<div><h2>Tethered</h2></div>}
      button={<div><span>Tethered</span><button>click</button></div>}
    />
  ))
