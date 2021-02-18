import styled, { keyframes } from 'styled-components'
import { queries } from 'utils/media-queries'

export const OVERLAY_Z_INDEX = 10

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

interface TProps {
  isOnBottom: boolean,
}

export const Wrapper = styled.div<TProps>`
  background: rgba(34, 34, 34, 0.85);
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  z-index: ${OVERLAY_Z_INDEX};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;

  @media ${queries.isDesktop} {
    animation-name: ${fade};
    animation-duration: 0.35s;
  }

  @media ${queries.isMobile} {
    ${({ isOnBottom }) => (isOnBottom ? '' : 'background: white;')}
  }
`

export const OverlayContentWrap = styled.div<TProps>`
  height: 100%;
  width: 100%;
  opacity: 1;
  padding-top: 0;
  text-align: center;

  @media ${queries.isDesktop} {
    animation-name: ${slide};
    animation-duration: 0.35s;
    padding: 24px 0;
  }

  @media ${queries.isMobile} {
    height: 100%;
    ${({ isOnBottom }) => (isOnBottom ? '' : 'background: white;')}
  }

  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

`

export const OverlayContent = styled.div<TProps>`
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  text-align: left;
  cursor: auto;

  @media ${queries.isMobile} {
    width: 100%;
    ${({ isOnBottom }) => (isOnBottom ? '' : 'min-height: 100%;')}
    vertical-align: ${({ isOnBottom }) => (isOnBottom ? 'bottom' : 'top')};
  }
`
