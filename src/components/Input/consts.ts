import { TInputSize } from './types'

const TEXTAREA_PADDINGS: Record<TInputSize, number> = {
  large: 10,
  medium: 8,
  small: 5,
}

type TPadding = Record<TInputSize, { outer: string, inner: string }>

const ICON_PADDINGS: TPadding = {
  large: {
    outer: '10px',
    inner: '8px',
  },
  medium: {
    outer: '7px',
    inner: '5px',
  },
  small: {
    outer: '7px',
    inner: '5px',
  },
}

const ICON_GROUP_PADDINGS: TPadding = {
  large: {
    outer: '10px',
    inner: '3px',
  },
  medium: {
    outer: '7px',
    inner: '3px',
  },
  small: {
    outer: '7px',
    inner: '3px',
  },
}

const SIZE: Record<TInputSize, number> = {
  large: 14,
  medium: 11,
  small: 8,
}

const TYPOGRAPHY: Record<TInputSize, number> = {
  large: 18,
  medium: 16,
  small: 16,
}

// plus 2px of border from container
const INPUT_HEIGHT: Record<TInputSize, number> = {
  large: 46,
  medium: 38,
  small: 30,
}

export {
  TEXTAREA_PADDINGS,
  ICON_PADDINGS,
  ICON_GROUP_PADDINGS,
  SIZE,
  TYPOGRAPHY,
  INPUT_HEIGHT,
}
