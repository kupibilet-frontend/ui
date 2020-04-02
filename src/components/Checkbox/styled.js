import styled, { css } from 'styled-components'

import { switchTransition } from 'utils/transitions'
import { floatFromTop } from 'utils/animations'
import { borderRadiusSmall } from 'utils/borderRadius'
import { getBackgroundColor, getShadowColor } from './helpers'

export const CheckboxInput = styled.input`
  display: none;
`

export const fadeInDown = floatFromTop

export const IconWrap = styled.span`
  animation: ${(props) => (props.checked ? css`${fadeInDown} 0.15s` : 'none')};
  display: inline-block;
  height: 18px;
  width: 18px;
`

export const StyledCheckbox = styled.span`
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

export const LabelText = styled.span`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => (disabled
    && css`color: ${theme.color.textLight};`
  )}
`

export const CheckboxLabel = styled.label`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: start;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  user-select: none;
  width: 100%;

  &:hover .checkbox {
    border-color: ${({ theme, disabled }) => (disabled ? theme.color.textLighter : theme.color.primaryDark)};
  };

  &:hover .label-text {
    color: ${({ theme, disabled }) => (disabled ? theme.color.textLight : theme.color.primaryDarkest)};
  };
`
