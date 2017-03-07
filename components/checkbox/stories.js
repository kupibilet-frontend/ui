import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'

import Checkbox from './index'

storiesOf('Checkbox', module).addWithInfo(
  'Checkbox',
  `
    description
  `,
  () => (
    <Checkbox>{text('text', 'Авиабилеты')}</Checkbox>
  ),
).addWithInfo(
  'Checked Checkbox',
  `
    description
  `,
  () => (
    <Checkbox checked>{text('text', 'Прямые рейсы')}</Checkbox>
  ),
).addWithInfo(
  'Disabled Checkbox',
  `
    description
  `,
  () => (
    <Checkbox disabled>{text('text', 'Прямые рейсы')}</Checkbox>
  ),
)
