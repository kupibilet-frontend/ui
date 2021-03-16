import React from 'react'
import { css } from 'styled-components'
// import Media from '@kupibilet/react-media'

export const queries = {
  isMobile: 'screen and (max-width: 599px)',
  isTablet: 'screen and (min-width: 600px) and (max-width: 1199px)',
  isHandheld: 'screen and (max-width: 1199px)',
  isDesktop: 'screen and (min-width: 1200px)',
}


/**
 * @usage
 * const Component = ({ isMobile, isTablet, isHandheld, isDesktop }) => {}
 * export default withMedia(Component)
 */
export const withMedia = (Component) => (
  class extends React.Component {
    static displayName = 'withMedia'

    renderMedias = (medias) => (
      <Component {...this.props} {...medias} />
    )

    render() {
      return (
        <Component {...this.props} isDesktop isHandheld={false} isMobile={false} isTablet={false} />
      )
    }
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
