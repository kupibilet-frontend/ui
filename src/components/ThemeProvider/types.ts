enum COLOR_NAMES {
  // old color sheme
  primary100 = 'primary100',
  primary200 = 'primary200',
  primary300 = 'primary300',
  primary400 = 'primary400',
  primary500 = 'primary500',
  primary600 = 'primary600',
  primary700 = 'primary700',

  secondary010 = 'secondary010',
  secondary050 = 'secondary050',
  secondary100 = 'secondary100',
  secondary200 = 'secondary200',
  secondary300 = 'secondary300',
  secondary400 = 'secondary400',
  secondary500 = 'secondary500',
  secondary600 = 'secondary600',
  secondary700 = 'secondary700',

  misc10 = 'misc10',
  misc100 = 'misc100',
  misc200 = 'misc200',
  misc300 = 'misc300',
  misc400 = 'misc400',
  misc500 = 'misc500',
  misc600 = 'misc600',
  misc700 = 'misc700',

  text100 = 'text100',
  text200 = 'text200',
  text300 = 'text300',
  text400 = 'text400',
  text500 = 'text500',
  text600 = 'text600',
  text700 = 'text700',

  error010 = 'error010',
  error700 = 'error700',

  success010 = 'success010',
  success700 = 'success700',

  background = 'background',


  // new color scheme with "design tokens"
  colorTextPrimary = 'colorTextPrimary',
  colorTextSecondary = 'colorTextSecondary',
  colorTextPlaceholder = 'colorTextPlaceholder',
  colorTextDescription = 'colorTextDescription',
  colorTextContrast = 'colorTextContrast',
  colorTextAccent = 'colorTextAccent',
  colorTextSuccess = 'colorTextSuccess',
  colorTextInfo = 'colorTextInfo',
  colorTextWarning = 'colorTextWarning',
  colorTextDanger = 'colorTextDanger',
  colorTextDisabled = 'colorTextDisabled',

  colorTextLink = 'colorTextLink',
  colorTextLinkHover = 'colorTextLinkHover',
  colorTextLinkFocus = 'colorTextLinkFocus',

  colorBgPrimary = 'colorBgPrimary',
  colorBgPrimaryFocus = 'colorBgPrimaryFocus',
  colorBgPrimaryHover = 'colorBgPrimaryHover',
  colorBgPrimaryDisable = 'colorBgPrimaryDisable',
  colorBgHover = 'colorBgHover',
  colorBgLayout = 'colorBgLayout',

  colorBgSecondary = 'colorBgSecondary',
  colorBgSecondaryHover = 'colorBgSecondaryHover',
  colorBgSecondaryFocus = 'colorBgSecondaryFocus',
  colorBgSecondaryDisabled = 'colorBgSecondaryDisabled',
  colorBgAccent = 'colorBgAccent',
  colorBgAccentHover = 'colorBgAccentHover',
  colorBgAccentFocus = 'colorBgAccentFocus',
  colorBgHelp = 'colorBgHelp',
  colorBgHelpHover = 'colorBgHelpHover',
  colorBgHelpFocus = 'colorBgHelpFocus',
  colorBgContrast = 'colorBgContrast',
  colorBgContrastHover = 'colorBgContrastHover',
  colorBgContrastFocus = 'colorBgContrastFocus',
  colorBgSwitch = 'colorBgSwitch',

  colorBgPrimaryLight = 'colorBgPrimaryLight',
  colorBgHelpLight = 'colorBgHelpLight',
  colorBgSuccess = 'colorBgSuccess',
  colorBgInfo = 'colorBgInfo',
  colorBgWarningInfo = 'colorBgWarningInfo',
  colorBgDanger = 'colorBgDanger',

  colorBorderDecorative = 'colorBorderDecorative',
  colorBorderPrimary = 'colorBorderPrimary',
  colorBorderHover = 'colorBorderHover',
  colorBorderFocus = 'colorBorderFocus',
  colorBorderAccent = 'colorBorderAccent',
  colorBorderSuccess = 'colorBorderSuccess',
  colorBorderDanger = 'colorBorderDanger',

  colorOverlay = 'colorOverlay',

  colorBgStatus = 'colorBgStatus',
  colorBgStatusDanger = 'colorBgStatusDanger',
  colorBgStatusHelp = 'colorBgStatusHelp',
  colorBgStatusInfo = 'colorBgStatusInfo',
  colorBgStatusWarning = 'colorBgStatusWarning',
  colorBgStatusSuccess = 'colorBgStatusSuccess',
}

type TColor = Record<COLOR_NAMES, string>

export { COLOR_NAMES, TColor }
