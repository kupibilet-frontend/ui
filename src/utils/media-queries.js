import { css } from 'styled-components'
import viewport from './viewport'

export const dimensions = {
  mobile: { min: 0, max: 599 },
  tablet: { min: 600, max: 999 },
  handheld: { min: 0, max: 999 },
  desktop: { min: 1000, max: Number.POSITIVE_INFINITY },
}

export const isMobile = (width = viewport.getWidth()) => (
  dimensions.mobile.min <= width && width <= dimensions.mobile.max
)
export const isTablet = (width = viewport.getWidth()) => (
  dimensions.tablet.min <= width && width <= dimensions.tablet.max
)
export const isHandheld = (width = viewport.getWidth()) => (
  dimensions.handheld.min <= width && width <= dimensions.handheld.max
)
export const isDesktop = (width = viewport.getWidth()) => (
  dimensions.desktop.min <= width && width <= dimensions.desktop.max
)

const media = {
  mobile: (...args) => css`
    @media screen and (max-width: ${dimensions.mobile.max}px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media screen and
      (min-width: ${dimensions.tablet.min}px) and
      (max-width: ${dimensions.tablet.max}px)
    {
      ${css(...args)}
    }
  `,
  handheld: (...args) => css`
    @media screen and (max-width: ${dimensions.handheld.max}px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media screen and (min-width: ${dimensions.desktop.min}px) {
      ${css(...args)}
    }
  `,
}

export default media
