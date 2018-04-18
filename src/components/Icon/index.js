import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
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
  }};
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
  }};
`

// Scoped inside `colorKeys` because `fill` are valid HTML attrs
const Icon = ({
  prefix,
  name,
  striked,
  className,
  inheritColor,
  rotate,
  ...props
}) => (
  <IconWrapper striked={striked}>
    <IconSvg
      {...props}
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
