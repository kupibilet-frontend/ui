import { DefaultTheme } from 'styled-components'
import { COLOR_NAMES } from 'components/ThemeProvider/types'

const getThemeColor = (
  theme: DefaultTheme,
  colorKey: COLOR_NAMES,
  fallbackColor = 'transparent',
): string => {
  if (process.env.NODE_ENV === 'production' && colorKey && !(colorKey in theme.color)) {
    /* eslint-disable no-console */
    console.warn(`Unknown color "${colorKey}" supplied`)
  }

  return theme.color[colorKey] || fallbackColor
}

export default getThemeColor
