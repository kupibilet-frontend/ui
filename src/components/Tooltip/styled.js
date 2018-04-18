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
const PlacementWrapper = styled.div`
  position: absolute;
  ${({ placement }) => {
    if (placement === 'left') {
      return 'right: 0;'
    } else if (placement === 'right') {
      return 'left: 0;'
    } else if (placement === 'top') {
      return 'transform: translateY(-100%);'
    }
  }};
`

const TooltipDot = styled.div`
  width: 7px;
  height: 7px;
  margin: 2px;
  border-radius: 50%;
  background: ${props => getBackgroundColor(props)};
`

const TooltipBackground = styled.div`
  min-height: 24px;
  max-height: 24px;
  min-width: 90px;
  white-space: nowrap;
  background: ${props => getBackgroundColor(props)};
  color: ${({ theme }) => theme.color.background};
  border-radius: 100px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TooltipContainer = styled.div`
  height: 0;
  position: absolute;
  opacity: 0;
  animation: 0.15s ease-out forwards ${arrival};
  ${props => {
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
  }} z-index: 100;
`

const RelativeWrapper = styled.div`
  min-width: ${({ width }) => `${width}px`};
  min-height: ${({ height }) => `${height}px`};
  ${({ placement, width }) => {
    if (placement === 'top' || placement === 'bottom') {
      return `max-width: ${width}px;`
    }
  }} position: relative;
  display: flex;
  flex-direction: ${({ placement }) => `
    ${flexDirections[placement]}
    `};
  justify-content: flex-start;
  align-items: center;
`

export {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  PlacementWrapper,
}
