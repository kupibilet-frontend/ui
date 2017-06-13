import { css } from 'styled-components'

const media = {
  mobile: (...args) => css`
    @media screen and (max-width: 599px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media screen and (min-width: 600px) and (max-width: 999px) {
      ${css(...args)}
    }
  `,
  handheld: (...args) => css`
    @media screen and (max-width: 999px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media screen and (min-width: 1000px) {
      ${css(...args)}
    }
  `,
}

export default media
