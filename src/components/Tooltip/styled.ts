import styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'
import { getPopoverArrow } from 'utils/getPopoverArrow'
import { TooltipIconContainerProps, TTooltipCommonProps } from './types'

const arrival = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const getBackgroundColor = ({ theme, error, success }: TTooltipCommonProps): string => {
  if (success) {
    return transparentize(0.03, theme.color.success700)
  } else if (error) {
    return transparentize(0.03, theme.color.error700)
  }

  return theme.color.colorBgContrastNormal
}

const getColoredIcon = (props: TTooltipCommonProps) => {
  const color = getBackgroundColor(props)
  return getPopoverArrow(color)
}

const TooltipIconContainer = styled.div<TooltipIconContainerProps>`
  flex-shrink: 0;
  animation: 0.15s ease-out forwards ${arrival};
  ${({ side }) => {
    switch (side) {
      case 'top':
        return 'bottom: -8px;'
      case 'right':
        return 'left: -8px;'
      case 'left':
        return 'right: -8px;'
      case 'bottom':
      default:
        return 'top: -8px;'
    }
  }}
`

const TooltipIcon = styled.div<TTooltipCommonProps>`
  background-image: ${getColoredIcon};
  width: 20px;
  height: 8px;

  ${({ side }) => {
    switch (side) {
      case 'top':
        return 'transform: rotate(180deg);'
      case 'right':
        return 'transform: rotate(-90deg);'
      case 'left':
        return 'transform: rotate(90deg);'
      case 'bottom':
      default:
        return ''
    }
  }}
`

const TooltipBackground = styled.div<TTooltipCommonProps>`
  min-height: 24px;
  max-height: 24px;
  min-width: 90px;
  white-space: nowrap;
  background: ${getBackgroundColor};
  color: ${({ theme }) => theme.color.colorTextContrastDefault};
  border-radius: 100px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 0.15s ease-out forwards ${arrival};
`

export {
  TooltipBackground,
  TooltipIconContainer,
  TooltipIcon,
}
