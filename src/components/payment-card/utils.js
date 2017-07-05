import { memoize } from 'lodash'
import {
  desaturate,
  lighten,
  parseToRgb,
  mix,
} from 'polished'

const BLACK_COLOR = '#000'

export function getPaymentSystem(value: number) {
  const s = value.toString()
  return s.startsWith('5') ? 'mastercard' : 'visa'
}

export const getBrightness = memoize((color: string) => {
  if (!color) {
    return 0
  }
  const { red, green, blue } = parseToRgb(color)
  return (red / 255) * 0.2126 + (green / 255) * 0.7152 + (blue / 255) * 0.0722
})

export const convertColor = memoize((color) => desaturate(0.05, lighten(0.05, color)))

export const darken = memoize((color: string) => color && mix(0.8, color, BLACK_COLOR))
