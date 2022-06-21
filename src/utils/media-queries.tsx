import React from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { TWithMediaProps } from 'utils/types'

export const MOBILE_BREAKPOINT = 599
export const TABLET_BREAKPOINT = 1199

export const queries = {
  isMobile: `screen and (max-width: ${MOBILE_BREAKPOINT}px)`,
  isTablet: `screen and (min-width: ${MOBILE_BREAKPOINT + 1}px) and (max-width: ${TABLET_BREAKPOINT}px)`,
  isHandheld: `screen and (max-width: ${TABLET_BREAKPOINT}px)`,
  isDesktop: `screen and (min-width: ${TABLET_BREAKPOINT + 1}px)`,
}

export function withMedia<T extends TWithMediaProps>(Component: React.ComponentType<T>): any {
  function WrpappedComponet(props: T) {
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

  WrpappedComponet.displayName = 'withMedia'


  return WrpappedComponet
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
