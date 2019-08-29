import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import icons from '@kupibilet/icons/dist/sprite.json'

import { color } from 'components/ThemeProvider/theme'
import RoundButton from 'components/RoundButton'

const shouldRenderTooltipSelect = (defaultValue = true) => select(
  'shouldRenderTooltip',
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

const themeColorSelect = (defaultValue = 'fail') => select(
  'themeColor',
  Object.keys(color),
  defaultValue,
)

storiesOf('COMPONENTS|Controls/RoundButton', module)
  .add('Default', () => (
    <RoundButton
      shouldRenderTooltip={shouldRenderTooltipSelect()}
      iconName={iconNameSelect()}
      themeColor={themeColorSelect()}
    >
      {text('tooltip', 'Сбросить')}
    </RoundButton>
  ))
