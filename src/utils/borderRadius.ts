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
  toString: (): string => borderRadiusSmall.all,
}

export const borderRadiusLarge = {
  left: 'border-radius: 6px 0 0 6px;',
  right: 'border-radius: 0 6px 6px 0;',
  top: 'border-radius: 6px 6px 0 0;',
  bottom: 'border-radius: 0 0 6px 6px;',
  all: 'border-radius: 6px;',
  toString: (): string => borderRadiusLarge.all,
}

export const borderRadiusCircle = {
  left: 'border-radius: 50% 0 0 50%;',
  right: 'border-radius: 0 50% 50% 0;',
  top: 'border-radius: 50% 50% 0 0;',
  bottom: 'border-radius: 0 0 50% 50%;',
  all: 'border-radius: 50%;',
  toString: (): string => borderRadiusCircle.all,
}
