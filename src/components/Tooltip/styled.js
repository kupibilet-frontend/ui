import styled from 'styled-components'

const TooltipBackground = styled.div`
  min-height: 24px;
  min-width: 90px;
  background: rgba(51, 51, 51, 0.97);
  color: ${({ theme }) => theme.color.background};
  border-radius: 100px;
  position: absolute;
  ${({ orientation }) => {
    switch (orientation) {
      case 'top':
        return 'bottom: 0;'
      case 'left':
        return 'right: 0;'
      case 'right':
        return 'left: 0;'
      case 'bottom':
        return 'top: 0;'
    }
  }}
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TooltipContainer = styled.div`
  height: 0;
  z-index: 20;
  position: absolute;
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
      default:
        return `
          top: ${props.top}px;
          left: ${props.left}px;
        `
    }
  }
  }`


const RelativeWrapper = styled.div`
  position: relative;
`

export {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
}
