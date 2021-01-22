import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { select, boolean } from '@storybook/addon-knobs'
import icons from '@kupibilet/icons/dist/sprite.json'

import { COLOR_NAMES } from 'components/ThemeProvider/types'

import Icon from './index'
import { ICON_SIZES } from './consts'

const AllIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 12px 6px;
`

storiesOf('COMPONENTS|Icon', module)
  .add('All icons', () => (
    <AllIconsWrapper>
      {icons.map((icon) => (
        <IconWrapper>
          <Icon
            name={icon}
            size={select('size', ICON_SIZES, ICON_SIZES.large)}
            fill={select('fill', COLOR_NAMES, COLOR_NAMES.primary)}
            striked={boolean('striked', false)}
            paid={boolean('paid', false)}
            rotate={boolean('rotate', false)}
            inheritColor={boolean('inheritColor', false)}
          />

          {icon}
        </IconWrapper>
      ))}
    </AllIconsWrapper>
  ))
  .add('Default', () => (
    <Icon
      name={select('name', icons, 'checkmark')}
      size={select('size', ICON_SIZES, ICON_SIZES.large)}
      fill={select('fill', COLOR_NAMES, COLOR_NAMES.primary)}
      striked={boolean('striked', false)}
      paid={boolean('paid', false)}
      rotate={boolean('rotate', false)}
      inheritColor={boolean('inheritColor', false)}
    />
  ))
