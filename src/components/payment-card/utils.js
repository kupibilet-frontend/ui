import { memoize } from 'lodash'
import moment from 'moment'
import {
  parseToRgb,
  mix,
} from 'polished'

import visa from './assets/visa.svg'
import mastercard from './assets/mastercard.svg'
import maestro from './assets/maestro.svg'
import electron from './assets/electron.svg'

const WHITE_COLOR = '#fff'
const MIN_BRIGHTNESS_FOR_BLACK_TEXT = 0.75
const WHITE_RATIO = 0.24

const PAYMENT_SYSTEM_LOGOS = {
  visa,
  mastercard,
  maestro,
  electron,
}

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

export function getPaymentSystemLogo(system: string) {
  const url = PAYMENT_SYSTEM_LOGOS[system]
  return url ? `url('${url}')` : null
}
