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
 * export default withMedia(Component)
 */
export const withMedia = Component =>
  class extends React.Component {
    static displayName = 'withMedia'

    renderMedias = medias => <Component {...this.props} {...medias} />

    render() {
      return <Media queries={queries}>{this.renderMedias}</Media>
    }
  }

const media = {
  mobile: (...args) => css`
    .responsive &,
    .responsive-booking & {
      @media ${queries.isMobile} {
        ${css(...args)};
      }
    }
  `,
  tablet: (...args) => css`
    .responsive &,
    .responsive-booking & {
      @media ${queries.isTablet} {
        ${css(...args)};
      }
    }
  `,
  handheld: (...args) => css`
    .responsive &,
    .responsive-booking & {
      @media ${queries.isHandheld} {
        ${css(...args)};
      }
    }
  `,
  desktop: (...args) => css`
    .responsive &,
    .responsive-booking & {
      @media ${queries.isDesktop} {
        ${css(...args)};
      }
    }
  `,
}

export default media
