import { css } from 'styled-components'

export default function placeholder(...args) {
  const styles = css.apply(null, args)

  return css`
    &::placeholder {
      ${ styles }
    }

    &::-webkit-input-placeholder {
      ${ styles }
    }

    ::-moz-placeholder {
      ${ styles }
    }

    :-ms-input-placeholder {
      ${ styles }
    }
  `
}
