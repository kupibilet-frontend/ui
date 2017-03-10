import React, { PropTypes } from 'react'
import styled, { withTheme } from 'styled-components'

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
  transition-property: stroke, fill;
  height: ${({ size }) => sizes[size]}px;
  width: ${({ size }) => sizes[size]}px;
  fill: ${({ theme, colorKeys }) => getThemeColor(theme, colorKeys.fill)};
  stroke: ${({ theme, colorKeys }) => getThemeColor(theme, colorKeys.stroke)};
`

// Scoped inside `colorKeys` because `fill` and `stroke` are valid HTML attrs
const Icon = ({ size, fill, stroke, prefix, name }) => (
  <IconSvg
    size={size}
    colorKeys={{
      fill,
      stroke,
    }}
  >
    <use xlinkHref={`#${prefix}_${name}`} />
  </IconSvg>
)

Icon.defaultProps = {
  prefix: 'kb',
  size: 'normal',
  fill: null,
  stroke: null,
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  prefix: PropTypes.string,
  fill: ThemingPropTypes.themeColor,
  stroke: ThemingPropTypes.themeColor,
}


export default withTheme(Icon)
