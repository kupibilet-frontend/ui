import { useMediaQuery } from 'react-responsive'
import { queries } from 'utils/media-queries'

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
