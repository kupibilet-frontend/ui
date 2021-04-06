import { css, FlattenSimpleInterpolation } from 'styled-components'

export default function placeholder(
  literals: TemplateStringsArray,
  ...placeholders: any[]
): FlattenSimpleInterpolation {
  const styles = css(literals, ...placeholders)

  return css`
    &::placeholder {
      ${styles}
    }
    &::-webkit-input-placeholder {
      ${styles}
    }
    &::-moz-placeholder {
      ${styles}
    }
    &:-ms-input-placeholder {
      ${styles}
    }
  `
}
