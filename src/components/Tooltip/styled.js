import styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'

const flexDirections = {
  top: 'column-reverse',
  bottom: 'column',
  left: 'row-reverse',
  right: 'row',
}

const arrival = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const getBackgroundColor = ({ theme, error, success }) => {
  if (success) {
    return transparentize(0.03, theme.color.success)
  } else if (error) {
    return transparentize(0.03, theme.color.fail)
  }
  return transparentize(0.03, theme.color.textDarker)
}

const PositionWrapper = styled.div`
  position: relative;
`
const OrientationWrapper = styled.div`
  position: absolute;
  ${({ orientation }) => {
    if (orientation === 'left') {
      return 'right: 0;'
    } else if (orientation === 'right') {
      return 'left: 0;'
    }
  }
}
`

const TooltipDot = styled.div`
  width: 7px;
  height: 7px;
  margin: 2px;
  border-radius: 100%;
  background: ${(props) => getBackgroundColor(props)};
`

const TooltipBackground = styled.div`
  min-height: 24px;
  max-height: 24px;
  min-width: 90px;
  white-space: nowrap;
  background: ${(props) => getBackgroundColor(props)};
  color: ${({ theme }) => theme.color.background};
  border-radius: 100px;
  padding: 2px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TooltipContainer = styled.div`
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
          top: ${props.top - props.height - 6}px;
          left: ${props.left}px;
        `
      default:
        return `
          top: ${props.top}px;
          left: ${props.left}px;
        `
    }
  }
  }`


const RelativeWrapper = styled.div`
  min-width: ${({ width }) => `${width}px`};
  min-height: ${({ height }) => `${height}px`};
  ${ ({ orientation, width }) => {
    if (orientation === 'top' || orientation === 'bottom') {
      return `max-width: ${width}px;`
    }
  }
}
  position: relative;
  display: flex;
  flex-direction: ${ ({ orientation }) => `
    ${flexDirections[orientation]}
    `
};
  justify-content: ${({ orientation }) => {
    if (orientation === 'left') {
      return 'flex-start'
    } else if (orientation === 'right') {
      return 'flex-start'
    }
    return 'flex-start'
  }
};
  align-items: center;
  `

export {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  OrientationWrapper,
}
