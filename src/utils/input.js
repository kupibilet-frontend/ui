export default function sizeInput(size, SIZE, value, attr) {
  if (attr === 'height') {
    return `${(SIZE[size] * 2 + value * 2) + 4}px`
  }
  if (attr === 'padding') {
    return `${SIZE[size]}px`
  }
  return `
      padding-left: ${SIZE[size]}px
      padding-right: ${SIZE[size]}px
      height: ${(SIZE[size] * 2 + value * 2) + 4}px
    `
}
