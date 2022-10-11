import styled, { keyframes } from 'styled-components'
import { borderRadiusLarge } from 'utils/borderRadius'
import { queries2021 } from 'utils/media-queries'

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
  isNativeView?: boolean,
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

  @media ${queries2021.isDesktop} {
    animation-name: ${fade};
    animation-duration: 0.35s;
  }

  @media ${queries2021.isMobile} {
    ${({ isOnBottom }) => (isOnBottom ? '' : 'background: white;')}
    ${({ isNativeView }) => (isNativeView ? '' : 'background: white;')}
  }
`

export const OverlayContentWrap = styled.div<TProps>`
  height: 100%;
  width: 100%;
  opacity: 1;
  padding-top: 0;
  text-align: center;

  @media ${queries2021.isDesktop} {
    animation-name: ${slide};
    animation-duration: 0.35s;
    padding: 24px 0;
  }

  @media ${queries2021.isMobile} {
    height: 100%;
    ${({ isOnBottom }) => (isOnBottom ? '' : 'background: white;')}

    ${({ isNativeView }) => isNativeView && `
      position: fixed;
      bottom: 0;
      height: 95%;
      overflow: auto;
      ${borderRadiusLarge.top}
    `}
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

  @media ${queries2021.isMobile} {
    width: 100%;
    ${({ isOnBottom }) => (isOnBottom ? '' : 'min-height: 100%;')}
    vertical-align: ${({ isOnBottom }) => (isOnBottom ? 'bottom' : 'top')};
  }
`
