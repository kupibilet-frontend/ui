import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

export const GlobalStylesScope = styled.div`
  ${({ theme }) => theme.font}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

interface TProps {
  theme?: 'light' | 'dark',
  children: React.ReactChild,
  [key: string]: any,
}


const ThemeAndScopedStylesProvider = ({ theme = 'light', children, ...props }: TProps): JSX.Element => (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStylesScope {...props}>
      { children }
    </GlobalStylesScope>
  </ThemeProvider>
)

export default ThemeAndScopedStylesProvider
