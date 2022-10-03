import React from 'react'
import styled, { DefaultTheme, css } from 'styled-components'
import { switchTransition } from 'utils/transitions'
import { IconSvg } from 'components/Icon/styled'
import { TNeighboringInGroup, TInputSize } from './types'

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
  inputSize: TInputSize,
}

type TGetInputBorderRadius = {
  neighboringInGroup?: TNeighboringInGroup,
  theme: DefaultTheme,
  size: TInputSize,
}

const DEFAULT_INPUT_HEIGHT = 40

function getInputBorderRadius({ neighboringInGroup, theme, size }: TGetInputBorderRadius) {
  const radius = theme.input[`input_default_${size}_size_border_radius_default`]

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
  size: TInputSize,
}

const getInputPadding = ({ theme, leftIcon, rightIcon, size }: TGetInputPadding) => {
  return `
    padding-top: ${theme.input[`input_default_${size}_size_padding_default`].top};
    padding-bottom: ${theme.input[`input_default_${size}_size_padding_default`].bottom};
    padding-right: ${rightIcon ? 0 : theme.input[`input_default_${size}_size_padding_default`].right};
    padding-left: ${leftIcon ? 0 : theme.input[`input_default_${size}_size_padding_default`].left};
  `
}

function getCommonInputStyles<T>(props: TCommonInnerInputProps<T>) {
  return css`
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    height: 100%;
    line-height: ${props.theme.input[`input_default_${props.inputSize}_typography_desktop_input_text`].lineHeight}px;
    border: none;
    min-height: 38px;
    font-family: inherit;
    opacity: 1;

    ${getInputPadding({ theme: props.theme, leftIcon: props.leftIcon, rightIcon: props.rightIcon, size: props.inputSize })}
    
    font-size: ${props.theme.input[`input_default_${props.inputSize}_typography_desktop_input_text`].size}px;
    color: ${props.theme.input[`input_default_${props.inputSize}_color_input_text_normal`]};

    background-color: transparent;

    ${getInputBorderRadius({ neighboringInGroup: props.neighboringInGroup, theme: props.theme, size: props.inputSize })}

    &::placeholder {
      color: ${({ theme }) => theme.input[`input_default_${props.inputSize}_color_placeholder_normal`]};
    }

    &:focus {
      outline-style: none;
    }

    &:disabled {
      color: ${({ theme }) => theme.input[`input_default_${props.inputSize}_color_input_text_disable`]};
      -webkit-text-fill-color: ${({ theme }) => theme.input[`input_default_${props.inputSize}_color_input_text_disable`]};
      &::placeholder {
        color: ${({ theme }) => theme.input[`input_default_${props.inputSize}_color_placeholder_disable`]};
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
  size: TInputSize,
}

function getInputBorderColor(props: TGetInputBorderColor) {
  const { error, active, theme, disabled, isHover, size } = props

  if (disabled) return theme.input[`input_default_${size}_color_border_disable`]
  if (active) return theme.input[`input_default_${size}_color_border_active`]
  if (error) return theme.input[`input_default_${size}_color_border_error`]
  if (isHover) return theme.input[`input_default_${size}_color_border_hover`]

  return theme.input[`input_default_${size}_color_border_normal`]
}

type TGetInputWrapperBg = {
  active?: boolean,
  theme: DefaultTheme,
  disabled?: boolean,
  isHover?: boolean,
  error?: boolean,
  size: TInputSize,
}

const getInputWrapperBg = ({
  theme,
  active,
  disabled,
  isHover,
  error,
  size,
}: TGetInputWrapperBg) => {
  if (disabled) return theme.input[`input_default_${size}_color_bg_disable`]
  if (active) return theme.input[`input_default_${size}_color_bg_active`]
  if (isHover) return theme.input[`input_default_${size}_color_bg_hover`]
  if (error) return theme.input[`input_default_${size}_color_bg_error`]

  return theme.input[`input_default_${size}_color_bg_normal`]
}

interface TInputWrapperProps {
  active: boolean,
  theme: DefaultTheme,
  disabled: boolean,
  neighboringInGroup: TNeighboringInGroup,
  error: boolean,
  size: TInputSize,
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

  ${({ neighboringInGroup, theme, size }) => getInputBorderRadius({ neighboringInGroup, theme, size })}

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
  size: TInputSize,
}

function getIconWrapPaddings({ left, right, theme, size }: TGetIconWrapPaddings) {
  if (left) {
    return `
      padding-right: ${theme.input[`input_default_${size}_size_padding_default`].innerHorizontal};
      padding-left: ${theme.input[`input_default_${size}_size_padding_default`].left};
    `
  } else if (right) {
    return `
      padding-left: ${theme.input[`input_default_${size}_size_padding_default`].innerHorizontal};
      padding-right: ${theme.input[`input_default_${size}_size_padding_default`].right};
    `
  }
}

type TIconWrapProps = {
  left?: boolean,
  right?: boolean,
  disabled?: boolean,
  size: TInputSize,
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
    ${({ disabled, theme, size }) => `
      fill: ${disabled ? theme.input[`input_default_${size}_color_input_text_disable`] : theme.input[`input_default_${size}_color_input_text_normal`]};
    `}
  }
`

const InputContainer = styled.div``

export {
  InnerInput,
  InputWrapper,
  IconWrap,
  InnerTextarea,
  DEFAULT_INPUT_HEIGHT,
  InputContainer,
}
