import styled from 'styled-components'
import Rheostat from 'rheostat'
import { switchTransition } from '../../utils/transitions'

const StyledSlider = styled(Rheostat)`
  width: 100%;

  .rheostat-background {
    background-color: ${({ theme }) => theme.color.miscLight};
    height: 6px;
    border-radius: 3px;
    width: 100%;
  }
  `

const StyledProgressBar = styled.span`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  display: flex;
  margin-left: 1px;
  position: absolute;
  height: 6px;
  top: 0;
  z-index: 4;
`
//     transform: translateX(-50%);
const StyledHandle = styled.span`
  ${switchTransition}
  transition-property: background-color, box-shadow;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  cursor: pointer;
  height: 18px;
  width: 18px;
  top: -6px;
  z-index: 5;

   &:hover, &:active {
     background-color: ${({ theme }) => theme.color.primary};
     box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
   }
  `

export {
  StyledSlider,
  StyledProgressBar,
  StyledHandle,
}
