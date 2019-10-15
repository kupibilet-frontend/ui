import styled, { keyframes } from 'styled-components'
import Text from 'components/Typography/Text'

const TOOLTIP_PADDING = 18

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

const PositionWrapper = styled.div`
  position: relative;
`
const PlacementWrapper = styled.div`
  position: absolute;
  ${({ placement }) => {
    if (placement === 'left') {
      return `
        right: 0;
        transform: translateY(-50%);
      `
    } else if (placement === 'right') {
      return `
        left: 0;
        transform: translateY(-50%);
      `
    } else if (placement === 'top') {
      return 'transform: translateY(-100%);'
    }
  }
}
`

const getPointerPosition = (placement, theme) => {
  const color = theme.color.textDarker

  switch (placement) {
    case 'bottom':
      return `
        margin-top: 3px;
        border-left: 7px solid #0000;
        border-right: 7px solid #0000;
        border-bottom: 7px solid ${color};
      `
    case 'left':
      return `
        margin-right: 3px;
        border-top: 7px solid #0000;
        border-bottom: 7px solid #0000;
        border-left: 7px solid ${color};
      `
    case 'right':
      return `
        margin-left: 3px;
        border-top: 7px solid #0000;
        border-bottom: 7px solid #0000;
        border-right: 7px solid ${color};
      `
    default:
      return `
        margin-bottom: 3px;
        border-left: 7px solid #0000;
        border-right: 7px solid #0000;
        border-top: 7px solid ${color};
      `
  }
}

const TooltipPointer = styled.div`
  width: 0px;
  height: 0px;
  ${({ placement, theme }) => getPointerPosition(placement, theme)}
`

const alignValues = {
  left: `
    align-self: flex-end;
    margin-right: -${TOOLTIP_PADDING}px;
    `,
  right: `
    align-self: flex-start;
    margin-left: -${TOOLTIP_PADDING}px;
  `,
}

const TooltipBackground = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  
  padding: 12px ${TOOLTIP_PADDING}px;
  ${({ align }) => (align ? alignValues[align] : '')};
  
  background: ${({ theme }) => theme.color.textDarker};
  color: ${({ theme }) => theme.color.background};
  
  border-radius: 4px;
  white-space: nowrap;
`

const TooltipContainer = styled.div`
  height: 0;
  position: absolute;
  opacity: 0;
  animation: 0.15s ease-out forwards ${arrival};
  ${(props) => {
    switch (props.placement) {
      case 'bottom':
        return `
          top: ${props.top + props.height}px;
          left: ${props.left}px;
        `
      case 'top':
      default:
        return `
          top: ${props.top}px;
          left: ${props.left}px;
        `
    }
  }};
  z-index: 100;
`


const RelativeWrapper = styled.div`
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
  justify-content: flex-end;
  align-items: center;
`

const HeaderText = styled(Text)`
  font-weight: 600;
`

const Header = styled.div`
  margin-bottom: 3px;
`

export {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipPointer,
  PositionWrapper,
  PlacementWrapper,
  HeaderText,
  Header,
}
