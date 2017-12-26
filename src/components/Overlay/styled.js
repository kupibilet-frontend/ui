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
  animation-name: ${fade};
  animation-duration: 0.35s;
`

export const OverlayContentWrap = styled.div`
  height: 100%;
  width: 100%;
  opacity: 1;
  padding-top: 0;
  animation-name: ${slide};
  animation-duration: 0.35s;
  text-align: center;
  &:before{
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  ${mq.handheld`
    height: 100%;
    ${(props) => (props.isOnBottom ? '' : 'background: white;')}
  `}
`

export const ClosingButton = styled.span`
  position: absolute;
  top: 5px;
  right: 4px;

  &:hover .closing-icon {
    fill: white;
  }

  ${mq.handheld`
    display: none;
  `}
`

export const OverlayContent = styled.div`
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  text-align: left;
  ${mq.handheld`
    width: 100%;
    ${(props) => (props.isOnBottom ? '' : 'min-height: 100%;')}
    vertical-align: ${(props) => (props.isOnBottom ? 'bottom' : 'top')};
  `}
`
export const OverlayClosePanel = styled.div`
  display: none;

  .responsive & {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 20px;
    color: ${({ theme }) => theme.color.primaryDarkest};
    font-size: 16px;
    line-height: 20px;

    &:hover {
      color: ${({ theme }) => theme.color.primaryDarker};
    }

    &:hover {
      .closing-icon, .arrow-icon {
        fill: ${({ theme }) => theme.color.primaryDarker};
      }
    }

    ${mq.desktop`
      display: none;
    `}
  }
`

export const OverlayClosePanelIcon = styled.span`
  margin-left: auto;
`

export const BackLink = styled.span`
  display: flex;
  align-items: center;

  & .arrow-icon {
    transform: rotate(90deg);
  }
`
