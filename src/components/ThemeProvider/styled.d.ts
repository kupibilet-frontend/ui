import 'styled-components'
import { TColor } from './types'
import * as buttonTokensLight from './tokens/light/button'
import * as buttonTokensDark from './tokens/dark/button'
import * as typographyTokens from './tokens/typography'

import * as seatTokenLight from './tokens/light/seat'
import * as seatTokenDark from './tokens/dark/seat'

declare module 'styled-components' {
  export interface DefaultTheme {
      font: string,
      color: TColor,
      typography: typeof typographyTokens,
      button: typeof buttonTokensLight | typeof buttonTokensDark,
      seat: typeof seatTokenLight | typeof seatTokenDark,
      queries: Record<string, string>
  }
}
