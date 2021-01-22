enum COLOR_NAMES {
  background = 'background',
  fail = 'fail',
  success = 'success',
  primary = 'primary',
  primaryDark = 'primaryDark',
  primaryDarker = 'primaryDarker',
  primaryDarkest = 'primaryDarkest',
  primaryLight = 'primaryLight',
  primaryLighter = 'primaryLighter',
  primaryLightest = 'primaryLightest',
  secondary = 'secondary',
  secondaryDark = 'secondaryDark',
  secondaryDarker = 'secondaryDarker',
  secondaryDarkest = 'secondaryDarkest',
  secondaryLight = 'secondaryLight',
  secondaryLighter = 'secondaryLighter',
  secondaryLightest = 'secondaryLightest',
  secondarySoft = 'secondarySoft',
  text = 'text',
  textDark = 'textDark',
  textDarker = 'textDarker',
  textDarkest = 'textDarkest',
  textLight = 'textLight',
  textLighter = 'textLighter',
  textLightest = 'textLightest',
  misc = 'misc',
  miscDark = 'miscDark',
  miscDarker = 'miscDarker',
  miscDarkest = 'miscDarkest',
  miscLight = 'miscLight',
  miscLighter = 'miscLighter',
  miscLightest = 'miscLightest',
}

interface TColor {
  [COLOR_NAMES.background]: string,
  [COLOR_NAMES.fail]: string,
  [COLOR_NAMES.success]: string,

  [COLOR_NAMES.primary]: string,
  [COLOR_NAMES.primaryDark]: string,
  [COLOR_NAMES.primaryDarker]: string,
  [COLOR_NAMES.primaryDarkest]: string,
  [COLOR_NAMES.primaryLight]: string,
  [COLOR_NAMES.primaryLighter]: string,
  [COLOR_NAMES.primaryLightest]: string,

  [COLOR_NAMES.secondary]: string,
  [COLOR_NAMES.secondaryDark]: string,
  [COLOR_NAMES.secondaryDarker]: string,
  [COLOR_NAMES.secondaryDarkest]: string,
  [COLOR_NAMES.secondaryLight]: string,
  [COLOR_NAMES.secondaryLighter]: string,
  [COLOR_NAMES.secondaryLightest]: string,
  [COLOR_NAMES.secondarySoft]: string,

  [COLOR_NAMES.text]: string,
  [COLOR_NAMES.textDark]: string,
  [COLOR_NAMES.textDarker]: string,
  [COLOR_NAMES.textDarkest]: string,
  [COLOR_NAMES.textLight]: string,
  [COLOR_NAMES.textLighter]: string,
  [COLOR_NAMES.textLightest]: string,

  [COLOR_NAMES.misc]: string,
  [COLOR_NAMES.miscDark]: string,
  [COLOR_NAMES.miscDarker]: string,
  [COLOR_NAMES.miscDarkest]: string,
  [COLOR_NAMES.miscLight]: string,
  [COLOR_NAMES.miscLighter]: string,
  [COLOR_NAMES.miscLightest]: string,
}

interface TTheme {
  color: TColor
}

export { COLOR_NAMES, TColor, TTheme }
