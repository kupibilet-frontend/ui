import Rheostat from 'rheostat'
import styled from 'styled-components'

import { switchTransition } from '../../utils/transitions'

const getHandleColor = (props) => {
  const key = props['data-handle-key']
  const valueNow = props['aria-valuenow']
  const { primary } = props.theme.color

  return key === 0 && valueNow !== props['aria-valuemin'] || key === 1 && valueNow !== props['aria-valuemax']
    ? primary
    : props.theme.color.miscDark
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
  background-color: ${getHandleColor};
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  height: 18px;
  top: ${({ hasTooltip }) => `${hasTooltip ? 0 : -6}px`};
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

const getBarColor = ({ isHighlighted, theme }) =>
  isHighlighted ? theme.color.secondaryLight : theme.color.miscLighter

export const StyledPitComponent = styled.span`
  background-color: ${getBarColor};
  font-size: 0;
  bottom: 6px;
  transform: translateY(${BAR_OFFSET}px);
  width: ${({ pitWidth }) => pitWidth}%;
  height: ${({ pitHeight, children }) => (pitHeight[children] + BAR_OFFSET)}px;
`
