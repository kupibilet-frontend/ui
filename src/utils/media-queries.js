import React from 'react'
import { css } from 'styled-components'
import Media from '@kupibilet/react-media'

const queries = {
  isMobile: 'screen and (max-width: 599px)',
  isTablet: 'screen and (min-width: 600px) and (max-width: 999px)',
  isHandheld: 'screen and (max-width: 999px)',
  isDesktop: 'screen and (min-width: 1000px)',
}


/**
 * @usage
 * const Component = ({ isMobile, isTablet, isHandheld, isDesktop }) => {}
 * export default connectMedia(Component)
 */
export const connectMedia = (Component) => (
  function connectedMedia(props) {
    return (
      <Media queries={queries}>
        { (medias) => (
          <Component {...props} {...medias} />
        ) }
      </Media>
    )
  }
)

const media = {
  mobile: (...args) => css`
    @media ${queries.isMobile} {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media ${queries.isTablet} {
      ${css(...args)}
    }
  `,
  handheld: (...args) => css`
    @media ${queries.isHandheld} {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media ${queries.isDesktop} {
      ${css(...args)}
    }
  `,
}

export default media
