import { ModalSize } from './types'

export const isThin = (size: ModalSize): boolean => size === 'thin'

export const isCompact = (size: ModalSize): boolean => size === 'compact'

export const isSetSize = (size: ModalSize): boolean => isThin(size) || isCompact(size)

export const getWidth = (size: ModalSize): string => {
  switch (size) {
    case 'thin':
      return '378'

    case 'compact':
      return '588'

    case 'wide':
      return '882'

    default:
      return '882'
  }
}
