import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { transition } from '../../utils/transition'

const sizes = {
  default: '18px',
  xxsmall: '15px',
  xsmall: '24px',
  small: '30px',
  medium: '36px',
  large: '42px',
  xlarge: '54px',
  xxlarge: '60px',
}

const IconSvg = styled.svg`
  ${transition};
  transition-property: stroke;
  height: ${(props) => sizes[props.size]};
  width: ${(props) => sizes[props.size]};
  fill: ${(props) => props.theme.color[props.fill] || props.theme.color.transparent};
  stroke: ${(props) => props.theme.color[props.stroke] || props.theme.color.transparent};
`

function Icon(props) {
  return (
    <IconSvg
      size={props.size}
      fill={props.fill}
      stroke={props.stroke}
    >
      <use xlinkHref={`#${props.prefix}_${props.name}`} />
    </IconSvg>
  )
}

Icon.defaultProps = {
  prefix: 'kb',
  size: 'default',
  fill: '',
  stroke: '',
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall']),
  prefix: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
}


export default Icon
