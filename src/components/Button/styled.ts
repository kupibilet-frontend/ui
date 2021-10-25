import styled, { css, DefaultTheme } from 'styled-components'

import { control } from 'utils/reset'
import { switchTransition } from 'utils/transitions'
import { getLinkColor, getLinkHoverColor } from 'components/Link/styled'
import { queries } from 'utils/media-queries'
import {
  TNeighboringInGroupType,
  TButtonVariant,
  TButtonSize,
} from './types'
import { BUTTON_BORDER_RADIUS, BUTTON_SIZES, BUTTON_TYPOGRAPHY } from './consts'


// TThemeAndVariantProps is a common type for many helpers functions
interface TThemeAndVariantProps {
  variant: TButtonVariant,
  theme: DefaultTheme,
}

function calculateButtonPadding(
  size: TButtonSize, icon: boolean, hasLeftIcon: boolean, hasRightIcon: boolean,
): string {
  const spacing = BUTTON_SIZES[size]
  const typographyRelatedPadding = ((spacing * 2 - BUTTON_TYPOGRAPHY[size]) / 2).toFixed(1)
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
  size: TButtonSize, hasLeftIcon: boolean,
  hasRightIcon: boolean,
): string {
  const iconVisualCenterShift = 3 / 4
  const iconPadding = (BUTTON_SIZES[size] / 2 * iconVisualCenterShift).toFixed(1)

  return `0 ${hasRightIcon ? iconPadding : 0}px 0 ${hasLeftIcon ? iconPadding : 0}px`
}

function calculateBorderRadius(
  size: TButtonSize,
  neighboringInGroup: TNeighboringInGroupType,
): string {
  const radius = BUTTON_BORDER_RADIUS[size]

  if (neighboringInGroup === 'both') {
    return ''
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 ${radius}px ${radius}px 0;`
  } else if (neighboringInGroup === 'right') {
    return `border-radius: ${radius}px 0 0 ${radius}px;`
  }

  return `border-radius: ${radius}px;`
}
function getButtonColor(props: TThemeAndVariantProps): string {
  const { theme, variant } = props
  switch (variant) {
    default:
    case 'primary':
    case 'contrast':
    case 'help':
      return theme.color.colorTextContrast
    case 'secondary':
      return theme.color.colorTextPrimary
    case 'link':
      return getLinkColor(props)
  }
}
function getButtonHoverColor(props: TThemeAndVariantProps): string {
  if (props.variant === 'link') {
    return getLinkHoverColor(props)
  }

  return ''
}

function getButtonBackground({ theme, variant }: TThemeAndVariantProps): string {
  switch (variant) {
    default:
    case 'primary':
      return theme.color.colorBgAccent
    case 'contrast':
      return theme.color.colorBgContrast
    case 'secondary':
      return theme.color.colorBgSecondary
    case 'help':
      return theme.color.colorBgHelp
    case 'link':
      return 'transparent'
  }
}

function getButtonHoverBackground({ theme, variant }: TThemeAndVariantProps): string {
  switch (variant) {
    default:
    case 'primary':
      return theme.color.colorBgAccentHover
    case 'contrast':
      return theme.color.colorBgContrastHover
    case 'secondary':
      return theme.color.colorBgSecondaryHover
    case 'help':
      return theme.color.colorBgHelpHover
    case 'link':
      return 'transparent'
  }
}

function getButtonActiveBackground({ theme, variant }: TThemeAndVariantProps): string {
  switch (variant) {
    default:
    case 'primary':
      return theme.color.colorBgAccentFocus
    case 'contrast':
      return theme.color.colorBgContrastFocus
    case 'secondary':
      return theme.color.colorBgSecondaryFocus
    case 'help':
      return theme.color.colorBgHelpFocus
    case 'link':
      return 'transparent'
  }
}

interface TStyledButtonProps {
  size: TButtonSize,
  isBlock: boolean,
  neighboringInGroup: TNeighboringInGroupType,
  variant: TButtonVariant,
  isIconOnly: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  disabled: boolean,
}

function fontWeight({ size }: TStyledButtonProps) {
  if (size !== 'small') {
    return 'font-weight: 600;'
  }

  return ''
}

export const StyledButton = styled.button<TStyledButtonProps>`
  ${control}
  display: inline-block;
  color: ${getButtonColor};
  background: ${getButtonBackground};

  font-size: ${({ size }) => BUTTON_TYPOGRAPHY[size]}px;
  ${fontWeight}
  line-height: ${({ size }) => BUTTON_TYPOGRAPHY[size]}px;
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

  ${({ neighboringInGroup, size }) => (
    calculateBorderRadius(size, neighboringInGroup)
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
  size: TButtonSize,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
}

export const StyledButtonText = styled.span<TStyledButtonTextProps>`
  display: inline-block;
  vertical-align: top;

  padding: ${({ size, hasLeftIcon, hasRightIcon }) => calculateTextPadding(size, hasLeftIcon, hasRightIcon)};
`

interface TIconWrapProps {
  size: TButtonSize,
}

export const IconWrap = styled.span<TIconWrapProps>`
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => BUTTON_TYPOGRAPHY[size]}px;
  height: ${({ size }) => BUTTON_TYPOGRAPHY[size]}px;
`
