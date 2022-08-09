import React from 'react'
import styled, { DefaultTheme, css } from 'styled-components'
import { switchTransition } from 'utils/transitions'
import { IconSvg } from 'components/Icon/styled'
import { TNeighboringInGroup } from './types'

const Error = styled.span`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.input.input_hint_default_medium_typography_desktop_input_hint.size}px;
  line-height: ${({ theme }) => theme.input.input_hint_default_medium_typography_desktop_input_hint.lineHeight}px;
  color: ${({ theme }) => theme.input.input_hint_default_medium_color_input_hint_error};
  z-index: 2;
`

interface TCommonInnerInputProps<T> {
  theme: DefaultTheme,
  neighboringInGroup?: TNeighboringInGroup,
  type?: string,
  placeholder: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  disabled?: boolean,
  error?: boolean,
  onBlur?: (event: React.FocusEvent<T>) => void,
  onFocus?: (event: React.FocusEvent<T>) => void,
}

type TGetInputBorderRadius = {
  neighboringInGroup?: TNeighboringInGroup,
  theme: DefaultTheme,
}

function getInputBorderRadius({ neighboringInGroup, theme }: TGetInputBorderRadius) {
  const radius = theme.input.input_default_medium_size_border_radius_default

  if (neighboringInGroup === 'right') {
    return `border-radius: ${radius} 0 0 ${radius};`
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 ${radius} ${radius} 0;`
  } else if (neighboringInGroup !== 'both') {
    return `border-radius: ${radius};`
  }

  return ''
}

type TGetInputPadding = {
  theme: DefaultTheme,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
}

const getInputPadding = ({ theme, leftIcon, rightIcon }: TGetInputPadding) => {
  return `
    padding-top: ${theme.input.input_default_medium_size_padding_default.top};
    padding-bottom: ${theme.input.input_default_medium_size_padding_default.bottom};
    padding-right: ${rightIcon ? 0 : theme.input.input_default_medium_size_padding_default.right};
    padding-left: ${leftIcon ? 0 : theme.input.input_default_medium_size_padding_default.left};
  `
}

function getCommonInputStyles<T>(props: TCommonInnerInputProps<T>) {
  return css`
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    height: 100%;
    line-height: ${props.theme.input.input_default_medium_typography_desktop_input_text.lineHeight}px;
    border: none;
    min-height: 38px;
    font-family: inherit;
    opacity: 1;

    ${getInputPadding({ theme: props.theme, leftIcon: props.leftIcon, rightIcon: props.rightIcon })}
    
    font-size: ${props.theme.input.input_default_medium_typography_desktop_input_text.size}px;
    color: ${props.theme.input.input_default_medium_color_input_text_normal};

    background-color: transparent;

    ${getInputBorderRadius({ neighboringInGroup: props.neighboringInGroup, theme: props.theme })}

    &::placeholder {
      color: ${({ theme }) => theme.input.input_default_medium_color_placeholder_normal};
    }

    &:focus {
      outline-style: none;
    }

    &:disabled {
      color: ${({ theme }) => theme.input.input_default_medium_color_input_text_disable};
      -webkit-text-fill-color: ${({ theme }) => theme.input.input_default_medium_color_input_text_disable};
      &::placeholder {
        color: ${({ theme }) => theme.input.input_default_medium_color_placeholder_disable};
    }
  }
`
}

const InnerInput = styled.input<TCommonInnerInputProps<HTMLInputElement>>`
  ${(props) => getCommonInputStyles(props)}
`


const InnerTextarea = styled.textarea<TCommonInnerInputProps<HTMLTextAreaElement>>`
  ${(props) => getCommonInputStyles(props)}
`

type TGetInputBorderColor = {
  active?: boolean,
  theme: DefaultTheme,
  disabled?: boolean,
  isHover?: boolean,
  error?: boolean,
}

function getInputBorderColor(props: TGetInputBorderColor) {
  const { error, active, theme, disabled, isHover } = props

  if (active) return theme.input.input_default_medium_color_border_active
  if (error) return theme.input.input_default_medium_color_border_error
  if (disabled) return theme.input.input_default_medium_color_border_disable
  if (isHover) return theme.input.input_default_medium_color_border_hover

  return theme.input.input_default_medium_color_border_normal
}

type TGetInputWrapperBg = {
  active?: boolean,
  theme: DefaultTheme,
  disabled?: boolean,
  isHover?: boolean,
  error?: boolean,
}

const getInputWrapperBg = ({ theme, active, disabled, isHover, error }: TGetInputWrapperBg) => {
  if (disabled) return theme.input.input_default_medium_color_bg_disable
  if (active) return theme.input.input_default_medium_color_bg_active
  if (isHover) return theme.input.input_default_medium_color_bg_hover
  if (error) return theme.input.input_default_medium_color_bg_error

  return theme.input.input_default_medium_color_bg_normal
}

interface TInputWrapperProps {
  active: boolean,
  theme: DefaultTheme,
  disabled: boolean,
  neighboringInGroup: TNeighboringInGroup,
  error: boolean,
}

const InputWrapper = styled.div<TInputWrapperProps>`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => getInputWrapperBg(props)};

  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}

  ${({ neighboringInGroup, theme }) => getInputBorderRadius({ neighboringInGroup, theme })}

  border: 1px solid ${getInputBorderColor};

  ${({ neighboringInGroup }) => {
    if (['left', 'both'].includes((neighboringInGroup || '').toString())) {
      return 'margin-left: -1px;'
    }
  }}
  ${({ active, neighboringInGroup }) => (active && neighboringInGroup
    ? 'z-index: 2;'
    : null)}

  ${switchTransition}
  transition-property: border-color;

  &:hover {
    border-color: ${(props) => getInputBorderColor({ ...props, isHover: true })};
    background-color: ${(props) => getInputWrapperBg({ ...props, isHover: true })};
    z-index: 1;
  }
`

interface TGetIconWrapPaddings {
  left?: boolean,
  right?: boolean,
  theme: DefaultTheme,
}

function getIconWrapPaddings({ left, right, theme }: TGetIconWrapPaddings) {
  if (left) {
    return `
      padding-right: ${theme.input.input_default_medium_size_padding_default.innerHorizontal};
      padding-left: ${theme.input.input_default_medium_size_padding_default.left};
    `
  } else if (right) {
    return `
      padding-left: ${theme.input.input_default_medium_size_padding_default.innerHorizontal};
      padding-right: ${theme.input.input_default_medium_size_padding_default.right};
    `
  }
}

type TIconWrapProps = {
  left?: boolean,
  right?: boolean,
  disabled?: boolean,
}

const IconWrap = styled.div<TIconWrapProps>`
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  ${getIconWrapPaddings}
  display: flex;
  vertical-align: top;
  align-items: center;

  ${IconSvg} {
    ${({ disabled, theme }) => disabled && `
      fill: ${theme.input.input_default_medium_color_input_text_disable};
    `}
  }
`

export {
  Error,
  InnerInput,
  InputWrapper,
  IconWrap,
  InnerTextarea,
}
