import { css } from 'styled-components'

const media = {
  mobile: (...args) => css`
    @media screen and (max-width: 639px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media screen and (min-width: 640px) and (max-width: 768px) {
      ${css(...args)}
    }
  `,
  handheld: (...args) => css`
    @media screen and (max-width: 768px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media screen and (min-width: 769px) {
      ${css(...args)}
    }
  `,
}

export default media
