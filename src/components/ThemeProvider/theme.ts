import { DefaultTheme } from 'styled-components'
import { COLOR_NAMES, TColor } from './types'


export const color: TColor = {
  [COLOR_NAMES.primary100]: '#E5F5FF',
  [COLOR_NAMES.primary200]: '#A9DDFF',
  [COLOR_NAMES.primary300]: '#77C8FF',
  [COLOR_NAMES.primary400]: '#38AFFF',
  [COLOR_NAMES.primary500]: '#0F99F5',
  [COLOR_NAMES.primary600]: '#008AE6',
  [COLOR_NAMES.primary700]: '#007ACC',

  [COLOR_NAMES.secondary010]: '#FEFDF9',
  [COLOR_NAMES.secondary050]: '#FDF7E8',
  [COLOR_NAMES.secondary100]: '#FFF0BF',
  [COLOR_NAMES.secondary200]: '#FFD787',
  [COLOR_NAMES.secondary300]: '#FFB640',
  [COLOR_NAMES.secondary400]: '#FF9100',
  [COLOR_NAMES.secondary500]: '#FF7D03',
  [COLOR_NAMES.secondary600]: '#FC6100',
  [COLOR_NAMES.secondary700]: '#FA3A00',

  [COLOR_NAMES.misc10]: '#FAFBFC',
  [COLOR_NAMES.misc100]: '#F0F5FA',
  [COLOR_NAMES.misc200]: '#DDE3EB',
  [COLOR_NAMES.misc300]: '#CAD3DE',
  [COLOR_NAMES.misc400]: '#B1BDCC',
  [COLOR_NAMES.misc500]: '#96A0B3',
  [COLOR_NAMES.misc600]: '#7D89A1',
  [COLOR_NAMES.misc700]: '#62708B',

  [COLOR_NAMES.text100]: '#F2F2F2',
  [COLOR_NAMES.text200]: '#DEDEDE',
  [COLOR_NAMES.text300]: '#B3B3B3',
  [COLOR_NAMES.text400]: '#808080',
  [COLOR_NAMES.text500]: '#4D4D4D',
  [COLOR_NAMES.text600]: '#333333',
  [COLOR_NAMES.text700]: '#222222',

  [COLOR_NAMES.error010]: '#FBEEEB',
  [COLOR_NAMES.error700]: '#E64926',

  [COLOR_NAMES.success010]: '#DEF6E6',
  [COLOR_NAMES.success700]: '#23C256',

  [COLOR_NAMES.background]: '#FFFFFF',
}

export const font = `
  font: 400 16px / 20px 'KB Source Sans Pro', 'Source Sans Pro';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`
const defaultTheme: DefaultTheme = {
  font,
  color,
}

export { defaultTheme }
