import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import _mapValues from 'lodash/mapValues'
import icons from '@kupibilet/icons/dist/sprite.json'

import Icon, { sizes } from 'components/Icon'
import { color } from 'components/ThemeProvider/theme'

const iconSizes = _mapValues(
  sizes,
  (sizeUnits, sizeKey) => `${sizeKey}: ${sizeUnits}px`
)
const colorNames = [null, ...Object.keys(color)]

storiesOf('Icon', module).addWithInfo('Default', () => (
  <Icon
    name={select('name', icons, 'checkbox')}
    size={select('size', iconSizes, 'large')}
    fill={select('fill', colorNames, 'primary')}
    striked={boolean('striked', false)}
    rotate={boolean('rotate', false)}
    inheritColor={boolean('inheritColor', false)}
  />
))
