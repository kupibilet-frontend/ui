import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import * as defaultTheme from './theme'

export const GlobalStylesScope = styled.div`
  ${({ theme }) => theme.font} *, *:before, *:after {
    box-sizing: border-box;
  }
`

const ThemeAndScopedStylesProvider = ({ theme = {}, children, ...props }) => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      ...theme,
      color: {
        ...defaultTheme.color,
        ...theme.color,
      },
    }}
  >
    <GlobalStylesScope {...props}>{children}</GlobalStylesScope>
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
