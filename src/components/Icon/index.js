import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes } from 'styled-components'
import cn from 'classnames'

import { switchTransition } from 'utils/transitions'
import { getThemeColor, ThemingPropTypes } from 'utils/theme'

export const sizes = {
  normal: 18,
  xxsmall: 15,
  xsmall: 24,
  small: 30,
  medium: 36,
  large: 42,
  xlarge: 54,
  xxlarge: 60,
}

const preloader = keyframes`
  0% { transform: rotate(0deg); }

  6.6%  { transform: rotate(50deg);   }
  16.6% { transform: rotate(300deg);  }
  23.4% { transform: rotate(350deg);  }
  33.4% { transform: rotate(600deg);  }
  40%   { transform: rotate(650deg);  }

  50%   { transform: rotate(900deg);  }

  56.6% { transform: rotate(950deg);  }
  66.6% { transform: rotate(1200deg); }
  73.4% { transform: rotate(1250deg); }
  83.4% { transform: rotate(1500deg); }
  90%   { transform: rotate(1550deg); }

  100%  { transform: rotate(1800deg); }
`

const IconSvg = styled.svg`
  ${switchTransition};
  transition-property: fill, transform;
  height: ${({ size }) => sizes[size]}px;
  width: ${({ size }) => sizes[size]}px;
  fill: ${({ theme, fill }) => getThemeColor(theme, fill)};
  opacity: ${({ striked }) => (striked ? 0.6 : 1)};

  ${({ rotate }) => {
    if (rotate) {
      return `
        transform: rotate(180deg);
      `
    }
  }}

  ${({ name }) => name === 'spinner' && `
    animation: ${preloader} 3s infinite ease-in-out;
  `}
`

export const IconWrapper = styled.span`
  display: inline-flex;

  ${({ striked, theme }) => {
    if (striked) {
      return `
        position: relative;

        &:after {
          content: '';
          position: absolute;
          border-left: 1px solid ${theme.color.secondaryDarkest};
          width: 1px;
          height: 150%;
          transform: rotate(-45deg);
          top: -25%;
          left: 50%;
        }
      `
    }
  }}
  `

// Scoped inside `colorKeys` because `fill` are valid HTML attrs
const Icon = ({ prefix, name, striked, className, inheritColor, rotate, ...props }) => (
  <IconWrapper striked={striked}>
    <IconSvg
      {...props}
      name={name}
      rotate={rotate ? 'true' : ''}
      striked={striked}
      className={cn(className, { 'icon-inherit-color': inheritColor })}
    >
      <use xlinkHref={`#${prefix}_${name}`} />
    </IconSvg>
  </IconWrapper>
)

Icon.defaultProps = {
  prefix: 'kb',
  size: 'normal',
  fill: null,
  className: null,
  inheritColor: false,
  striked: false,
  rotate: false,
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  prefix: PropTypes.string,
  fill: ThemingPropTypes.themeColor,
  className: PropTypes.string,
  inheritColor: PropTypes.bool,
  striked: PropTypes.bool,
  rotate: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}


export default withTheme(Icon)
