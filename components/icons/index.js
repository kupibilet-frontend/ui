import React, { PropTypes } from 'react'
import styled from 'styled-components'
import _omit from 'lodash/omit'

import { switchTransition } from '../../utils/transitions'

const sizes = {
  default: 18,
  xxsmall: 15,
  xsmall: 24,
  small: 30,
  medium: 36,
  large: 42,
  xlarge: 54,
  xxlarge: 60,
}

const getThemeColor = (theme, colorKey) => {
  if (colorKey && !(colorKey in theme.color)) {
    /* eslint-disable no-console, no-use-before-define */
    console.warn(`Unknown color "${colorKey}" supplied in props of <${Icon.name}>`)
  }
  return theme.color[colorKey] || 'transparent'
}

const IconSvg = styled.svg`
  ${switchTransition};
  transition-property: stroke, fill;
  height: ${({ size }) => sizes[size]}px;
  width: ${({ size }) => sizes[size]}px;
  fill: ${({ theme, fill }) => getThemeColor(theme, fill)};
  stroke: ${({ theme, stroke }) => getThemeColor(theme, stroke)};
`

const Icon = ({ size, fill, stroke, prefix, name }) => (
  <IconSvg
    size={size}
    fill={fill}
    stroke={stroke}
  >
    <use xlinkHref={`#${prefix}_${name}`} />
  </IconSvg>
)

Icon.defaultProps = {
  prefix: 'kb',
  size: 'default',
  fill: '',
  stroke: '',
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(
    _omit(sizes, 'default'),
  )),
  prefix: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
}


export default Icon
