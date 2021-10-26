import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisabled
  if (checked) return theme.color.colorBgContrastFocus

  return theme.color.colorBgPrimary
}

function getHoverBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisabled
  if (checked) return theme.color.colorBgContrastHover

  return theme.color.colorBgPrimary
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisabled
  if (checked) return theme.color.colorBgContrastFocus

  return theme.color.colorBorderPrimary
}

function getHoverShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisabled
  if (checked) return theme.color.colorBgContrastHover

  return theme.color.colorBorderHover
}

export {
  getBackgroundColor,
  getHoverBackgroundColor,
  getShadowColor,
  getHoverShadowColor,
}
