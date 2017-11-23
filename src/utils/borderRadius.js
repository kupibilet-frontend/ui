/*
 * @usage
 * const roundAllCorners = css`
 *   ${ borderRadiusSmall }
 * `
 * const roudOnlyLeftCorners = css`
 *   ${ borderRadiusSmall.left }
 * `
 */

export const borderRadiusSmall = {
  left: 'border-radius: 3px 0 0 3px;',
  right: 'border-radius: 0 3px 3px 0;',
  all: 'border-radius: 3px;',
  toString: () => borderRadiusSmall.all,
}

export const borderRadiusLarge = {
  left: 'border-radius: 6px 0 0 6px;',
  right: 'border-radius: 0 6px 6px 0;',
  all: 'border-radius: 6px;',
  toString: () => borderRadiusLarge.all,
}

export const borderRadiusHalf = {
  left: 'border-radius: 2em 0 0 2em;',
  right: 'border-radius: 0 2em 2em 0;',
  all: 'border-radius: 2em;',
  toString: () => borderRadiusHalf.all,
}
