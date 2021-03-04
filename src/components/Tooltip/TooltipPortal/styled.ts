import styled, { keyframes, DefaultTheme } from 'styled-components'
import { transparentize } from 'polished'
import { TPlacement, TCoordinates } from '../types'

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

interface TTooltipCommonProps {
  error: boolean,
  success: boolean,
  theme: DefaultTheme,
}

const getBackgroundColor = ({ theme, error, success }: TTooltipCommonProps): string => {
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

interface TPlacementWrapper {
  placement: TPlacement,
}

const PlacementWrapper = styled.div<TPlacementWrapper>`
  position: absolute;
  ${({ placement }) => {
    if (placement === 'left') {
      return 'right: 0;'
    } else if (placement === 'right') {
      return 'left: 0;'
    } else if (placement === 'top') {
      return 'transform: translateY(-100%);'
    }
  }
}
`

const TooltipDot = styled.div<TTooltipProps>`
  width: 7px;
  height: 7px;
  margin: 2px;
  border-radius: 50%;
  background: ${(props) => getBackgroundColor(props)};
`

const TooltipBackground = styled.div<TTooltipProps>`
  min-height: 24px;
  max-height: 24px;
  min-width: 90px;
  white-space: nowrap;
  background: ${(props) => getBackgroundColor(props)};
  color: ${({ theme }) => theme.color.background};
  border-radius: 100px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`
interface TTooltipContainer extends TCoordinates {
  placement: TPlacement,
}

const TooltipContainer = styled.div<TTooltipContainer>`
  height: 0;
  position: absolute;
  opacity: 0;
  animation: 0.15s ease-out forwards ${arrival};
  ${({ placement, top, left, width, height }) => {
    switch (placement) {
      case 'right':
        return `
          top: ${top}px;
          left: ${left + width}px;
        `
      case 'bottom':
        return `
          top: ${top + height}px;
          left: ${left}px;
        `
      case 'top':
        return `
          top: ${top}px;
          left: ${left}px;
        `
      default:
        return `
          top: ${top}px;
          left: ${left}px;
        `
    }
  }
}
z-index: 100;
  `

interface TRelativeWrapper {
  placement: TPlacement,
  width: number,
  height: number
}

const RelativeWrapper = styled.div<TRelativeWrapper>`
  min-width: ${({ width }) => `${width}px`};
  min-height: ${({ height }) => `${height}px`};
  ${({ placement, width }) => {
    if (placement === 'top' || placement === 'bottom') {
      return `max-width: ${width}px;`
    }
  }}

  position: relative;
  display: flex;
  flex-direction: ${({ placement }) => `${flexDirections[placement]}`};
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
