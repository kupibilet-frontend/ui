export const getThemeColor = (
  theme,
  colorKey,
  fallbackColor = 'transparent'
) => {
  if (
    process.env.NODE_ENV === 'production' &&
    colorKey &&
    !(colorKey in theme.color)
  ) {
    /* eslint-disable no-console */
    console.warn(`Unknown color "${colorKey}" supplied`)
  }

  return theme.color[colorKey] || fallbackColor
}

export const ThemingPropTypes = {
  themeColor(props, propName, componentName) {
    const value = props[propName]

    if (!props.theme) {
      return new Error(`You can improve <${componentName} ${propName}="${value}"> prop validation
 by decorating ${componentName} with \`styled.withTheme\` decorator `)
    }

    if (typeof value === 'string' && !props.theme.color[value]) {
      return new Error(
        `Unknown color supplied for <${componentName} ${propName}="${value}">.`
      )
    }

    return undefined
  },
}
