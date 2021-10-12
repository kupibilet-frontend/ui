import { DefaultTheme } from 'styled-components'
import { COLOR_NAMES, TColor } from './types'


export const color: TColor = {
  [COLOR_NAMES.primary100]: '#F5F5F7',
  [COLOR_NAMES.primary200]: '#F5F5F7',
  [COLOR_NAMES.primary300]: '#D0D1D7',
  [COLOR_NAMES.primary400]: '#101014',
  [COLOR_NAMES.primary500]: '#101014',
  [COLOR_NAMES.primary600]: '#101014',
  [COLOR_NAMES.primary700]: '#51525A',

  [COLOR_NAMES.secondary010]: '#F5F5F7',
  [COLOR_NAMES.secondary050]: '#FFF1CC',
  [COLOR_NAMES.secondary100]: '#212126',
  [COLOR_NAMES.secondary200]: '#FA6258',
  [COLOR_NAMES.secondary300]: '#FA6258',
  [COLOR_NAMES.secondary400]: '#FA6258',
  [COLOR_NAMES.secondary500]: '#FA6258',
  [COLOR_NAMES.secondary600]: '#D74043',
  [COLOR_NAMES.secondary700]: '#B32C3A',

  [COLOR_NAMES.misc10]: '#F5F5F7',
  [COLOR_NAMES.misc100]: '#F5F5F7',
  [COLOR_NAMES.misc200]: '#F5F5F7',
  [COLOR_NAMES.misc300]: '#F5F5F7',
  [COLOR_NAMES.misc400]: '#F5F5F7',
  [COLOR_NAMES.misc500]: '#81828C',
  [COLOR_NAMES.misc600]: '#81828C',
  [COLOR_NAMES.misc700]: '#81828C',

  [COLOR_NAMES.text100]: '#F5F5F7',
  [COLOR_NAMES.text200]: '#D0D1D7',
  [COLOR_NAMES.text300]: '#A0A2AB',
  [COLOR_NAMES.text400]: '#A0A2AB',
  [COLOR_NAMES.text500]: '#A0A2AB',
  [COLOR_NAMES.text600]: '#212126',
  [COLOR_NAMES.text700]: '#222222',

  [COLOR_NAMES.error010]: '#FDE5CD',
  [COLOR_NAMES.error700]: '#DE350B',

  [COLOR_NAMES.success010]: '#EEF7C9',
  [COLOR_NAMES.success700]: '#85BC0C',

  [COLOR_NAMES.background]: '#FFFFFF',
}

export const font = `
  font: 400 16px / 20px 'KB Suisse Intl';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`
const defaultTheme: DefaultTheme = {
  font,
  color,
}

export { defaultTheme }
