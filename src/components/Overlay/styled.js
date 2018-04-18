import styled, { keyframes } from 'styled-components'
import mq from 'utils/media-queries'

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const slide = keyframes`
  0% {
    transform: translate3d(0, 5%, 0);
    opacity: 0;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`

export const Wrapper = styled.div`
  background: rgba(34, 34, 34, 0.85);
  cursor: pointer;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  ${mq.desktop`
    animation-name: ${fade};
    animation-duration: 0.35s;
  `} ${mq.handheld`
    ${props => (props.isOnBottom ? '' : 'background: white;')}
  `};
`

export const OverlayContentWrap = styled.div`
  height: 100%;
  width: 100%;
  opacity: 1;
  padding-top: 0;
  text-align: center;
  ${mq.desktop`
    animation-name: ${slide};
    animation-duration: 0.35s;
  `} ${mq.handheld`
    height: 100%;
    ${props => (props.isOnBottom ? '' : 'background: white;')}
  `} &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`

export const OverlayContent = styled.div`
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  text-align: left;
  cursor: auto;
  ${mq.handheld`
    width: 100%;
    ${props => (props.isOnBottom ? '' : 'min-height: 100%;')}
    vertical-align: ${props => (props.isOnBottom ? 'bottom' : 'top')};
  `};
`
