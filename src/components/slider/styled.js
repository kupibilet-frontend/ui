import Rheostat from 'rheostat'
import styled from 'styled-components'
import inRange from 'lodash/inRange'

import { switchTransition } from '../../utils/transitions'

const getHandleColor = (props) => {
  const key = props['data-handle-key']
  const valueNow = props['aria-valuenow']
  const primary = props.theme.color.primary

  if (key === 0 && valueNow !== props['aria-valuemin']) {
    return primary
  } else if (key === 1 && valueNow !== props['aria-valuemax']) {
    return primary
  }
  return props.theme.color.miscDark
}

export const StyledSlider = styled(Rheostat)`
  width: 100%;
  z-index: 1;

  .rheostat-background {
    background-color: ${({ theme }) => theme.color.miscLight};
    height: 6px;
    border-radius: 3px;
    width: 100%;
  }
`

export const StyledHandle = styled.span`
  ${switchTransition}
  transition-property: background-color, box-shadow;
  background-color: ${(props) => getHandleColor(props)}
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  height: 18px;
  top: -6px;
  width: 18px;
  z-index: 2;
  transform: translateX(-50%);

  &:hover, &:active {
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
  }
`

export const StyledProgressBar = styled.span`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  display: flex;
  margin-left: 1px;
  position: absolute;
  height: 6px;
  top: 0;
  z-index: 1;
`

export const BAR_OFFSET = 6

// eslint-disable-next-line no-confusing-arrow
const getBarBackgroundColor = ({ theme, children, values, valuesAreDefault }) =>
  !valuesAreDefault && inRange(children, ...values) ? theme.color.secondaryLight : ''

export const StyledPitComponent = styled.span`
  background: ${({ theme }) => theme.color.miscLighter};
  font-size: 0;
  bottom: 6px;
  transform: translateY(${BAR_OFFSET}px);
  width: ${({ pitWidth }) => pitWidth}%;
  height: ${({ pitHeight, children }) => (pitHeight[children] + BAR_OFFSET)}px;
  background-color: ${getBarBackgroundColor};
`
