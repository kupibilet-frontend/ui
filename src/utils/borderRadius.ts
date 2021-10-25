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
  left: 'border-radius: 8px 0 0 8px;',
  right: 'border-radius: 0 8px 8px 0;',
  top: 'border-radius: 8px 8px 0 0;',
  bottom: 'border-radius: 0 0 8px 8px;',
  all: 'border-radius: 8px;',
  toString: (): string => borderRadiusSmall.all,
}

export const borderRadiusLarge = {
  left: 'border-radius: 12px 0 0 12px;',
  right: 'border-radius: 0 12px 12px 0;',
  top: 'border-radius: 12px 12px 0 0;',
  bottom: 'border-radius: 0 0 12px 12px;',
  all: 'border-radius: 12px;',
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
