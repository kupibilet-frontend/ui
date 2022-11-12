import 'styled-components'
import { TColor } from './types'
import * as buttonTokensLight from './tokens/light/button'
import * as buttonTokensDark from './tokens/dark/button'

import * as inputTokensLight from './tokens/light/input'
import * as inputTokensDark from './tokens/dark/input'

import * as typographyTokens from './tokens/typography'

import * as seatTokenLight from './tokens/light/seat'
import * as seatTokenDark from './tokens/dark/seat'

import * as tagTokenLight from './tokens/light/tag'
import * as tagTokenDark from './tokens/dark/tag'

import * as switchTokens from './tokens/switcher'

import * as checkboxTokens from './tokens/checkbox'

import * as radioTokens from './tokens/radio'

import * as skeleton from './tokens/skeleton'

declare module 'styled-components' {
  export interface DefaultTheme {
      font: string,
      color: TColor,
      typography: typeof typographyTokens,
      button: typeof buttonTokensLight | typeof buttonTokensDark,
      input: typeof inputTokensLight | typeof inputTokensDark,
      seat: typeof seatTokenLight | typeof seatTokenDark,
      tag: typeof tagTokenLight | typeof tagTokenDark,
      switch: typeof switchTokens,
      checkbox: typeof checkboxTokens,
      radio: typeof radioTokens,
      skeleton: typeof skeleton,
      queries: Record<string, string>
  }
}
