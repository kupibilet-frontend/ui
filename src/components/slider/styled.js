import Rheostat from 'rheostat'
import styled from 'styled-components'

import { switchTransition } from '../../utils/transitions'

const getHandleColor = (props) => {
  if (props['data-handle-key'] === 0 && props['aria-valuenow'] !== props['aria-valuemin']) {
    return props.theme.color.primary
  } else if (props['data-handle-key'] === 1 && props['aria-valuenow'] !== props['aria-valuemax']) {
    return props.theme.color.primary
  } return props.theme.color.miscDark
}

export const RheostatWrapper = styled(Rheostat)`
  width: 252px;

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
  z-index: 1;

  &:hover, &:active {
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
  }
`

export const StyledProgressBar = styled.span`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  display: flex;
  position: absolute;
  height: 6px;
  top: 0;
  z-index: 0;
`

export const StyledPitComponent = styled.span`
  background: ${({ theme }) => theme.color.miscLighter};
  width: 12px;
  height: ${(props) => (props.children % 450000 === 0 ? 12 : 8)}px;
  overflow: hidden;
  text-indent: 100%;
  top: -${(props) => (props.children % 10 === 0 ? 12 : 8)}px;
`
