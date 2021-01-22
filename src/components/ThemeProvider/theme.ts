import { COLOR_NAMES, TColor } from './types'

export const color: TColor = {
  [COLOR_NAMES.background]: '#ffffff',
  [COLOR_NAMES.fail]: '#e64926',
  [COLOR_NAMES.success]: '#23c256',

  [COLOR_NAMES.primary]: '#38afff',
  [COLOR_NAMES.primaryDark]: '#0f99f5',
  [COLOR_NAMES.primaryDarker]: '#008ae6',
  [COLOR_NAMES.primaryDarkest]: '#007acc',
  [COLOR_NAMES.primaryLight]: '#77c8ff',
  [COLOR_NAMES.primaryLighter]: '#a9ddff',
  [COLOR_NAMES.primaryLightest]: '#e5f5ff',

  [COLOR_NAMES.secondary]: '#ff9100',
  [COLOR_NAMES.secondaryDark]: '#ff7d03',
  [COLOR_NAMES.secondaryDarker]: '#fc6100',
  [COLOR_NAMES.secondaryDarkest]: '#fa3a00',
  [COLOR_NAMES.secondaryLight]: '#ffb640',
  [COLOR_NAMES.secondaryLighter]: '#ffd787',
  [COLOR_NAMES.secondaryLightest]: '#fff0bf',
  [COLOR_NAMES.secondarySoft]: '#fffbf0',

  [COLOR_NAMES.text]: '#808080',
  [COLOR_NAMES.textDark]: '#4d4d4d',
  [COLOR_NAMES.textDarker]: '#333333',
  [COLOR_NAMES.textDarkest]: '#222222',
  [COLOR_NAMES.textLight]: '#b3b3b3',
  [COLOR_NAMES.textLighter]: '#dedede',
  [COLOR_NAMES.textLightest]: '#f6f6f8',

  [COLOR_NAMES.misc]: '#b1bdcc',
  [COLOR_NAMES.miscDark]: '#96a0b3',
  [COLOR_NAMES.miscDarker]: '#7d89a1',
  [COLOR_NAMES.miscDarkest]: '#62708b',
  [COLOR_NAMES.miscLight]: '#cad3de',
  [COLOR_NAMES.miscLighter]: '#dde3eb',
  [COLOR_NAMES.miscLightest]: '#f0f5fa',
}

export const font = `
  [COLOR_NAMES.font]: 400 16px / 20px 'KB Source Sans Pro', 'Source Sans Pro';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`
