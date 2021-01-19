interface TColor {
  background: string,
  fail: string,
  success: string,

  primary: string,
  primaryDark: string,
  primaryDarker: string,
  primaryDarkest: string,
  primaryLight: string,
  primaryLighter: string,
  primaryLightest: string,

  secondary: string,
  secondaryDark: string,
  secondaryDarker: string,
  secondaryDarkest: string,
  secondaryLight: string,
  secondaryLighter: string,
  secondaryLightest: string,
  secondarySoft: string,

  text: string,
  textDark: string,
  textDarker: string,
  textDarkest: string,
  textLight: string,
  textLighter: string,
  textLightest: string,

  misc: string,
  miscDark: string,
  miscDarker: string,
  miscDarkest: string,
  miscLight: string,
  miscLighter: string,
  miscLightest: string,
}

interface TTheme {
  color: TColor
}

export { TColor, TTheme }
