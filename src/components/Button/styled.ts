import styled, { css, DefaultTheme } from 'styled-components'

import { control } from 'utils/reset'
import { switchTransition } from 'utils/transitions'
import { getLinkColor, getLinkHoverColor } from 'utils/link'
import { queries } from 'utils/media-queries'
import {
  BUTTON_SIZES_NAMES,
  TNeighboringInGroupType,
  TButtonVariant,
} from './types'
import { BUTTON_SIZES } from './consts'


// TThemeAndVariantProps is a common type for many helpers functions
interface TThemeAndVariantProps {
  variant: TButtonVariant,
  theme: DefaultTheme,
}

const TYPOGRAPHY = {
  [BUTTON_SIZES_NAMES.small]: 16,
  [BUTTON_SIZES_NAMES.normal]: 18,
  [BUTTON_SIZES_NAMES.large]: 20,
}

function calculateButtonPadding(
  size: BUTTON_SIZES_NAMES, icon: boolean, hasLeftIcon: boolean, hasRightIcon: boolean,
): string {
  const spacing = BUTTON_SIZES[size]
  const typographyRelatedPadding = ((spacing * 2 - TYPOGRAPHY[size]) / 2).toFixed(1)
  const iconVisualCenterShift = 5 / 4
  const iconPadding = (BUTTON_SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  // Symetric padding around icon-only button for circle effect
  if (icon) {
    return `padding: ${typographyRelatedPadding}px;`
  }

  return `
    padding: ${typographyRelatedPadding}px;
    padding-right: ${hasRightIcon ? iconPadding : spacing}px;
    padding-left: ${hasLeftIcon ? iconPadding : spacing}px;
  `
}

function calculateTextPadding(
  size: BUTTON_SIZES_NAMES, hasLeftIcon: boolean, hasRightIcon: boolean,
): string {
  const iconVisualCenterShift = 3 / 4
  const iconPadding = (BUTTON_SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  return `0 ${hasRightIcon ? iconPadding : 0}px 0 ${hasLeftIcon ? iconPadding : 0}px`
}

function calculateBorderRadius(neighboringInGroup: TNeighboringInGroupType): string {
  if (neighboringInGroup === 'both') {
    return ''
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 6px 6px 0;`
  } else if (neighboringInGroup === 'right') {
    return `border-radius: 6px 0 0 6px;`
  }

  return `border-radius: 6px;`
}
function getButtonColor(props: TThemeAndVariantProps): string {
  const { theme, variant } = props
  if (variant === 'primary') {
    return theme.color.background
  } else if (variant === 'secondary') {
    return theme.color.primaryDarkest
  } else if (variant === 'link') {
    return getLinkColor(props)
  }

  return ''
}
function getButtonHoverColor(props: TThemeAndVariantProps): string {
  if (props.variant === 'link') {
    return getLinkHoverColor(props)
  }

  return ''
}

function getButtonBackground({ theme, variant }: TThemeAndVariantProps): string {
  if (variant === 'primary') {
    return theme.color.primaryDark
  } else if (variant === 'secondary') {
    return theme.color.miscLightest
  } if (variant === 'link') {
    return 'transparent'
  }

  return ''
}

function getButtonHoverBackground({ theme, variant }: TThemeAndVariantProps): string {
  if (variant === 'primary') {
    return theme.color.primaryDarker
  } else if (variant === 'secondary') {
    return theme.color.miscLighter
  } if (variant === 'link') {
    return 'transparent'
  }

  return ''
}

function getButtonActiveBackground({ theme, variant }: TThemeAndVariantProps): string {
  if (variant === 'primary') {
    return theme.color.primaryDarkest
  } else if (variant === 'secondary') {
    return theme.color.miscLight
  } if (variant === 'link') {
    return 'transparent'
  }

  return ''
}

interface TStyledButtonProps {
  size: BUTTON_SIZES_NAMES,
  isBlock: boolean,
  neighboringInGroup: TNeighboringInGroupType,
  variant: TButtonVariant,
  isIconOnly: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  disabled: boolean,
}

export const StyledButton = styled.button<TStyledButtonProps>`
  ${control}
  display: inline-block;
  color: ${getButtonColor};
  background: ${getButtonBackground};

  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  line-height: ${({ size }) => TYPOGRAPHY[size]}px;
  ${({ isBlock }) => isBlock && css`
    width: 100%;
  `}

  
  @media ${queries.isHandheld} {
    ${({ isBlock }) => !isBlock && css`
      max-width: 340px;
    `}
  }

  // Fix circle-to-rect render bug in chrome
  transform: translateZ(0);

  ${({ neighboringInGroup }) => (
    calculateBorderRadius(neighboringInGroup)
  )};

  ${({ size, isIconOnly, hasLeftIcon, hasRightIcon }) => (
    calculateButtonPadding(size, isIconOnly, hasLeftIcon, hasRightIcon)
  )};

  ${switchTransition}
  transition-property: opacity, box-shadow;

  ${({ disabled }) => (disabled
    ? 'opacity: .2;'
    : '')}

  .icon-inherit-color {
    fill: ${getButtonColor};
  }

  &:hover, &:focus {
    ${(props) => (
    !props.disabled
      ? `
        cursor: pointer;
        background: ${getButtonHoverBackground(props)};
        box-shadow: 0 0 0 1px ${getButtonHoverBackground(props)};

        // Immediately change visual state on hover, mousedown and mouseup
        // Transition only for mouseleave
        transition: none;
      `
      : ''
  )}

    ${(props) => ((!props.disabled && props.variant === 'link') && `color: ${getButtonHoverColor(props)};`)}
  }

  &:active {
    ${(props) => (
    !props.disabled
      ? `
        background: ${getButtonActiveBackground(props)};
        box-shadow: none;
      `
      : ''
  )}
  }
`
export const StyledButtonLink = StyledButton.withComponent('a')

interface TStyledButtonTextProps {
  size: BUTTON_SIZES_NAMES,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
}

export const StyledButtonText = styled.span<TStyledButtonTextProps>`
  display: inline-block;
  vertical-align: top;

  padding: ${({ size, hasLeftIcon, hasRightIcon }) => calculateTextPadding(size, hasLeftIcon, hasRightIcon)};
`

interface TIconWrapProps {
  size: BUTTON_SIZES_NAMES,
}

export const IconWrap = styled.span<TIconWrapProps>`
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => TYPOGRAPHY[size]}px;
  height: ${({ size }) => TYPOGRAPHY[size]}px;
`
