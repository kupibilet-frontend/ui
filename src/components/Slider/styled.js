import styled from 'styled-components'
import Rheostat from 'rheostat'
import { switchTransition } from '../../utils/transitions'

// helpers
import { getHandleBgColor, getBarColor } from './helpers'

const StyledSlider = styled(Rheostat)`
  width: 100%;
  height: 100%;

  .rheostat-background {
    background-color: ${({ theme }) => theme.color.miscLight};
    height: 6px;
    border-radius: 3px;
    width: 100%;
    z-index: 2;
  }
`

const StyledProgressBar = styled.span`
  background-color: ${({ theme }) => theme.color.primaryDarker};
  display: flex;
  margin-left: 1px;
  position: absolute;
  height: 6px;
  top: 0;
  z-index: 4;
`

const StyledHandle = styled.span`
  ${switchTransition}
  background-color: ${getHandleBgColor};
  transition-property: background-color, box-shadow;
  border-radius: 50%;
  cursor: pointer;
  height: 18px;
  width: 18px;
  top: -6px;
  z-index: 5;
  transform: translateX(-50%);

    &:hover, &:active {
      box-shadow: 0px 2px 4px rgba(98, 112, 139, 0.6);
    }
`

const StyledPitComponent = styled.span`
  background-color: ${getBarColor};
  font-size: 0;
  top: 0;
  z-index: 1;
  transform: translateY(-100%);
  width: ${({ pitWidth }) => (pitWidth ? `calc(${pitWidth}% + 1px)` : '0px')};
`

export {
  StyledSlider,
  StyledProgressBar,
  StyledHandle,
  StyledPitComponent,
}
