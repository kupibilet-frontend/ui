import styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'
import Text from 'components/Typography/Text'

const dotShift = 7

const popoverSizes = {
  normal: '360px',
  large: '480px',
}

const flexDirections = {
  bottom: 'row',
  top: 'row',
  left: 'row-reverse',
  right: 'row',
}

const subPositions = {
  top: 'bottom: 0;',
  bottom: 'top: 0;',
  right: 'left: 0;',
  left: 'right: 0;',
}

const dotMargins = {
  top: '2px 12px;',
  bottom: '2px 12px;',
  left: '12px 2px;',
  right: '12px 2px;',
}

const arrival = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const getMainCoords = ({ placement, top, left, width, height }) => {
  switch (placement) {
    case 'right':
      return {
        top,
        left: left + width,
      }
    case 'bottom':
      return {
        top: top + height,
        left,
      }
    case 'top':
      return {
        top,
        left,
      }
    default:
      return {
        top,
        left,
      }
  }
}
const getCoordinates = props => {
  const coords = getMainCoords(props)
  if (props.align) {
    const { align, width, height, top, left } = props
    if (align === 'top') {
      coords.top = top + height
    } else {
      coords.left = left + width
    }
  }
  if (props.dotCentering) {
    const { placement } = props
    if (placement === 'left' || placement === 'right') {
      coords.top += props.align && props.align === 'top' ? dotShift : -dotShift
    } else {
      coords.left +=
        props.align && props.align === 'left' ? dotShift : -dotShift
    }
  }
  return coords
}

const getFlexDirection = (placement, align) => {
  if (placement === 'top' || placement === 'bottom') {
    return align === 'left' ? 'row-reverse' : flexDirections[placement]
  }
  return flexDirections[placement]
}

const getBackgroundColor = ({ theme }) => {
  return transparentize(0.03, theme.color.textDarker)
}

const PositionWrapper = styled.div`
  position: relative;
`
const PlacementWrapper = styled.div`
  position: absolute;
  ${({ placement }) => subPositions[placement]} ${({ align }) => {
    if (align) {
      return subPositions[align]
    }
  }};
`

const PopoverDot = styled.div`
  order: ${({ placement }) => {
    return placement === 'top' ? 3 : 1
  }};
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  margin: ${({ placement }) => dotMargins[placement]}
  border-radius: 50%;
  background: ${props => getBackgroundColor(props)};
`

const PopoverBackground = styled.div`
  order: 2;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 240px;
  max-width: ${({ size }) => popoverSizes[size]};
  background: ${props => getBackgroundColor(props)};
  color: ${({ theme }) => theme.color.background};
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`

const HeaderText = styled(Text)`
  font-weight: 600;
`

const Header = styled.div`
  margin-bottom: 3px;
`

const PopoverContainer = styled.div`
  height: 0;
  position: absolute;
  opacity: 0;
  animation: 0.15s ease-out forwards ${arrival};
  ${props => {
    const coords = getCoordinates(props)
    return `
      top: ${coords.top}px;
      left: ${coords.left}px;
    `
  }} z-index: 100;
`

const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ placement, align }) =>
    getFlexDirection(placement, align)};
  flex-wrap: ${({ placement }) => {
    if (placement === 'top' || placement === 'bottom') return 'wrap'
  }};
  justify-content: flex-start;
  ${({ align }) => {
    if (align) {
      return 'align-items: flex-end;'
    }
  }};
`

export {
  PopoverBackground,
  PopoverContainer,
  RelativeWrapper,
  PopoverDot,
  PositionWrapper,
  PlacementWrapper,
  Header,
  HeaderText,
}
