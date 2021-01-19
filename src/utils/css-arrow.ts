import { css, FlattenSimpleInterpolation } from 'styled-components'

interface TArgs {
  color?: string,
  width?: number,
  height?: number,
  fromDirection?: 'left' | 'right'
}

export default function cssArrow({
  color = '#FFF',
  width = 4,
  height = 8,
  fromDirection = 'left',
}: TArgs): FlattenSimpleInterpolation {
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
