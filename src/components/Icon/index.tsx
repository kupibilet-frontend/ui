import React from 'react'
import { DefaultTheme, withTheme } from 'styled-components'
import cn from 'classnames'

import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { IconSvg, IconWrapper, PaidIcon } from './styled'
import { ICON_SIZES } from './consts'

export interface TIconProps {
  name: string,
  size?: ICON_SIZES,
  prefix?: string,
  fill?: COLOR_NAMES,
  className?: string | null,
  inheritColor?: boolean,
  striked?: boolean,
  paid?: boolean
  rotate?: string | boolean,
  currency?: string,
  theme: DefaultTheme,
  onClick?: () => void,
}

const Icon = ({
  name,
  size = ICON_SIZES.normal,
  prefix = 'kb',
  striked = false,
  className = null,
  inheritColor = false,
  rotate = false,
  paid = false,
  currency = 'RUB',
  fill = COLOR_NAMES.misc600,
  onClick,
  ...restProps
}: TIconProps): JSX.Element => (
  <IconWrapper
    striked={striked}
    paid={paid}
    onClick={onClick}
  >
    <IconSvg
      size={size}
      name={name}
      fill={fill}
      rotate={rotate ? 'true' : ''}
      striked={striked}
      className={cn(className, { 'icon-inherit-color': inheritColor })}
      {...restProps}
    >
      <use xlinkHref={`#${prefix}_${name}`} />
    </IconSvg>
    {!striked && paid && <PaidIcon currency={currency} />}
  </IconWrapper>
)

export default withTheme(Icon)
