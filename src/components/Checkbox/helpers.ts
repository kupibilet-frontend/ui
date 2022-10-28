import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_bg_disable
  if (checked) return theme.color.colorBgAccentNormal

  return theme.checkbox.check_box_default_medium_color_bg_normal
}

function getHoverBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_bg_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_border_hover

  return theme.checkbox.check_box_default_medium_color_bg_normal
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_bg_disable
  if (checked) return theme.color.colorBgAccentNormal

  return theme.checkbox.check_box_default_medium_color_border_normal
}

function getHoverShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.checkbox.check_box_default_medium_color_bg_disable
  if (checked) return theme.checkbox.check_box_default_medium_color_border_hover

  return theme.checkbox.check_box_default_medium_color_border_hover
}

export {
  getBackgroundColor,
  getHoverBackgroundColor,
  getShadowColor,
  getHoverShadowColor,
}
