import { injectGlobal } from 'styled-components'

const injectGlobalStyles = () =>
  injectGlobal`
    body {
      font: 400 16px / 20px 'Source Sans Pro';
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
    button {
      border: none;
      outline: none;
      font: inherit;
    }
    body * {
      box-sizing: border-box;
    }
    button {
      border: none;
      outline: none;
      font: inherit;
    }
  `

export default injectGlobalStyles
