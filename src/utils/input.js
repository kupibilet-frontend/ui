export const SIZE = {
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
Object.keys(SIZE).forEach((element) => {
  arr.push(SIZE[element])
})

const customNumber = arr.reduce((x, y) => Math.abs(x - y))

export function sizeInput(size, attr) {
  if (attr === 'height') {
    return `${(SIZE[size] * 2 + customNumber * 2)}`
  }
  if (attr === 'padding') {
    return `${SIZE[size]}`
  }
  return `
      padding-left: ${SIZE[size]}px
      padding-right: ${SIZE[size]}px
      height: ${(SIZE[size] * 2 + customNumber * 2)}px
    `
}
