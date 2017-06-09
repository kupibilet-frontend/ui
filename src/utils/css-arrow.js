import { css } from 'styled-components'

export default function cssArrow({
  color = '#FFF',
  width = 4,
  height = 8,
  fromDirection = 'left',
}) {
  return css`
    &:after {
      ${fromDirection}: 100%;
      top: 50%;
      height: 0;
      width: 0;
      position: absolute;
      border: solid ${height / 2}px transparent;
      content: " ";
      pointer-events: none;
      border-${fromDirection}-color: ${color};
      border-${fromDirection}-width: ${width}px;
      margin-top: -${height / 2}px;
    }
  `
}
