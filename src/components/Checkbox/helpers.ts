import { TTheme } from 'components/ThemeProvider/types'

function getBackgroundColor(disabled: boolean, checked: boolean, theme: TTheme): string {
  if (disabled) return theme.color.miscLightest
  if (checked) return theme.color.primaryDark

  return theme.color.background
}

function getShadowColor(disabled: boolean, checked: boolean, theme: TTheme): string {
  if (disabled) return theme.color.miscLight
  if (checked) return theme.color.primaryDark

  return theme.color.misc
}

export {
  getBackgroundColor,
  getShadowColor,
}
