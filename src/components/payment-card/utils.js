import { memoize } from 'lodash'
import moment from 'moment'
import {
  parseToRgb,
  mix,
} from 'polished'

const WHITE_COLOR = '#fff'
const MIN_BRIGHTNESS_FOR_BLACK_TEXT = 0.75
const WHITE_RATIO = 0.24

export const getBrightness = memoize((color: string) => {
  if (!color) {
    return 0
  }
  const { red, green, blue } = parseToRgb(color)
  return (red / 255) * 0.299 + (green / 255) * 0.587 + (blue / 255) * 0.114
})

export const convertCardColor = memoize((color: string) => mix(WHITE_RATIO, WHITE_COLOR, color))

export const getTextColor = (color: string) =>
  (getBrightness(color) > MIN_BRIGHTNESS_FOR_BLACK_TEXT ? 'black' : 'white')

export const dateToString = (date: Date) =>
  moment(date).format('YYYY-MM-DD')
