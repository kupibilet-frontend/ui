import { ICON_SIZES } from 'components/Icon/consts'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { ModalSize } from './types'

export const isThin = (size: ModalSize): boolean => size === 'thin'

export const isCompact = (size: ModalSize): boolean => size === 'compact'

export const isSetSize = (size: ModalSize): boolean => isThin(size) || isCompact(size)

export const getWidth = (size: ModalSize): string => {
  switch (size) {
    case 'thin':
      return '378px'

    case 'compact':
      return '588px'

    case 'wide':
      return '882px'

    case 'auto':
      return 'auto'

    default:
      return '882px'
  }
}

export const getCloseIconSize = (isHandheld: boolean, size: ModalSize): ICON_SIZES => {
  if (isHandheld) {
    return ICON_SIZES.normal
  } else if (isCompact(size)) {
    return ICON_SIZES.xxsmall
  }
  return ICON_SIZES.medium
}

export const getCloseIconColor = (size: ModalSize): COLOR_NAMES => {
  if (isCompact(size)) {
    return COLOR_NAMES.miscDarkest
  }
  return COLOR_NAMES.textLight
}
