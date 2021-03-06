enum COLOR_NAMES {
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
}

type TColor = Record<COLOR_NAMES, string>

export { COLOR_NAMES, TColor }
