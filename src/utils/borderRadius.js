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
  top: 'border-radius: 3px 3px 0 0;',
  bottom: 'border-radius: 0 0 3px 3px;',
  all: 'border-radius: 3px;',
  toString: () => borderRadiusSmall.all,
}

export const borderRadiusLarge = {
  left: 'border-radius: 6px 0 0 6px;',
  right: 'border-radius: 0 6px 6px 0;',
  top: 'border-radius: 6px 6px 0 0;',
  bottom: 'border-radius: 0 0 6px 6px;',
  all: 'border-radius: 6px;',
  toString: () => borderRadiusLarge.all,
}
