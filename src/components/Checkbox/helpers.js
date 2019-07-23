export const getCheckboxBackground = (props, theme) => {
  if (props.disabled) return theme.color.miscLightest
  if (props.checked) return theme.color.primaryDarkest
  return theme.color.background
}

export const getCheckboxShadow = (props, theme) => {
  if (props.disabled) return theme.color.miscLight
  if (props.checked) return theme.color.primaryDarkest
  return theme.color.misc
}
