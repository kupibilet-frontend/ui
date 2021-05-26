import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.misc100
  if (checked) return theme.color.primary500

  return theme.color.background
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.misc300
  if (checked) return theme.color.primary500

  return theme.color.misc400
}

export {
  getBackgroundColor,
  getShadowColor,
}
