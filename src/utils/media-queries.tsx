import React from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { TWithMediaProps } from 'utils/types'
// @ts-ignore delete old package
import Media from '@kupibilet/react-media'

export const queries = {
  isMobile: 'screen and (max-width: 599px)',
  isTablet: 'screen and (min-width: 600px) and (max-width: 1199px)',
  isHandheld: 'screen and (max-width: 1199px)',
  isDesktop: 'screen and (min-width: 1200px)',
}

export const queries2021 = {
  isMobileS: 'screen and (max-width: 767px)',
  isMobileM: 'screen and (min-width: 768px) and (max-width: 1023px)',
  isMobile: 'screen and (max-width: 1023px)',
  isTablet: 'screen and (min-width: 1024px) and (max-width: 1279px)',
  isHandheld: 'screen and (max-width: 1279px)',
  isDesktop: 'screen and (min-width: 1280px)',
}

/**
 * @usage
 * const Component = ({ isMobile, isTablet, isHandheld, isDesktop }) => {}
 * export default withMedia(Component)
 */

export function withMedia<T extends TWithMediaProps>(
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

export function withMedia2021<T extends TWithMediaProps>(
  Component:React.ComponentType<T>,
): (props: Partial<T>) => JSX.Element {
  function MediaProvider(props: Partial<T>): JSX.Element {
    const renderMedias = (medias: TWithMediaProps) => {
      return <Component {...props as T} {...medias} />
    }

    return (
      <Media queries={queries2021}>
        { renderMedias }
      </Media>
    )
  }

  MediaProvider.displayName = 'withMedia'

  return MediaProvider
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
