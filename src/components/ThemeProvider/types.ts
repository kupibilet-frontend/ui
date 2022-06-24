import * as colorTokensLight from './tokens/light/color'
import * as colorTokensDark from './tokens/dark/color'

type DEPRECATED_COLOR_NAMES =
  | 'primary100'
  | 'primary200'
  | 'primary300'
  | 'primary400'
  | 'primary500'
  | 'primary600'
  | 'primary700'

  | 'secondary010'
  | 'secondary050'
  | 'secondary100'
  | 'secondary200'
  | 'secondary300'
  | 'secondary400'
  | 'secondary500'
  | 'secondary600'
  | 'secondary700'

  | 'misc10'
  | 'misc100'
  | 'misc200'
  | 'misc300'
  | 'misc400'
  | 'misc500'
  | 'misc600'
  | 'misc700'

  | 'text100'
  | 'text200'
  | 'text300'
  | 'text400'
  | 'text500'
  | 'text600'
  | 'text700'

  | 'error010'
  | 'error700'

  | 'success010'
  | 'success700'

  | 'background'

type COLOR_TOKENS_LIGHT = keyof typeof colorTokensLight
type COLOR_TOKENS_DARK = keyof typeof colorTokensDark

type COLOR_NAMES = DEPRECATED_COLOR_NAMES | COLOR_TOKENS_DARK

type TColor = Record<COLOR_NAMES, string>

export { COLOR_NAMES, TColor }
