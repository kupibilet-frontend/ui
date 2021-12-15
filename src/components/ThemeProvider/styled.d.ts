import 'styled-components'
import { TColor } from './types'

declare module 'styled-components' {
  export interface DefaultTheme {
      font: string,
      color: TColor,
      queries: Record<string, string>
  }
}
