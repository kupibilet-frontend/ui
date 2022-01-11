import styled, { DefaultTheme, css } from 'styled-components'

import { control } from 'utils/reset'
import { switchTransition } from 'utils/transitions'
import { queries } from 'utils/media-queries'
import {
  TNeighboringInGroupType,
  TButtonVariant,
  TButtonSize,
} from './types'
import { BUTTON_SIZES, BUTTON_TYPOGRAPHY } from './consts'

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
  variant: TButtonVariant,
  neighboringInGroup: TNeighboringInGroupType,
  theme: DefaultTheme,
): string {
  // @ts-ignore
  const radius = theme.button[`button_${variant}_${size}_size_border_radius_default`]

  if (neighboringInGroup === 'both') {
    return ''
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 ${radius} ${radius} 0;`
  } else if (neighboringInGroup === 'right') {
    return `border-radius: ${radius} 0 0 ${radius};`
  }

  return `border-radius: ${radius};`
}

interface TStyledButtonProps {
  size: 'medium',
  isBlock: boolean,
  neighboringInGroup: TNeighboringInGroupType,
  variant: 'primary' | 'secondary',
  isIconOnly: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  disabled: boolean,
}

export const StyledButton = styled.button<TStyledButtonProps>`
  ${control}
  display: inline-block;
  color: ${({ theme, variant, size }) => theme.button[`button_${variant}_${size}_color_text_normal`]};

  background: ${({ theme, variant, size }) => {
    // @ts-ignore
    return theme.button[`button_${variant}_${size}_color_bg_normal`]
  }};

  font-size: ${({ theme, variant, size }) => theme.button[`button_${variant}_${size}_typography_default_default`].size}px;
  line-height: ${({ theme, variant, size }) => theme.button[`button_${variant}_${size}_typography_default_default`].lineHeight}px;
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

  ${({ theme, neighboringInGroup, size, variant }) => (
    calculateBorderRadius(size, variant, neighboringInGroup, theme)
  )};

  ${({ size, isIconOnly, hasLeftIcon, hasRightIcon }) => (
    calculateButtonPadding(size, isIconOnly, hasLeftIcon, hasRightIcon)
  )};

  ${switchTransition}
  transition-property: opacity, box-shadow;

  ${({ theme, disabled, variant, size }) => disabled && css`
    color: ${theme.button[`button_${variant}_${size}_color_text_disable`]};
    background: ${theme.button[`button_${variant}_${size}_color_bg_disable`]};
  `}

  .icon-inherit-color {
    fill: ${({ theme, variant, size }) => theme.button[`button_${variant}_${size}_color_text_normal`]};
  }

  &:hover {
    ${({ theme, disabled, variant, size }) => !disabled && css`
      cursor: pointer;
      color: ${theme.button[`button_${variant}_${size}_color_text_hover`]};
      background: ${theme.button[`button_${variant}_${size}_color_bg_hover`]};
      transition: none;
    `}
  }

  &:focus {
    ${({ theme, disabled, variant, size }) => !disabled && css`
      cursor: pointer;
      color: ${theme.button[`button_${variant}_${size}_color_text_focus`]};
      background: ${theme.button[`button_${variant}_${size}_color_bg_focus`]};
      transition: none;
    `}
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
