export default function sizeInput(size, SIZE, customNumber, attr) {
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
