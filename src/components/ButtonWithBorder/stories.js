import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import icons from '@kupibilet/icons/dist/sprite.json'

import { color } from 'components/ThemeProvider/theme'
import ButtonWithBorder from 'components/ButtonWithBorder'

const withOvershadowSelect = (defaultValue = false) => select(
  'withOvershadow',
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

const themeColorSelect = (defaultValue = 'secondaryDarkest') => select(
  'themeColor',
  Object.keys(color),
  defaultValue,
)

const overshadowThemeColorSelect = (defaultValue = 'miscLightest') => select(
  'overshadowThemeColor',
  Object.keys(color),
  defaultValue,
)

storiesOf('COMPONENTS|Controls/ButtonWithBorder', module)
  .add('Default', () => (
    <ButtonWithBorder
      themeColor={themeColorSelect()}
      iconName={iconNameSelect()}
      withOvershadow={withOvershadowSelect()}
      overshadowThemeColor={overshadowThemeColorSelect()}
    >
      {text('text', 'Сбросить все фильтры')}
    </ButtonWithBorder>
  ))
