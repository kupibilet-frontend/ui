import React from 'react'
import styled, { DefaultTheme, css } from 'styled-components'
import { switchTransition } from 'utils/transitions'
import { borderRadiusLarge, borderRadiusMedium } from 'utils/borderRadius'
import { IconSvg } from 'components/Icon/styled'
import {
  TEXTAREA_PADDINGS,
  ICON_PADDINGS,
  ICON_GROUP_PADDINGS,
  SIZE,
  TYPOGRAPHY,
  INPUT_HEIGHT,
} from './consts'
import { TNeighboringInGroup, TInputSize } from './types'

const Error = styled.span`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  padding: 3px 12px 5px;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  opacity: 0.97;
  z-index: 2;
  ${borderRadiusMedium.all}
  background-color: ${({ theme }) => theme.color.error700};
`

interface TCommonInnerInputProps<T> {
  theme: DefaultTheme,
  inputSize: TInputSize,
  neighboringInGroup?: TNeighboringInGroup,
  type?: string,
  placeholder: string,
  hasInnerGroup?: boolean,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  disabled?: boolean,
  error?: boolean,
  onBlur?: (event: React.FocusEvent<T>) => void,
  onFocus?: (event: React.FocusEvent<T>) => void,
}

function getInputBorderRadius(
  neighboringInGroup: TNeighboringInGroup | undefined,
  size: TInputSize,
) {
  const sizeToRadiusMapper: Record<TInputSize, any> = {
    small: borderRadiusMedium,
    medium: borderRadiusMedium,
    large: borderRadiusLarge,
  }

  const borderRadius = sizeToRadiusMapper[size as TInputSize]

  if (neighboringInGroup === 'right') {
    return borderRadius.left
  } else if (neighboringInGroup === 'left') {
    return borderRadius.right
  } else if (neighboringInGroup !== 'both') {
    return borderRadius.all
  }

  return ''
}

function getCommonInputStyles<T>(props: TCommonInnerInputProps<T>) {
  return css`
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  min-height: ${INPUT_HEIGHT[props.inputSize]}px;
  font-family: inherit;
  opacity: 1;

  ${props.inputSize === 'large' ? 'letter-spacing: -0.1px' : null};

  padding-left: ${props.leftIcon ? '0' : `${SIZE[props.inputSize]}px`};

  padding-right: ${props.rightIcon ? '0' : `${SIZE[props.inputSize]}px`};
  
  font-size: ${TYPOGRAPHY[props.inputSize]}px;
  color: ${props.theme.color.colorTextPrimaryNormal};

  background-color: transparent;
  
  ${(({ neighboringInGroup, disabled, hasInnerGroup, theme }) => {
    if (hasInnerGroup && ['right', 'both'].includes(neighboringInGroup as string)) {
      return `border-right: 1px solid ${disabled ? theme.color.misc100 : theme.color.misc200};`
    }
  })(props)}

  ${getInputBorderRadius(props.neighboringInGroup, props.inputSize)}

  &::placeholder {
    color: ${({ theme }) => theme.color.colorTextPlaceholderDefault};
  }

  &:focus {
    outline-style: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.colorTextPrimaryDisable};
    -webkit-text-fill-color: ${({ theme }) => theme.color.colorTextPrimaryDisable};
    &::placeholder {
      color: ${({ theme }) => theme.color.colorTextPrimaryDisable};
  }
  }
  `
}

const InnerInput = styled.input<TCommonInnerInputProps<HTMLInputElement>>`
  ${(props) => getCommonInputStyles(props)}
`


const InnerTextarea = styled.textarea<TCommonInnerInputProps<HTMLTextAreaElement>>`
  ${(props) => getCommonInputStyles(props)}

  ${({ inputSize }) => (`
  padding-top: ${TEXTAREA_PADDINGS[inputSize]}px;
  padding-bottom: ${TEXTAREA_PADDINGS[inputSize]}px;
  `
  )}
  
`

interface TInputWrapperProps {
  active: boolean,
  theme: DefaultTheme,
  disabled: boolean,
  neighboringInGroup: TNeighboringInGroup,
  size: TInputSize,
  error: boolean,
}

function getInputBorderColor(props: TInputWrapperProps) {
  const { error, active, theme, disabled } = props

  if (active) return theme.color.colorBorderPrimaryActive
  if (error) return theme.color.colorBorderDangerNormal
  if (disabled) return theme.color.colorBgSecondaryDisable

  return theme.color.colorBorderPrimaryNormal
}


const InputWrapper = styled.div<TInputWrapperProps>`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.colorBgPrimaryNormal};

  ${({ disabled, theme }) => disabled && `
    background-color: ${theme.color.colorBgSecondaryDisable};
    pointer-events: none;
  `}

  ${({ neighboringInGroup, size }) => getInputBorderRadius(neighboringInGroup, size)}

  border: 1px solid ${getInputBorderColor};

  border-style: solid;

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
    border-color: ${({ error, theme, disabled }) => (!disabled && !error) && theme.color.colorBorderPrimaryHover};
    z-index: 1;
  }

  .combined-inputs-group {
    height: 100%;
  }
`

interface TGetIconWrapPaddingsProps {
  left?: boolean,
  right?: boolean,
  isGroup: boolean,
  disabled?: boolean,
  size: TInputSize,
  onMouseDown: React.MouseEventHandler<HTMLDivElement>,
}

function getIconWrapPaddings({ left, right, isGroup, size }: TGetIconWrapPaddingsProps) {
  if (left && isGroup) {
    return `
      padding-left: ${ICON_GROUP_PADDINGS[size].outer};
      padding-right: ${ICON_GROUP_PADDINGS[size].inner};
    `
  } else if (left) {
    return `
      padding-left: ${ICON_PADDINGS[size].outer};
      padding-right: ${ICON_PADDINGS[size].inner};
    `
  } else if (right && isGroup) {
    return `
      padding-left: ${ICON_GROUP_PADDINGS[size].inner};
      padding-right: ${ICON_GROUP_PADDINGS[size].outer};
    `
  } else if (right) {
    return `
      padding-left: ${ICON_PADDINGS[size].inner};
      padding-right: ${ICON_PADDINGS[size].outer};
    `
  }
}

const IconWrap = styled.div<TGetIconWrapPaddingsProps>`
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  ${getIconWrapPaddings}
  display: flex;
  vertical-align: top;
  align-items: center;

  ${IconSvg} {
    ${({ disabled }) => disabled && 'opacity: 0.6;'}
  }
`

export {
  Error,
  InnerInput,
  InputWrapper,
  IconWrap,
  InnerTextarea,
}
