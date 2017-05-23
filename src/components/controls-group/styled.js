import styled from 'styled-components'
import { transparentize } from 'polished'
import Icon from '../icons'

const fadeGradient = ({ theme }) => (
  /* eslint-disable prefer-template */
  'linear-gradient(' +
    '180deg, ' +
    transparentize(1, theme.color.background) + ' 0%, ' +
    theme.color.background + ' 15%, ' +
    theme.color.background + ' 85%, ' +
    transparentize(1, theme.color.background) + ' 100%' +
  ')'
)

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

  .icon-inherit-color {
    fill: ${({ theme }) => theme.color.miscDark}
  }

  &:hover .icon-inherit-color {
    fill: ${({ theme }) => theme.color.primary}
  }
`

export const SwapIcon = styled(Icon)`
  box-sizing: content-box;
  width: 15px;
  padding: 5px 0;

  position: absolute;
  left: -7.5px;
  top: 50%;
  margin-top: -12.5px;
  z-index: 3;
  transfrom: translateZ(0);

  background: ${(props) => fadeGradient(props)};

  opacity: 0;
`
