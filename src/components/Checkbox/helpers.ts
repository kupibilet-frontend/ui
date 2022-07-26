import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgAccentNormal

  return theme.color.colorBgPrimaryNormal
}

function getHoverBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgAccentHover

  return theme.color.colorBgPrimaryNormal
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgAccentNormal

  return theme.color.colorBorderPrimaryNormal
}

function getHoverShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.colorBgSecondaryDisable
  if (checked) return theme.color.colorBgAccentHover

  return theme.color.colorBorderPrimaryHover
}

export {
  getBackgroundColor,
  getHoverBackgroundColor,
  getShadowColor,
  getHoverShadowColor,
}
