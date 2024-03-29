import styled, { css, DefaultTheme } from 'styled-components'

import { control } from 'utils/reset'
import {
  TNeighboringInGroupType,
  TButtonVariant,
  TButtonSize,
  TIconPosition,
} from './types'

type TState = 'hover' | 'active'

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
  state?: TState
}

interface TGetButtonBackground {
  variant: TButtonVariant,
  theme: DefaultTheme,
  disabled: boolean,
  size: TButtonSize,
  state?: TState
}

interface TCalculateButtonPadding {
  variant: TButtonVariant,
  theme: DefaultTheme,
  size: TButtonSize,
  isIconOnly: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
}

interface TCalculateMargin {
  variant: TButtonVariant,
  theme: DefaultTheme,
  size: TButtonSize,
  isIconOnly: boolean,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
}

interface TCalculateIconMargin {
  variant: TButtonVariant,
  theme: DefaultTheme,
  size: TButtonSize,
  iconPosition?: TIconPosition,
}

function calculateButtonPadding({
  variant,
  theme,
  size,
  isIconOnly,
  hasLeftIcon,
  hasRightIcon,
}: TCalculateButtonPadding) {
  const buttonDefaultPadding = theme.button[`button_default_${variant}_${size}_size_padding_default`]
  const buttonWithIconPadding = theme.button[`button_composite_${variant}_${size}_size_padding_default`]
  const buttonIconPadding = theme.button[`button_icon_${variant}_${size}_size_padding_default`]

  let paddingTokens = buttonDefaultPadding

  if (isIconOnly) {
    paddingTokens = buttonIconPadding
  }

  if (hasLeftIcon || hasRightIcon) {
    paddingTokens = buttonWithIconPadding
  }

  return `
    padding-top: ${paddingTokens.top};
    padding-bottom: ${paddingTokens.bottom};
    padding-right: ${paddingTokens.right};
    padding-left: ${paddingTokens.left};
  `
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
  state,
}: TGetButtonColor): string {
  if (disabled) {
    return theme.button[`button_default_${variant}_${size}_color_text_disable`]
  }

  if (state === 'hover') {
    return theme.button[`button_default_${variant}_${size}_color_text_hover`]
  }

  if (state === 'active') {
    return theme.button[`button_default_${variant}_${size}_color_text_active`]
  }

  return theme.button[`button_default_${variant}_${size}_color_text_normal`]
}

function calculateMargin({
  variant,
  theme,
  size,
  isIconOnly,
  hasLeftIcon,
  hasRightIcon,
}: TCalculateMargin) {
  if (variant !== 'text') return

  const buttonDefaultPadding = theme.button[`button_default_${variant}_${size}_size_padding_default`]
  const buttonWithIconPadding = theme.button[`button_composite_${variant}_${size}_size_padding_default`]
  const buttonIconPadding = theme.button[`button_icon_${variant}_${size}_size_padding_default`]

  let paddingTokens = buttonDefaultPadding

  if (isIconOnly) {
    paddingTokens = buttonIconPadding
  }

  if (hasLeftIcon || hasRightIcon) {
    paddingTokens = buttonWithIconPadding
  }

  return `
    margin-right: -${paddingTokens.right};
    margin-left: -${paddingTokens.left};
  `
}

function getButtonBackground({
  theme,
  variant,
  size,
  disabled,
  state,
}: TGetButtonBackground): string {
  if (disabled) {
    return theme.button[`button_default_${variant}_${size}_color_bg_disable`]
  }

  if (state === 'hover') {
    return theme.button[`button_default_${variant}_${size}_color_bg_hover`]
  }

  if (state === 'active') {
    return theme.button[`button_default_${variant}_${size}_color_bg_active`]
  }

  return theme.button[`button_default_${variant}_${size}_color_bg_normal`]
}

function calculateIconMargin({
  variant,
  theme,
  size,
  iconPosition,
}: TCalculateIconMargin) {
  if (!iconPosition) return

  const buttonWithIconPadding = theme.button[`button_composite_${variant}_${size}_size_padding_default`]
  const innerMargin = buttonWithIconPadding.innerHorizontal

  if (iconPosition === 'left') {
    return `
      margin-right: ${innerMargin};
    `
  }

  if (iconPosition === 'right') {
    return `
      margin-left: ${innerMargin};
    `
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

export const StyledButton = styled.button<TStyledButtonProps>`
  ${control}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${getButtonColor};
  background: ${getButtonBackground};
  font-size: ${({ theme, variant, size }) => theme.button[`button_default_${variant}_${size}_typography_desktop_default`].size}px;
  font-weight: ${({ theme, variant, size }) => theme.button[`button_default_${variant}_${size}_typography_desktop_default`].fontWeight};
  line-height: ${({ theme, variant, size }) => theme.button[`button_default_${variant}_${size}_typography_desktop_default`].lineHeight}px;
  ${({ isBlock }) => isBlock && css`
    width: 100%;
  `}
  ${({ size, variant, theme, isIconOnly, hasLeftIcon, hasRightIcon }) => (
    calculateMargin({ size, variant, theme, isIconOnly, hasLeftIcon, hasRightIcon })
  )};
  // Fix circle-to-rect render bug in chrome
  transform: translateZ(0);
  ${({ neighboringInGroup, variant, theme, size }) => (
    calculateBorderRadius({ size, neighboringInGroup, variant, theme })
  )};
  ${({ size, variant, theme, isIconOnly, hasLeftIcon, hasRightIcon }) => (
    calculateButtonPadding({ size, variant, theme, isIconOnly, hasLeftIcon, hasRightIcon })
  )};
  .icon-inherit-color {
    fill: ${getButtonColor};
  }
  &:hover {
    ${(props) => !props.disabled && `
      cursor: pointer;
      background: ${getButtonBackground({ ...props, state: 'hover' })};
      color: ${getButtonColor({ ...props, state: 'hover' })};
      .icon-inherit-color {
        fill: ${getButtonColor({ ...props, state: 'hover' })};
      }
    `}
  }
  &:active {
    ${(props) => !props.disabled && `
      background: ${getButtonBackground({ ...props, state: 'active' })};
      color: ${getButtonColor({ ...props, state: 'active' })};
      .icon-inherit-color {
        fill: ${getButtonColor({ ...props, state: 'active' })};
      }
    `}
  }
`
export const StyledButtonLink = StyledButton.withComponent('a')

interface TStyledButtonTextProps {
  variant: TButtonVariant,
  size: TButtonSize,
  withTextUnderline: boolean,
}

export const StyledButtonText = styled.span<TStyledButtonTextProps>`
  display: inline-block;
  vertical-align: top;
  text-decoration-skip-ink: none;
  ${({ withTextUnderline }) => withTextUnderline && `
    text-decoration: underline;
  `}
`

interface TIconWrapProps {
  size: TButtonSize,
  variant: TButtonVariant,
  iconPosition?: TIconPosition,
}

export const IconWrap = styled.span<TIconWrapProps>`
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  ${({ size, variant, theme, iconPosition }) => (
    calculateIconMargin({ size, variant, theme, iconPosition })
  )};
`
