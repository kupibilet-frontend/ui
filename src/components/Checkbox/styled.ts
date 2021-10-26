import styled, { css } from 'styled-components'

import { switchTransition } from 'utils/transitions'
import { floatFromTop } from 'utils/animations'
import { borderRadiusSmall } from 'utils/borderRadius'
import {
  getBackgroundColor,
  getHoverBackgroundColor,
  getShadowColor,
  getHoverShadowColor,
} from './helpers'


export const CheckboxInput = styled.input`
  display: none;
`

export const fadeInDown = floatFromTop

interface TIconWrapProps {
  checked: boolean,
}

export const IconWrap = styled.span<TIconWrapProps>`
  animation: ${(props) => (props.checked ? css`${fadeInDown} 0.15s` : 'none')};
  display: inline-block;
  height: 18px;
  width: 18px;
`

interface TStyledCheckboxProps {
  checked: boolean,
  disabled: boolean,
  classname: string,
}

export const StyledCheckbox = styled.span<TStyledCheckboxProps>`
  display: inline-block;
  flex-shrink: 0;

  height: 18px;
  width: 18px;
  line-height: 16px;
  box-shadow: ${({ disabled, checked, theme }) => css`inset 0 0 0 1px ${getShadowColor(disabled, checked, theme)}`};

  ${switchTransition};
  transition-property: background, border;
  background: ${({ disabled, checked, theme }) => getBackgroundColor(disabled, checked, theme)};
  ${borderRadiusSmall.all}

  &:hover {
    box-shadow: ${({ disabled, checked, theme }) => css`inset 0 0 0 1px ${getHoverShadowColor(disabled, checked, theme)}`};
    background: ${({ disabled, checked, theme }) => getHoverBackgroundColor(disabled, checked, theme)};
  }
`

interface TLabelTextProps {
  disabled: boolean,
}

export const LabelText = styled.span<TLabelTextProps>`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
`

interface TCheckboxLabelProps {
  checked: boolean,
  disabled: boolean,
}

export const CheckboxLabel = styled.label<TCheckboxLabelProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: start;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  user-select: none;
  width: 100%;

  color: ${({ theme, disabled, checked }) => {
    if (disabled) return theme.color.colorTextDisabled
    if (checked) return theme.color.colorTextPrimary

    return theme.color.colorTextSecondary
  }};

  &:hover {
    color: ${({ theme, disabled }) => (disabled ? theme.color.colorTextDisabled : theme.color.colorTextPrimary)};
  }

  &:hover ${StyledCheckbox} {
    box-shadow: ${({ disabled, checked, theme }) => css`inset 0 0 0 1px ${getHoverShadowColor(disabled, checked, theme)}`};
  }
`
