import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled && checked) return theme.color.primaryLighter
  if (checked) return theme.color.primaryDark

  return theme.color.background
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled && !checked) return theme.color.miscLighter
  if (disabled && checked) return theme.color.primaryLighter
  if (checked) return theme.color.primaryDark

  return theme.color.misc
}

export {
  getBackgroundColor,
  getShadowColor,
}
