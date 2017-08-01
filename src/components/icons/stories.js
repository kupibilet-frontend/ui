import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import Icon from 'components/icons'

const sizesSelect = (defaultValue = 'large') => select(
  'size',
  {
    small: 'Small',
    normal: 'Normal',
    large: 'Large',
  },
  defaultValue,
)

storiesOf('Icon', module).addWithInfo(
  'Icon with fill',
  `
    description
  `,
  () => (
    <Icon name="checkbox" size={sizesSelect()} fill="primary" />
  ),
)
