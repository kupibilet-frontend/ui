import Typography from 'components/Typography'
import styled, { css, DefaultTheme } from 'styled-components'
import { switchTransition } from 'utils/transitions'
import { getLabelColor } from './helpers'

import { TProps } from './index'

interface TStyledRadioProps {
  disabled: boolean,
  checked: boolean,
  theme: DefaultTheme,
}

const getBorderColor = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (disabled && checked) return theme.radio.radio_button_default_medium_color_border_disable
  if (checked) return theme.radio.radio_button_default_medium_color_border_active
  if (disabled) return theme.radio.radio_button_default_medium_color_border_disable

  return theme.radio.radio_button_default_medium_color_border_normal
}

const getHoverBorderColor = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (disabled) return theme.radio.radio_button_default_medium_color_border_disable
  if (checked) return theme.radio.radio_button_default_medium_color_border_hover

  return theme.radio.radio_button_default_medium_color_border_hover
}

const getRadioBackground = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (disabled && checked) return theme.radio.radio_button_default_medium_color_bg_disable
  if (checked) return theme.radio.radio_button_default_medium_color_bg_active
  if (disabled) return theme.radio.radio_button_default_medium_color_bg_disable

  return theme.radio.radio_button_default_medium_color_bg_normal
}

const getHoverRadioBackground = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (!checked && disabled) return theme.radio.radio_button_default_medium_color_bg_disable
  if (disabled) return theme.radio.radio_button_default_medium_color_bg_disable
  if (checked) return theme.radio.radio_button_default_medium_color_bg_active_hover

  return theme.radio.radio_button_default_medium_color_bg_normal
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
    background: ${({ theme }) => theme.radio.radio_button_default_medium_color_radio_button_icon_normal};
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

export const LabelText = styled(Typography)<TLabelTextProps>`
  ${switchTransition};
  transition-property: color;
  width: 100%;
`

type TRadioLabelProps = {
  disabled: boolean,
  checked: boolean,
} & Pick<TProps, 'labelProps'>

export const RadioLabel = styled.label<TRadioLabelProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  position: relative;
  user-select: none;
  gap: ${({ labelProps }) => (labelProps?.variant === 'large' ? '12px' : '8px')};
  ${({ disabled }) => (disabled && css`
    cursor: default;
    pointer-events: none;
  `)};

  color: ${({ theme, disabled, checked }) => getLabelColor(theme, disabled, checked)};   

  ${LabelText}:hover {
    color: ${({ theme }) => theme.radio.radio_button_default_medium_color_text_hover};
  };
`
