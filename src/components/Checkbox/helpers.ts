import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled && checked) return theme.color.primary200
  if (checked) return theme.color.primary500

  return theme.color.background
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled && !checked) return theme.color.misc100
  if (disabled && checked) return theme.color.primary200
  if (checked) return theme.color.primary500

  return theme.color.misc200
}

export {
  getBackgroundColor,
  getShadowColor,
}
