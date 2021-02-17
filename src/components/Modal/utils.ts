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
