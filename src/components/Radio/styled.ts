import styled, { css, DefaultTheme } from 'styled-components'
import { switchTransition } from 'utils/transitions'


interface TStyledRadioProps {
  disabled: boolean,
  checked: boolean,
  theme: DefaultTheme,
}

const getBorderColor = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (disabled && checked) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgContrastActive
  if (disabled) return theme.color.colorBgSecondaryDisable

  return theme.color.colorBorderPrimaryNormal
}

const getHoverBorderColor = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (disabled) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgContrastHover

  return theme.color.colorBorderPrimaryHover
}

const getRadioBackground = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (disabled && checked) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgContrastActive

  return theme.color.colorBgPrimaryNormal
}

const getHoverRadioBackground = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (!checked && disabled) return theme.color.colorBgPrimaryNormal
  if (disabled) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgContrastHover

  return theme.color.colorBgPrimaryNormal
}

export const RadioInput = styled.input`
  display: none;
`

export const StyledRadio = styled.div<TStyledRadioProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  user-select: none;

  border: 1px solid ${getBorderColor};

  ${switchTransition};
  transition-property: background, border;
  background: ${getRadioBackground};

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.color.background};
    display: inline-flex;
    border-radius: 50%;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  };

  &:hover {
    border: 1px solid ${getHoverBorderColor};
    background-color: ${getHoverRadioBackground};
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
  ${({ disabled, theme }) => (disabled
    && css`color: ${theme.color.colorTextPrimaryNormal};`
  )}
`

interface TRadioLabelProps {
  disabled: boolean,
}

export const RadioLabel = styled.label<TRadioLabelProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  position: relative;
  user-select: none;
  width: 100%;

  ${LabelText}:hover {
    color: ${({ theme }) => theme.color.colorTextPrimaryNormal};
  };
`
