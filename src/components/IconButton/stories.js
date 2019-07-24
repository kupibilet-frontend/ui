import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import icons from '@kupibilet/icons/dist/sprite.json'

import IconButton from 'components/IconButton'

const withTooltipSelect = (defaultValue = true) => select(
  'withTooltip',
  {
    true: true,
    false: false,
  },
  defaultValue,
)

const iconNameSelect = (defaultValue = 'cross') => select(
  'iconName',
  icons,
  defaultValue,
)

const colorSelect = (defaultValue = 'fail') => text(
  'color',
  defaultValue,
)

storiesOf('COMPONENTS|Controls/IconButton', module)
  .add('Default', () => (
    <IconButton
      withTooltip={withTooltipSelect()}
      iconName={iconNameSelect()}
      color={colorSelect()}
    />
  ))
