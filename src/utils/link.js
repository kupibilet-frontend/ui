import { css } from 'styled-components'
import { opacify } from 'polished'

import { switchTransition } from '../utils/transitions'

function getColor(props) {
  return props.theme.color.primaryDarkest
}

function getHoverColor(props) {
  return opacify(-0.2, getColor(props))
}

const Link = css`
    ${switchTransition}
    color: ${getColor};
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    transition-property: color;

    .icon-inherit-color {
      fill: ${getColor};
      stroke: ${getColor};
    }

    &:hover {
      color: ${getHoverColor};

      .icon-inherit-color {
        fill: ${getHoverColor};
        stroke: ${getHoverColor};
      }
    }
`

export default Link
