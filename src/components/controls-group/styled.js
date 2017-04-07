import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;

  &:hover .controls-group__swap {
    opacity: 1;
    transition: .001s linear .1s;
  }
`

export const SwapContainer = styled.div`
  position: relative;
  align-self: stretch;
  width: 0;

  cursor: pointer;
`

export const SwapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: content-box;
  width: 15px;
  padding: 5px;

  position: absolute;
  left: -12.5px;
  top: 50%;
  margin-top: -12.5px;
  z-index: 3;
  transfrom: translateZ(0);

  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 15%, #FFFFFF 85%, rgba(255,255,255,0) 100%);

  opacity: 0;
`
