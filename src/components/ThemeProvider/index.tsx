import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'

export const GlobalStylesScope = styled.div`
  ${({ theme }) => theme.font}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

interface TProps {
  children: React.ReactChild,
  [key: string]: any,
}


const ThemeAndScopedStylesProvider = ({ children, ...props }: TProps): JSX.Element => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStylesScope {...props}>
      { children }
    </GlobalStylesScope>
  </ThemeProvider>
)

export default ThemeAndScopedStylesProvider
