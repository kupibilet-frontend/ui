import { DefaultTheme } from 'styled-components'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.miscLightest
  if (checked) return theme.color.primaryDark

  return theme.color.background
}

function getShadowColor(disabled: boolean, checked: boolean, theme: DefaultTheme): string {
  if (disabled) return theme.color.miscLight
  if (checked) return theme.color.primaryDark

  return theme.color.misc
}

export {
  getBackgroundColor,
  getShadowColor,
}
