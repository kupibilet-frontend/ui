import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_bg_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_bg_active

  return theme.checkbox.check_box_default_medium_color_bg_normal
}

function getHoverBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_bg_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_bg_active_hover

  return theme.checkbox.check_box_default_medium_color_bg_normal
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_border_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_border_active

  return theme.checkbox.check_box_default_medium_color_border_normal
}

function getHoverShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_border_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_border_active

  return theme.checkbox.check_box_default_medium_color_border_hover
}

export function getLabelColor(theme: DefaultTheme, disabled?: boolean, checked?: boolean): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_text_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_text_active

  return theme.checkbox.check_box_default_medium_color_text_normal
}


export {
  getBackgroundColor,
  getHoverBackgroundColor,
  getShadowColor,
  getHoverShadowColor,
}
