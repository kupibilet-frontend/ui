import styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'
import Text from 'components/Typography/Text'

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

const getSubCoordinates = ({ align, width, height, top, left }) => {
  if (align === 'top') {
    return `top: ${top + height}px;`
  }
  return `left: ${left + width}px;`
}

const getFlexDirection = (placement, align) => {
  if (placement === 'top' || placement === 'bottom') {
    return align === 'left'
      ? 'row-reverse'
      : flexDirections[placement]
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
  ${({ placement }) => subPositions[placement]
}
${({ align }) => {
    if (align) {
      return subPositions[align]
    }
  }
}
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
  background: ${(props) => getBackgroundColor(props)};
`

const PopoverBackground = styled.div`
  order: 2;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 240px;
  max-width: 360px;
  background: ${(props) => getBackgroundColor(props)};
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
  ${(props) => {
    switch (props.placement) {
      case 'right':
        return `
          top: ${props.top}px;
          left: ${props.left + props.width}px;
        `
      case 'bottom':
        return `
          top: ${props.top + props.height}px;
          left: ${props.left}px;
        `
      case 'top':
        return `
          top: ${props.top}px;
          left: ${props.left}px;
        `
      default:
        return `
          top: ${props.top}px;
          left: ${props.left}px;
        `
    }
  }
}
${
  (props) => {
    if (props.align) {
      return getSubCoordinates(props)
    }
  }
}
  `


const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${ ({ placement, align }) =>
    getFlexDirection(placement, align)
};
flex-wrap: ${({ placement }) => {
    if (placement === 'top' || placement === 'bottom') return 'wrap'
  }
};
  justify-content: flex-start;
  ${({ align }) => {
    if (align) {
      return 'align-items: flex-end;'
    }
  }
}
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
