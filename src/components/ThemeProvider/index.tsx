import React from 'react'
import PropTypes from 'prop-types'
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
  children: React.ReactNode,
  [key: string]: any,
}


const ThemeAndScopedStylesProvider = ({ children, ...props }: TProps): JSX.Element => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStylesScope {...props}>
      { children }
    </GlobalStylesScope>
  </ThemeProvider>
)

ThemeAndScopedStylesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      font: PropTypes.string,
    }),
  ]),
}

ThemeAndScopedStylesProvider.defaultProps = {
  theme: defaultTheme,
}

export default ThemeAndScopedStylesProvider
