import { useMediaQuery } from 'react-responsive'
import { queries, queries2021 } from 'utils/media-queries'

export type TUseWithMedia = Record<keyof typeof queries, boolean>

export const useWithMedia = (): TUseWithMedia => {
  const isMobile = useMediaQuery({ query: queries.isMobile })
  const isDesktop = useMediaQuery({ query: queries.isDesktop })
  const isHandheld = useMediaQuery({ query: queries.isHandheld })
  const isTablet = useMediaQuery({ query: queries.isTablet })

  return {
    isMobile,
    isDesktop,
    isHandheld,
    isTablet,
  }
}

export type TUseWithMedia2021 = Record<keyof typeof queries2021, boolean>

export const useWithMedia2021 = (): TUseWithMedia2021 => ({
  isMobileS: useMediaQuery({ query: queries2021.isMobileS }),
  isMobileM: useMediaQuery({ query: queries2021.isMobileM }),
  isMobile: useMediaQuery({ query: queries2021.isMobile }),
  isTablet: useMediaQuery({ query: queries2021.isTablet }),
  isHandheld: useMediaQuery({ query: queries2021.isHandheld }),
  isDesktop: useMediaQuery({ query: queries2021.isDesktop }),
})
