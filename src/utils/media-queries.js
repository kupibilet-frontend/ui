import { css } from 'styled-components'

const media = {
  mobile: (...args) => css`
    @media (max-width: 639px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
}

export default media
