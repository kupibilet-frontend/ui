import styled, { css, DefaultTheme } from 'styled-components'

import { control } from 'utils/reset'
import { queries } from 'utils/media-queries'
import {
  TNeighboringInGroupType,
  TButtonVariant,
  TButtonSize,
} from './types'
import { BUTTON_SIZES, BUTTON_TYPOGRAPHY } from './consts'

interface TCalculateBorderRadius {
  size: TButtonSize,
  neighboringInGroup: TNeighboringInGroupType,
  theme: DefaultTheme,
  variant: TButtonVariant,
}

interface TGetButtonColor {
  variant: TButtonVariant,
  theme: DefaultTheme,
  disabled: boolean,
  size: TButtonSize,
  isHover?: boolean,
  isActive?: boolean,
}

interface TGetButtonBackground {
  variant: TButtonVariant,
  theme: DefaultTheme,
  disabled: boolean,
  size: TButtonSize,
  isHover?: boolean,
  isActive?: boolean,
}

interface TCalculateButtonPadding {
  variant: TButtonVariant,
  theme: DefaultTheme,
  size: TButtonSize,
}

function calculateButtonPadding({
  variant,
  theme,
  size,
}: TCalculateButtonPadding) {
  const paddingTokens = theme.button[`button_default_${variant}_${size}_size_padding_default`]
  return `
    padding-top: ${paddingTokens.top}
    padding-bottom: ${paddingTokens.bottom}
    padding-right: ${paddingTokens.right}
    padding-left: ${paddingTokens.left}
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

function calculateBorderRadius({
  size,
  neighboringInGroup,
  theme,
  variant,
}: TCalculateBorderRadius): string {
  const radius = theme.button[`button_default_${variant}_${size}_size_border_radius_default`]

  if (neighboringInGroup === 'both') {
    return ''
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 ${radius} ${radius} 0;`
  } else if (neighboringInGroup === 'right') {
    return `border-radius: ${radius} 0 0 ${radius};`
  }

  return `border-radius: ${radius};`
}

function getButtonColor({
  theme,
  variant,
  size,
  disabled,
  isHover,
  isActive,
}: TGetButtonColor): string {
  if (disabled) {
    return theme.button[`button_default_${variant}_${size}_color_text_disable`]
  }

  if (isHover) {
    return theme.button[`button_default_${variant}_${size}_color_text_hover`]
  }

  if (isActive) {
    return theme.button[`button_default_${variant}_${size}_color_text_active`]
  }

  return theme.button[`button_default_${variant}_${size}_color_text_normal`]
}

function getButtonBackground({
  theme,
  variant,
  size,
  disabled,
  isHover,
  isActive,
}: TGetButtonBackground): string {
  if (disabled) {
    return theme.button[`button_default_${variant}_${size}_color_bg_disable`]
  }

  if (isHover) {
    return theme.button[`button_default_${variant}_${size}_color_bg_hover`]
  }

  if (isActive) {
    return theme.button[`button_default_${variant}_${size}_color_bg_active`]
  }

  return theme.button[`button_default_${variant}_${size}_color_bg_normal`]
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
    return 'font-weight: 500;'
  }

  return ''
}

export const StyledButton = styled.button<TStyledButtonProps>`
  ${control}
  display: inline-block;
  color: ${getButtonColor};
  background: ${getButtonBackground};

  font-size: ${({ theme, variant, size }) => theme.button[`button_default_${variant}_${size}_typography_default_default`].size}px
  ${fontWeight}
  line-height: ${({ theme, variant, size }) => theme.button[`button_default_${variant}_${size}_typography_default_default`].lineHeight}px
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

  ${({ neighboringInGroup, variant, theme, size }) => (
    calculateBorderRadius({ size, neighboringInGroup, variant, theme })
  )};

  ${({ size, variant, theme }) => (
    calculateButtonPadding({ size, variant, theme })
  )};

  .icon-inherit-color {
    fill: ${getButtonColor};
  }

  &:hover {
    ${(props) => !props.disabled && `
      cursor: pointer;
      background: ${getButtonBackground({ ...props, isHover: true })};
      color: ${getButtonColor({ ...props, isHover: true })};
    `}
  }

  &:active {
    ${(props) => !props.disabled && `
      background: ${getButtonBackground({ ...props, isActive: true })};
      color: ${getButtonColor({ ...props, isActive: true })};
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
