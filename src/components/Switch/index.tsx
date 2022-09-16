import React from 'react'
import styled from 'styled-components'

const WIDTH = 32
const HEIGHT = 20
const BUTTON_SIZE = 20
const SHIFT = WIDTH - BUTTON_SIZE

const InnerInput = styled.input`
  position: relative;
  appearance: none;
  outline: none;

  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_normal};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 150ms ease, background-color 150ms ease;
    transform: translateX(${({ checked }) => (checked ? `${SHIFT}px` : 0)});

    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_normal};
    border: 2px solid ${({ theme }) => theme.switch.switcher_default_medium_color_bg_normal};
  }

  &:hover {
    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_hover};

    &::after {
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_hover};
      border: 2px solid ${({ theme }) => theme.switch.switcher_default_medium_color_border_hover};
    }
  }

  &:focus {
    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_hover};

    &::after {
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_hover};
      border: 2px solid ${({ theme }) => theme.switch.switcher_default_medium_color_border_hover};
    }
  }

  &:checked {
    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_active};

    &::after {
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_active};
      border: 2px solid ${({ theme }) => theme.switch.switcher_default_medium_color_border_active};
    }
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_bg_disable};

    &::after {
      cursor: auto;
      background-color: ${({ theme }) => theme.switch.switcher_default_medium_color_switcher_icon_disable};
      border: solid 2px ${({ theme }) => theme.switch.switcher_default_medium_color_border_disable};
    }
  }
`

export function Switch(props: React.HTMLProps<HTMLInputElement>): JSX.Element {
  const { checked, ...rest } = props
  return (
    // @ts-ignore
    <InnerInput
      type="checkbox"
      checked={checked ?? false}
      {...rest}
    />
  )
}
