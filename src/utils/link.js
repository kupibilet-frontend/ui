import { css } from 'styled-components'
import { opacify } from 'polished'

import { switchTransition } from 'utils/transitions'

export function getLinkColor(props) {
  return props.theme.color.primaryDarkest
}

export function getLinkHoverColor(props) {
  return opacify(-0.2, getLinkColor(props))
}

const Link = css`
  ${switchTransition} color: ${getLinkColor};
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  transition-property: color;

  .icon-inherit-color {
    fill: ${getLinkColor};
  }

  &:hover {
    color: ${getLinkHoverColor};

    .icon-inherit-color {
      fill: ${getLinkHoverColor};
    }
  }
`

export default Link
