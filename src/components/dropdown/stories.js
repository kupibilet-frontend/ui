import React from 'react'
import { storiesOf } from '@kadira/storybook'
import RcDropdown from './index'

storiesOf('Dropdown', module)
  .addWithInfo('Defalut', () => (
    <RcDropdown
      template={<div><h2>Tethered</h2></div>}
      button={<button>Toggle Content</button>}
    />
  ))
