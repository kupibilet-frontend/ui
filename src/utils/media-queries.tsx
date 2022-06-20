import React from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { TWithMediaProps } from 'utils/types'
// @ts-ignore delete old package
import Media from '@kupibilet/react-media'

import { useMediaQuery } from 'react-responsive'

export const MOBILE_BREAKPOINT = 599
export const TABLET_BREAKPOINT = 1199

export const queries = {
  isMobile: `screen and (max-width: ${MOBILE_BREAKPOINT}px)`,
  isTablet: `screen and (min-width: ${MOBILE_BREAKPOINT + 1}px) and (max-width: ${TABLET_BREAKPOINT}px)`,
  isHandheld: `screen and (max-width: ${TABLET_BREAKPOINT}px)`,
  isDesktop: `screen and (min-width: ${TABLET_BREAKPOINT + 1}px)`,
}

/**
 * @usage
 * const Component = ({ isMobile, isTablet, isHandheld, isDesktop }) => {}
 * export default withMedia(Component)
 */

export function withMediaOld<T extends TWithMediaProps>(
  Component:React.ComponentType<T>,
): (props: Partial<T>) => JSX.Element {
  function MediaProvider(props: Partial<T>): JSX.Element {
    const renderMedias = (medias: TWithMediaProps) => {
      return <Component {...props as T} {...medias} />
    }

    return (
      <Media queries={queries}>
        { renderMedias }
      </Media>
    )
  }

  MediaProvider.displayName = 'withMedia'

  return MediaProvider
}


export function withMedia<T>(Component: React.ComponentType<T>): any {
  function WrpappedComponnet(props: T) {
    const isMobile = useMediaQuery({ query: queries.isMobile })
    const isTablet = useMediaQuery({ query: queries.isTablet })
    const isHandheld = useMediaQuery({ query: queries.isHandheld })
    const isDesktop = useMediaQuery({ query: queries.isDesktop })

    return (
      <Component
        {...props}
        isMobile={isMobile}
        isTablet={isTablet}
        isHandheld={isHandheld}
        isDesktop={isDesktop}
      />
    )
  }

  return WrpappedComponnet
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
