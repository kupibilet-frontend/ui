import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import icons from '@kupibilet/icons/dist/sprite.json'

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

storiesOf('COMPONENTS|Controls/RoundButton', module)
  .add('Default', () => (
    <RoundButton
      shouldRenderTooltip={shouldRenderTooltipSelect()}
      iconName={iconNameSelect()}
      buttonColor={text('color', 'fail')}
    >
      {text('tooltip', 'Сбросить')}
    </RoundButton>
  ))
