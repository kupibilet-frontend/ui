import 'styled-components'
import { TColor } from './types'
import * as buttonTokens from './tokens/button'

type TokenValue = string | Record<string, string>

declare module 'styled-components' {
  export interface DefaultTheme {
      font: string,
      color: TColor,
      button: typeof buttonTokens,
      queries: Record<string, string>
  }
}
