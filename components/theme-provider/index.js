import React, { PropTypes } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import resetCSS from '!raw-loader!reset-css'
console.log(resetCSS)
const GlobalStylesScope = styled.div`
  ${({theme}) => theme.font}

  ${ resetCSS }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

const ThemeAndScopedStylesProvider = (props) => (
  <ThemeProvider {...props}>
    <GlobalStylesScope>
      { props.children }
    </GlobalStylesScope>
  </ThemeProvider>
)

ThemeAndScopedStylesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      font: PropTypes.string
    })
  ])
}

ThemeAndScopedStylesProvider.defaultProps = {
  theme: {
    font: 'initial'
  }
}

export default ThemeAndScopedStylesProvider
