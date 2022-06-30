import React from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { TWithMediaProps } from 'utils/types'

export const MOBILE_S_BREAKPOINT = 767
export const MOBILE_BREAKPOINT = 1023
export const TABLET_BREAKPOINT = 1279

export const MOBILE_BREAKPOINT_OLD = 599
export const TABLET_BREAKPOINT_OLD = 1199

export const queries = {
  isMobile: `screen and (max-width: ${MOBILE_BREAKPOINT_OLD}px)`,
  isTablet: `screen and (min-width: ${MOBILE_BREAKPOINT_OLD + 1}px) and (max-width: ${TABLET_BREAKPOINT_OLD}px)`,
  isHandheld: `screen and (max-width: ${TABLET_BREAKPOINT_OLD}px)`,
  isDesktop: `screen and (min-width: ${TABLET_BREAKPOINT_OLD + 1}px)`,
}

export const queries2021 = {
  isMobileS: `screen and (max-width: ${MOBILE_S_BREAKPOINT}px)`,
  isMobileM: `screen and (min-width: ${MOBILE_S_BREAKPOINT + 1}px) and (max-width: ${MOBILE_BREAKPOINT}px)`,
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

export function withMedia<T extends TWithMediaProps>(
  Component: React.ComponentType<T>,
): (props: Partial<T>) => JSX.Element {
  function WrpappedComponent(props: Partial<T>): JSX.Element {
    const isMobile = useMediaQuery({ query: queries.isMobile })
    const isTablet = useMediaQuery({ query: queries.isTablet })
    const isHandheld = useMediaQuery({ query: queries.isHandheld })
    const isDesktop = useMediaQuery({ query: queries.isDesktop })

    return (
      // @ts-ignore
      <Component
        {...props}
        isMobile={isMobile}
        isTablet={isTablet}
        isHandheld={isHandheld}
        isDesktop={isDesktop}
      />
    )
  }

  WrpappedComponent.displayName = `withMedia__${Component.name}`


  return WrpappedComponent
}

export function withMedia2021<T extends TWithMediaProps>(
  Component: React.ComponentType<T>,
): (props: Partial<T>) => JSX.Element {
  function WrpappedComponent(props: Partial<T>): JSX.Element {
    const isMobile = useMediaQuery({ query: queries2021.isMobile })
    const isTablet = useMediaQuery({ query: queries2021.isTablet })
    const isHandheld = useMediaQuery({ query: queries2021.isHandheld })
    const isDesktop = useMediaQuery({ query: queries2021.isDesktop })

    return (
      // @ts-ignore
      <Component
        {...props}
        isMobile={isMobile}
        isTablet={isTablet}
        isHandheld={isHandheld}
        isDesktop={isDesktop}
      />
    )
  }

  WrpappedComponent.displayName = `withMedia2021__${Component.name}`


  return WrpappedComponent
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

export const media2021 = {
  mobileS: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries2021.isMobileS} {
      ${css(literals, ...placeholders)}
    }
  `,
  mobileM: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries2021.isMobileM} {
      ${css(literals, ...placeholders)}
    }
  `,
  mobile: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries2021.isMobile} {
      ${css(literals, ...placeholders)}
    }
  `,
  tablet: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries2021.isTablet} {
      ${css(literals, ...placeholders)}
    }
  `,
  handheld: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries2021.isHandheld} {
      ${css(literals, ...placeholders)}
    }
  `,
  desktop: (literals: TemplateStringsArray, ...placeholders: any[]): FlattenSimpleInterpolation => css`
    @media ${queries2021.isDesktop} {
      ${css(literals, ...placeholders)}
    }
  `,
}

export default media
