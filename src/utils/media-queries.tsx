import React from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
// @ts-ignore delete old package
import Media from '@kupibilet/react-media'

export const queries = {
  isMobile: 'screen and (max-width: 599px)',
  isTablet: 'screen and (min-width: 600px) and (max-width: 1199px)',
  isHandheld: 'screen and (max-width: 1199px)',
  isDesktop: 'screen and (min-width: 1200px)',
}

//  @usage
//  const Component = ({ isMobile, isTablet, isHandheld, isDesktop }) => {}
//  export default withMedia(Component)

export function withMedia(Component: React.ComponentType) {
  return function MediaProvider(props: any): JSX.Element {
    const renderMedias = (medias: any) => {
      return <Component {...props} {...medias} />
    }

    return (
      <Media queries={queries}>
        { renderMedias }
      </Media>
    )
  }
}

const media = {
  mobile: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries.isMobile} {
      ${css(literals, ...placeholders)}
    }
  `,
  tablet: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries.isTablet} {
      ${css(literals, ...placeholders)}
    }
  `,
  handheld: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries.isHandheld} {
      ${css(literals, ...placeholders)}
    }
  `,
  desktop: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries.isDesktop} {
      ${css(literals, ...placeholders)}
    }
  `,
}

export default media
