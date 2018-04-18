import styled from 'styled-components'

import { switchTransition } from 'utils/transitions'
import { floatFromTop } from 'utils/animations'
import { borderRadiusSmall } from 'utils/borderRadius'

const getCheckboxBackground = (props, theme) => {
  if (props.checked) {
    return theme.color.primary
  } else if (props.disabled) {
    return theme.color.textLightest
  }
  return theme.color.background
}

const getCheckboxBorder = (props, theme) => {
  if (props.checked) {
    return theme.color.primary
  } else if (props.disabled) {
    return theme.color.textLighter
  }
  return theme.color.misc
}

export const CheckboxInput = styled.input`
  display: none;
`

export const fadeInDown = floatFromTop

export const IconWrap = styled.span`
  animation: ${props => (props.checked ? `${fadeInDown} 0.15s` : 'none')};
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
  box-shadow: ${props =>
    `inset 0 0 0 1px ${getCheckboxBorder(props, props.theme)}`};

  ${switchTransition};
  transition-property: background, border;
  background: ${props => getCheckboxBackground(props, props.theme)};
  ${borderRadiusSmall.all};
`

export const LabelText = styled.span`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => disabled && `color: ${theme.color.textLight};`};
`

export const CheckboxLabel = styled.label`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: start;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  user-select: none;
  width: 100%;

  &:hover .checkbox {
    border-color: ${({ theme, disabled }) =>
      disabled ? theme.color.textLighter : theme.color.primary};
  }

  &:hover .label-text {
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.textLight : theme.color.primaryDarkest};
  }
`
