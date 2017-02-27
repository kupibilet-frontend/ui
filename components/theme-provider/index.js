import React, { PropTypes } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const GlobalStylesScope = styled.div`
  ${({ theme }) => theme.font}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

const ThemeAndScopedStylesProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
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
  theme: {
    font: 'initial',
  },
}

export default ThemeAndScopedStylesProvider
