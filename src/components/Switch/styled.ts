import Typography from 'components/Typography'
import styled, { css } from 'styled-components'
import { getLabelColor } from './helpers'

import { TSwitchProps } from './index'

const WIDTH = 32
const HEIGHT = 20
const BUTTON_SIZE = 16
const TOP = 2
const LEFT = 2
const SHIFT = WIDTH - BUTTON_SIZE - TOP - LEFT

export const SwitchWrapper = styled.label<Pick<TSwitchProps, 'disabled' | 'checked' | 'labelProps'>>`
  display: inline-flex;
  align-items: center;
  gap: ${({ labelProps }) => (labelProps?.variant === 'large' ? '12px' : '8px')} ;
  width: 100%;
  cursor: pointer;

  ${({ disabled }) => (disabled && css`
    cursor: default;
    pointer-events: none;
  `)};

  color: ${({ theme, disabled, checked }) => getLabelColor(theme, disabled, checked)};   

  &:hover {
    color: ${({ theme }) => theme.switch.switcher_default_medium_color_text_hover};   
  } 
`

export const InnerInput = styled.input<Pick<TSwitchProps, 'labelPlacement'>>`
  position: relative;
  appearance: none;
  outline: none;
  margin: 0;
  
  width: ${WIDTH}px;
  min-width: ${WIDTH}px;
  height: ${HEIGHT}px;
  min-height: ${HEIGHT}px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_normal};

  order: ${({ labelPlacement }) => (labelPlacement === 'start' ? 1 : 0)};

  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: ${TOP}px;
    left: ${LEFT}px;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 150ms ease, background-color 150ms ease;
    transform: translateX(${({ checked }) => (checked ? `${SHIFT}px` : 0)});

    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_normal};
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.switch.switcher_default_medium_color_border_normal};
  }

  &:hover {
    @media (hover: hover) {
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_hover};

      &::after {
        background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_hover};
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.switch.switcher_default_medium_color_border_hover};
      }
    }
  
  }

  &:checked {
    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_active};

    &:hover {
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_active_hover};
    }

    &::after {
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_active};
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.switch.switcher_default_medium_color_border_active};
    }
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_disable};

    &::after {
      cursor: auto;
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_disable};
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.switch.switcher_default_medium_color_border_disable};
    }
  }
`

export const LabelText = styled(Typography)`
  width: 100%;
`
