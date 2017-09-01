import styled from 'styled-components'
import { switchTransition } from 'utils/transitions'

const getRadioBorder = (props, theme) => {
  if (props.checked) {
    return theme.color.primary
  } else if (props.disabled) {
    return theme.color.textLighter
  } return theme.color.misc
}

const getRadioBackground = (props, theme) => {
  if (props.checked) {
    return theme.color.primary
  } else if (props.disabled) {
    return theme.color.textLightest
  } return theme.color.background
}

export const RadioInput = styled.input`
  display: none;
`

export const RadioLabel = styled.label`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: start;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  user-select: none;
  width: 100%;

  &:hover .radio {
    border-color: ${({ theme, disabled }) => (disabled ? theme.color.textLighter : theme.color.primary)};
  };

  &:hover .label-text {
    color: ${({ theme, disabled }) => (disabled ? theme.color.textLight : theme.color.primaryDarkest)};
  };
`

export const StyledRadio = styled.div`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${(props) => `inset 0 0 0 1px ${getRadioBorder(props, props.theme)}`};

  ${switchTransition};
  transition-property: background, border;
  background: ${(props) => getRadioBackground(props, props.theme)};

  &:after {
    content: ' ';
    width: 8px;
    height: 8px;
    background: #ffffff;
    display: inline-flex;
    border-radius: 50%;
    opacity: ${({ checked }) => (checked ? 1 : 0)}
  };
`
export const LabelText = styled.span`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => (disabled &&
    `color: ${theme.color.textLight};`
  )}
`
