import styled from 'styled-components'

import { control } from 'utils/reset'
import { switchTransition } from 'utils/transitions'
import { getLinkColor, getLinkHoverColor } from 'utils/link'

export const SIZES = {
  small: 12,
  normal: 15,
  large: 21,
}

const TYPOGRAPHY = {
  small: 16,
  normal: 18,
  large: 20,
}

const calculateButtonPadding = (
  size,
  icon,
  hasLeftIcon,
  hasRightIcon,
  neighboringInGroup
) => {
  const spacing = SIZES[size]
  const typographyRelatedPadding = (
    (spacing * 2 - TYPOGRAPHY[size]) /
    2
  ).toFixed(1)
  const iconVisualCenterShift = 5 / 4
  const iconPadding = (SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  // Symetric padding around icon-only button for circle effect
  if (icon) {
    return `padding: ${typographyRelatedPadding}px;`
  }

  /* eslint-disable no-param-reassign, no-multi-assign */
  if (neighboringInGroup === 'both') {
    hasLeftIcon = hasRightIcon = true
  } else if (neighboringInGroup === 'left') {
    hasLeftIcon = true
  } else if (neighboringInGroup === 'right') {
    hasRightIcon = true
  }

  return `
    padding: ${typographyRelatedPadding}px;
    padding-right: ${hasRightIcon ? iconPadding : spacing}px;
    padding-left: ${hasLeftIcon ? iconPadding : spacing}px;
  `
}

const calculateTextPadding = (size, hasLeftIcon, hasRightIcon) => {
  const iconVisualCenterShift = 3 / 4
  const iconPadding = (SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  return `0 ${hasRightIcon ? iconPadding : 0}px 0 ${
    hasLeftIcon ? iconPadding : 0
  }px`
}

const calculateBorderRadius = (size, neighboringInGroup) => {
  if (neighboringInGroup === 'both') {
    return ''
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 ${SIZES[size]}px ${SIZES[size]}px 0;`
  } else if (neighboringInGroup === 'right') {
    return `border-radius: ${SIZES[size]}px 0 0 ${SIZES[size]}px;`
  }

  return `border-radius: ${SIZES[size]}px;`
}
const getButtonColor = props => {
  const { theme, variant } = props
  if (variant === 'primary') {
    return theme.color.background
  } else if (variant === 'secondary') {
    return theme.color.primaryDarkest
  } else if (variant === 'link') {
    return getLinkColor(props)
  }
}
const getButtonHoverColor = props => {
  if (props.variant === 'link') {
    return getLinkHoverColor(props)
  }
}
const getButtonBackground = ({ theme, variant }) => {
  if (variant === 'primary') {
    return theme.color.primary
  } else if (variant === 'secondary') {
    return theme.color.miscLightest
  }
  if (variant === 'link') {
    return 'transparent'
  }
}
const getButtonHoverBackground = ({ theme, variant }) => {
  if (variant === 'primary') {
    return theme.color.primaryDark
  } else if (variant === 'secondary') {
    return theme.color.miscLighter
  }
  if (variant === 'link') {
    return 'transparent'
  }
}
const getButtonActiveBackground = ({ theme, variant }) => {
  if (variant === 'primary') {
    return theme.color.primaryDarker
  } else if (variant === 'secondary') {
    return theme.color.miscLight
  }
  if (variant === 'link') {
    return 'transparent'
  }
}

export const StyledButton = styled.button`
  ${control} display: inline-block;
  color: ${getButtonColor};
  background: ${getButtonBackground};

  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  line-height: ${({ size }) => TYPOGRAPHY[size]}px;

  // Fix circle-to-rect render bug in chrome
  transform: translateZ(0);

  ${({ size, neighboringInGroup }) =>
    calculateBorderRadius(size, neighboringInGroup)};

  ${({
    size,
    isIconOnly,
    hasLeftIcon,
    hasRightIcon,
    neighboringInGroup,
    variant,
  }) =>
    calculateButtonPadding(
      size,
      isIconOnly,
      hasLeftIcon,
      hasRightIcon,
      neighboringInGroup,
      variant
    )};

  ${switchTransition} transition-property: opacity, box-shadow;

  ${({ disabled }) => (disabled ? 'opacity: .2;' : '')} .icon-inherit-color {
    fill: ${getButtonColor};
  }

  &:hover {
    ${props =>
      !props.disabled
        ? `
          cursor: pointer;
          background: ${getButtonHoverBackground(props)};
          box-shadow: 0 0 0 1px ${getButtonHoverBackground(props)};

          // Immediately change visual state on hover, mousedown and mouseup
          // Transition only for mouseleave
          transition: none;
        `
        : ''} ${props =>
      !props.disabled &&
      props.variant === 'link' &&
      `color: ${getButtonHoverColor(props)};`};
  }

  &:active {
    ${props =>
      !props.disabled
        ? `
          background: ${getButtonActiveBackground(props)};
          box-shadow: none;
        `
        : ''};
  }
`
export const StyledButtonLink = StyledButton.withComponent('a')

export const StyledButtonText = styled.span`
  display: inline-block;
  vertical-align: top;

  padding: ${({ size, hasLeftIcon, hasRightIcon }) =>
    calculateTextPadding(size, hasLeftIcon, hasRightIcon)};
`

export const IconWrap = styled.span`
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => TYPOGRAPHY[size]}px;
  height: ${({ size }) => TYPOGRAPHY[size]}px;
`
