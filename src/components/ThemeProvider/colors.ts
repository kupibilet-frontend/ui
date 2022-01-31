import * as colorTokensLight from './tokens/light/color'
import * as colorTokensDark from './tokens/dark/color'

const deprecatedColors = {
  // old color scheme
  primary100: '#F5F5F7',
  primary200: '#F5F5F7',
  primary300: '#D0D1D7',
  primary400: '#101014',
  primary500: '#101014',
  primary600: '#101014',
  primary700: '#51525A',

  secondary010: '#F5F5F7',
  secondary050: '#FFF1CC',
  secondary100: '#212126',
  secondary200: '#FA6258',
  secondary300: '#FA6258',
  secondary400: '#FA6258',
  secondary500: '#FA6258',
  secondary600: '#D74043',
  secondary700: '#B32C3A',

  misc10: '#F5F5F7',
  misc100: '#F5F5F7',
  misc200: '#F5F5F7',
  misc300: '#F5F5F7',
  misc400: '#F5F5F7',
  misc500: '#81828C',
  misc600: '#81828C',
  misc700: '#81828C',

  text100: '#F5F5F7',
  text200: '#D0D1D7',
  text300: '#A0A2AB',
  text400: '#A0A2AB',
  text500: '#A0A2AB',
  text600: '#212126',
  text700: '#222222',

  error010: '#FDE5CD',
  error700: '#DE350B',

  success010: '#EEF7C9',
  success700: '#85BC0C',

  background: '#FFFFFF',
}

export const colorsLight = { ...deprecatedColors, ...colorTokensLight }
export const colorsDark = { ...deprecatedColors, ...colorTokensDark }
