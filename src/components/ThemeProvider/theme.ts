import { DefaultTheme } from 'styled-components'
import { queries } from 'utils/media-queries'
import { colorsLight, colorsDark } from './colors'

import * as typographyTokens from './tokens/typography'

import * as buttonTokensLight from './tokens/light/button'
import * as buttonTokensDark from './tokens/dark/button'

import * as seatTokenLight from './tokens/light/seat'
import * as seatTokenDark from './tokens/dark/seat'

import * as tagTokenLight from './tokens/light/tag'
import * as tagTokenDark from './tokens/dark/tag'

import * as switchTokens from './tokens/switcher'

export const font = `
  font: 400 16px / 20px 'KB Suisse Intl';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`

const lightTheme: DefaultTheme = {
  font,
  typography: typographyTokens,
  queries,
  color: colorsLight,
  button: buttonTokensLight,
  seat: seatTokenLight,
  tag: tagTokenLight,
  switch: switchTokens,
}

const darkTheme: DefaultTheme = {
  ...lightTheme,
  color: colorsDark,
  button: buttonTokensDark,
  seat: seatTokenDark,
  tag: tagTokenDark,
  switch: switchTokens,
}

export { lightTheme, darkTheme }
