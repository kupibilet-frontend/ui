import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import icons from '@kupibilet/icons/dist/sprite.json'

import Icon, { sizes } from 'components/Icon'
import { color } from 'components/ThemeProvider/theme'

const iconSizes = Object.keys(sizes)
const colorNames = [null, ...Object.keys(color)]

storiesOf('COMPONENTS|Icon', module)
  .add('Default', () => (
    <Icon
      name={select('name', icons, 'checkmark')}
      size={select('size', iconSizes, 'large')}
      fill={select('fill', colorNames, 'primary')}
      striked={boolean('striked', false)}
      rotate={boolean('rotate', false)}
      inheritColor={boolean('inheritColor', false)}
    />
  ))
