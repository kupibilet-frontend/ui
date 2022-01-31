import 'styled-components'
import { TColor } from './types'
import * as buttonTokensLight from './tokens/light/button'
import * as buttonTokensDark from './tokens/dark/button'

declare module 'styled-components' {
  export interface DefaultTheme {
      font: string,
      color: TColor,
      button: typeof buttonTokensLight | typeof buttonTokensDark,
      queries: Record<string, string>
  }
}
