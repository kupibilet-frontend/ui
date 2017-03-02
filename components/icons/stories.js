import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Icon from './index'

storiesOf('Icon', module).addWithInfo(
  'Small Icon with stroke',
  `
    description
  `,
  () => (
    <Icon name="checkbox" size="small" stroke="text" />
  ),
).addWithInfo(
  'Medium Icon with stroke & fill',
  `
    description
  `,
  () => (
    <Icon name="airport-change" size="medium" stroke="secondary" fill="primary" />
  ),
)
