import { DefaultTheme } from 'styled-components'
import { COLOR_NAMES, TColor } from './types'


export const color: TColor = {
  // old color sheme
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


  // new color scheme with "design tokens"
  [COLOR_NAMES.colorTextPrimary]: '#101014',
  [COLOR_NAMES.colorTextSecondary]: '#6A6C76',
  [COLOR_NAMES.colorTextPlaceholder]: '#A0A2AB',
  [COLOR_NAMES.colorTextContrast]: '#FFFFFF',
  [COLOR_NAMES.colorTextAccent]: '#FA6258',
  [COLOR_NAMES.colorTextSuccess]: '#85BC0C',
  [COLOR_NAMES.colorTextInfo]: '#0041A3',
  [COLOR_NAMES.colorTextWarning]: '#FF8B00',
  [COLOR_NAMES.colorTextDanger]: '#DE350B',
  [COLOR_NAMES.colorTextDisabled]: '#A0A2AB',

  [COLOR_NAMES.colorTextLink]: '#0041A3',
  [COLOR_NAMES.colorTextLinkHover]: '#002F8C',
  [COLOR_NAMES.colorTextLinkFocus]: '#001B73',

  [COLOR_NAMES.colorBgPrimary]: '#FFFFFF',
  [COLOR_NAMES.colorBgPrimaryFocus]: '#E8E9ED',
  [COLOR_NAMES.colorBgHover]: '#F5F5F7',
  [COLOR_NAMES.colorBgLayout]: '#FAFAFB',

  [COLOR_NAMES.colorBgSecondary]: '#F5F5F7',
  [COLOR_NAMES.colorBgSecondaryHover]: '#E8E9ED',
  [COLOR_NAMES.colorBgSecondaryFocus]: '#D0D1D7',
  [COLOR_NAMES.colorBgSecondaryDisabled]: '#F5F5F7',
  [COLOR_NAMES.colorBgAccent]: '#FA6258',
  [COLOR_NAMES.colorBgAccentHover]: '#D74043',
  [COLOR_NAMES.colorBgAccentFocus]: '#B32C3A',
  [COLOR_NAMES.colorBgHelp]: '#8D5FFF',
  [COLOR_NAMES.colorBgHelpHover]: '#6C45DB',
  [COLOR_NAMES.colorBgHelpFocus]: '#4E2FB7',
  [COLOR_NAMES.colorBgContrast]: '#212126',
  [COLOR_NAMES.colorBgContrastHover]: '#3A3A41',
  [COLOR_NAMES.colorBgContrastFocus]: '#101014',
  [COLOR_NAMES.colorBgSwitch]: '_',

  [COLOR_NAMES.colorBgPrimaryLight]: '#FEEADD',
  [COLOR_NAMES.colorBgHelpLight]: '#EBDFFF',
  [COLOR_NAMES.colorBgSuccess]: '#EEF7C9',
  [COLOR_NAMES.colorBgInfo]: '#D9EEFF',
  [COLOR_NAMES.colorBgWarningInfo]: '#FFF1CC',
  [COLOR_NAMES.colorBgDanger]: '#FDE5CD',

  [COLOR_NAMES.colorBorderDecorative]: '#E8E9ED',
  [COLOR_NAMES.colorBorderPrimary]: '#D0D1D7',
  [COLOR_NAMES.colorBorderHover]: '#3A3A41',
  [COLOR_NAMES.colorBorderFocus]: '#101014',
  [COLOR_NAMES.colorBorderAccent]: '#FA6258',
  [COLOR_NAMES.colorBorderSuccess]: '#85BC0C',
  [COLOR_NAMES.colorBorderDanger]: '#DE350B',

  [COLOR_NAMES.colorOverlay]: '#212126',
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
