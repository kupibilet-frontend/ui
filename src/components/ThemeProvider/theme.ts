import { DefaultTheme } from 'styled-components'
import { queries } from 'utils/media-queries'
import { colorsLight, colorsDark } from './colors'

import * as typographyTokens from './tokens/typography'

import * as buttonTokensLight from './tokens/light/button'
import * as buttonTokensDark from './tokens/dark/button'

import * as inputTokensLight from './tokens/light/input'
import * as inputTokensDark from './tokens/dark/input'

import * as seatTokenLight from './tokens/light/seat'
import * as seatTokenDark from './tokens/dark/seat'

import * as tagTokenLight from './tokens/light/tag'
import * as tagTokenDark from './tokens/dark/tag'

import * as switchTokens from './tokens/switcher'

import * as checkboxTokens from './tokens/checkbox'

import * as radioTokens from './tokens/radio'
import * as informationCardTokens from './tokens/informationCard'

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
  input: inputTokensLight,
  seat: seatTokenLight,
  tag: tagTokenLight,
  switch: switchTokens,
  checkbox: checkboxTokens,
  radio: radioTokens,
  informationCard: informationCardTokens,
}

const darkTheme: DefaultTheme = {
  ...lightTheme,
  color: colorsDark,
  button: buttonTokensDark,
  input: inputTokensDark,
  seat: seatTokenDark,
  tag: tagTokenDark,
  switch: switchTokens,
  checkbox: checkboxTokens,
  radio: radioTokens,
  informationCard: informationCardTokens,
}

export { lightTheme, darkTheme }
