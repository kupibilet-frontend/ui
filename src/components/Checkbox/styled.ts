import styled, { css } from 'styled-components'

import { switchTransition } from 'utils/transitions'
import { floatFromTop } from 'utils/animations'
import { borderRadiusSmall } from 'utils/borderRadius'
import { getBackgroundColor, getShadowColor } from './helpers'


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
`

interface TLabelTextProps {
  disabled: boolean,
}

export const LabelText = styled.span<TLabelTextProps>`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => (disabled
    && css`color: ${theme.color.text300};`
  )}
`

interface TCheckboxLabelProps {
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

  &:hover .checkbox {
    border-color: ${({ theme, disabled }) => (disabled ? theme.color.text200 : theme.color.primary500)};
  };

  &:hover .label-text {
    color: ${({ theme, disabled }) => (disabled ? theme.color.text300 : theme.color.primary700)};
  };
`
