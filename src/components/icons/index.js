import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import cn from 'classnames'

import { switchTransition } from '../../utils/transitions'
import { getThemeColor, ThemingPropTypes } from '../../utils/theme'

const sizes = {
  normal: 18,
  xxsmall: 15,
  xsmall: 24,
  small: 30,
  medium: 36,
  large: 42,
  xlarge: 54,
  xxlarge: 60,
}

const IconSvg = styled.svg`
  ${switchTransition};
  transition-property: fill;
  height: ${({ size }) => sizes[size]}px;
  width: ${({ size }) => sizes[size]}px;
  fill: ${({ theme, colorKeys }) => getThemeColor(theme, colorKeys.fill)};
`

// Scoped inside `colorKeys` because `fill` are valid HTML attrs
const Icon = ({ size, fill, prefix, name, style, className, inheritColor }) => (
  <IconSvg
    className={cn(className, { 'icon-inherit-color': inheritColor })}
    size={size}
    colorKeys={{
      fill,
    }}
    style={style}
  >
    <use xlinkHref={`#${prefix}_${name}`} />
  </IconSvg>
)

Icon.defaultProps = {
  prefix: 'kb',
  size: 'normal',
  fill: null,
  inheritColor: false,
}

Icon.propTypes = {
  /* eslint-disable react/require-default-props */
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  prefix: PropTypes.string,
  fill: ThemingPropTypes.themeColor,
  style: PropTypes.object,
  className: PropTypes.string,
  inheritColor: PropTypes.bool,
}


export default withTheme(Icon)
