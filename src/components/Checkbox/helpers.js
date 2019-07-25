export const getBackgroundColor = (disabled, checked, theme) => {
  if (disabled) return theme.color.miscLightest
  if (checked) return theme.color.primaryDarkest
  return theme.color.background
}

export const getShadowColor = (disabled, checked, theme) => {
  if (disabled) return theme.color.miscLight
  if (checked) return theme.color.primaryDarkest
  return theme.color.misc
}
