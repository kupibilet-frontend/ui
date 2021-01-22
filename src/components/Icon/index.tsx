import React from 'react'
import { withTheme } from 'styled-components'
import cn from 'classnames'

import { COLOR_NAMES, TTheme } from 'components/ThemeProvider/types'
import { IconSvg, IconWrapper, PaidIcon } from './styled'
import { ICON_SIZES } from './consts'

interface TIconProps {
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
  theme: TTheme,
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
  fill = COLOR_NAMES.miscDarker,
}: TIconProps): JSX.Element => (
  <IconWrapper striked={striked} paid={paid}>
    <IconSvg
      size={size}
      name={name}
      fill={fill}
      rotate={rotate ? 'true' : ''}
      striked={striked}
      className={cn(className, { 'icon-inherit-color': inheritColor })}
    >
      <use xlinkHref={`#${prefix}_${name}`} />
    </IconSvg>
    {!striked && paid && <PaidIcon currency={currency} />}
  </IconWrapper>
)

export default withTheme(Icon)
