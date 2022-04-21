import * as colorTokensLight from './tokens/light/color'
import * as colorTokensDark from './tokens/dark/color'

const deprecatedColors = {
  primary100: '#E5F5FF',
  primary200: '#A9DDFF',
  primary300: '#77C8FF',
  primary400: '#38AFFF',
  primary500: '#0F99F5',
  primary600: '#008AE6',
  primary700: '#007ACC',

  secondary010: '#FEFDF9',
  secondary050: '#FDF7E8',
  secondary100: '#FFF0BF',
  secondary200: '#FFD787',
  secondary300: '#FFB640',
  secondary400: '#FF9100',
  secondary500: '#FF7D03',
  secondary600: '#FC6100',
  secondary700: '#FA3A00',

  misc10: '#FAFBFC',
  misc100: '#F0F5FA',
  misc200: '#DDE3EB',
  misc300: '#CAD3DE',
  misc400: '#B1BDCC',
  misc500: '#96A0B3',
  misc600: '#7D89A1',
  misc700: '#62708B',

  text100: '#F2F2F2',
  text200: '#DEDEDE',
  text300: '#B3B3B3',
  text400: '#808080',
  text500: '#4D4D4D',
  text600: '#333333',
  text700: '#222222',

  error010: '#FBEEEB',
  error700: '#E64926',

  success010: '#DEF6E6',
  success700: '#23C256',

  background: '#FFFFFF',
}

export const colorsLight = { ...deprecatedColors, ...colorTokensLight }
export const colorsDark = { ...deprecatedColors, ...colorTokensDark }
