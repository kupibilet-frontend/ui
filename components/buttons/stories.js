import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'

import Button from './index'

storiesOf('Buttons', module).addWithInfo(
  'Button',
  `
    description
  `,
  () => (
    <Button>{text('text', 'Авиабилеты')}</Button>
  ),
).addWithInfo(
  'Button 2222',
  `
    description
  `,
  () => (
    <Button>{text('text', '12345')}</Button>
  ),
)
