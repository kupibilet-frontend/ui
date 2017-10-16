import styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'
import Text from 'components/Typography/Text'

const flexDirections = {
  top: 'column-reverse',
  bottom: 'column',
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

const getSubCoordinates = ({ subOrientation, width, height, top, left }) => {
  if (subOrientation === 'top') {
    return `top: ${top + height}px;`
  }
  return `left: ${left + width}px;`
}

const getBackgroundColor = ({ theme }) => {
  return transparentize(0.03, theme.color.textDarker)
}

const PositionWrapper = styled.div`
  position: relative;
`
const OrientationWrapper = styled.div`
  position: absolute;
  ${({ orientation }) => subPositions[orientation]
}
${({ subOrientation }) => {
    if (subOrientation) {
      return subPositions[subOrientation]
    }
  }
}
`

const PopoverDot = styled.div`
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  margin: ${({ orientation }) => dotMargins[orientation]}
  border-radius: 50%;
  background: ${(props) => getBackgroundColor(props)};
`

const PopoverBackground = styled.div`
  flex-shrink: 0;
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
    switch (props.orientation) {
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
    if (props.subOrientation) {
      return getSubCoordinates(props)
    }
  }
}
  `


const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${ ({ orientation }) => flexDirections[orientation]
};
  justify-content: flex-start;
  ${({ subOrientation }) => {
    if (subOrientation) {
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
  OrientationWrapper,
  Header,
  HeaderText,
}
