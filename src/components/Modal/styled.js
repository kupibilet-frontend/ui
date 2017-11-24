import styled, { keyframes } from 'styled-components'
import { borderRadiusCircle, borderRadiusLarge } from 'utils/borderRadius'
import { shadowSmall } from 'utils/shadows'
import mq from 'utils/media-queries'
import H3 from 'components/Typography/H3'
import Icon from 'components/Icon'

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

export const ModalContent = styled.div`
  ${borderRadiusLarge.all}
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 18px;
  position: relative;
  z-index: 11;
  animation-name: ${slide};
  animation-duration: 0.35s;
  width: ${(props) => (props.isCompact ? '588' : '882')}px;

  ${mq.handheld`
    border-radius: 0;
    position: fixed;
    overflow: scroll;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  `}
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  min-height: 60px;
  justify-content: space-between;
  padding: 18px 0;

  ${mq.desktop`
    max-width: 588px;
  `}

  ${mq.handheld`
    padding-right: 102px;
  `}

  ${mq.mobile`
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 60px;

    ${H3} {
      font-size: 20px;
    }
  `}
`

export const Content = styled.div`
  display: block;
  flex-grow: 1;
`

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`

export const CloseButton = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: ${(props) => (props.isCompact ? 'absolute' : 'fixed')};
  right: ${(props) => (props.isCompact ? '0' : '4')}px;
  top: ${(props) => (props.isCompact ? '0' : '5')}px;
  height: 30px;
  width: 30px;

  ${mq.desktop`
    &:hover ${StyledIcon} {
      fill: ${(props) => (props.isCompact ? 'miscLight' : 'white')};
    }
  `}

  ${mq.handheld`
    background: ${({ theme }) => theme.color.miscLightest};
    ${borderRadiusCircle.all}
    margin-left: 32px;
    position: fixed;
    right: 18px;
    top: 15px;

    &:hover {
      ${shadowSmall}
    }
  `}

  ${mq.handheld`
    margin-left: 72px;
  `}
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  margin-top: 18px;
  margin-bottom: 30px;
  padding-top: 30px;

  ${mq.handheld`
    margin: 24px 0 0 0;
    min-height: 90px;
    padding: 24px 0;
  `}

  ${mq.mobile`
    flex-direction: column;
    min-height: 114px;
    margin-top: 18px;
    padding: 18px 0;
  `}
`
