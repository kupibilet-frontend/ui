import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import * as defaultTheme from './theme'

const GlobalStylesScope = styled.div`
  ${({ theme }) => theme.font}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

const ThemeAndScopedStylesProvider = ({ theme, children }) => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      theme,
    }}
  >
    <GlobalStylesScope>
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
