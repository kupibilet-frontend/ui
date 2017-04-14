export const PADDING = {
  large: 15,
  normal: 12,
  small: 9,
}

export const TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16,
}

const arr = []
let element
// eslint-disable-next-line
for (element in PADDING) {
  arr.push(PADDING[element])
}

const customNumber = arr.reduce((x, y) => Math.abs(x - y))

export function calculate(size) {
  return (PADDING[size] * 2 + customNumber * 2)
}
