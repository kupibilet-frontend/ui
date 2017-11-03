import styled, { keyframes } from 'styled-components'
import { borderRadiusHalf, borderRadiusLarge } from 'utils/borderRadius'
import { shadowSmall } from 'utils/shadows'
import mq from 'utils/media-queries'
import H4 from 'components/Typography/H4'
import Icon from 'components/Icon'
import Button from 'components/Button'
import TextLarge from 'components/Typography/TextLarge'
import Link from 'components/Link'

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

export const Overlay = styled.div`
  animation-name: ${slide};
  animation-duration: 0.35s;

  ${mq.desktop`
    align-items: center;
    background: rgba(34, 34, 34, 0.85);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    padding: 24px 0;
    position: fixed;
    top: 0;
    width: 100%;
  `}
`

export const FullScreenContent = styled.div`
  ${borderRadiusLarge.all}
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 18px;
  position: relative;
  z-index: 11;
  animation-name: ${fade};
  animation-duration: 0.35s;
  width: ${(props) => (props.isNarrow ? '588' : '882')}px;

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
  max-width: 588px;
  min-height: 60px;
  justify-content: space-between;
  padding: 18px 0;

  ${mq.handheld`
    max-width: 450px;

    ${H4} {
      font-size: 24px;
    }
  `}

  ${mq.mobile`
    max-width: 222px;
  `}
`

export const Content = styled.div`
  display: block;
`

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const getHoverColor = (props) => {
  if (props.isNarrow) {
    return ({ theme }) => theme.color.miscDark
  } return ({ theme }) => theme.color.textLightest
}

export const CloseButton = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: ${(props) => (props.isNarrow ? 'absolute' : 'fixed')};
  right: ${(props) => (props.isNarrow ? '0' : '18')}px;
  top: ${(props) => (props.isNarrow ? '0' : '15')}px;
  height: 30px;
  width: 30px;

  &:hover ${StyledIcon} {
    fill: ${getHoverColor}
  }

  ${mq.handheld`
    background: ${({ theme }) => theme.color.miscLightest};
    ${borderRadiusHalf.all}
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

export const SubmitButton = styled(Button)`
  ${mq.handheld`
    margin: 0 24px 0 0;
    max-height: 42px;
  `}

  ${mq.mobile`
    margin-top: 18px;
  `}
`


export const CancelButton = TextLarge.withComponent(Link).extend`
  align-self: center;
  margin: 0 0 0 24px;
  ${(props) => (props.isNarrow && `
    font-size: 16px;
    margin-left: 18px;
  `)}

  ${mq.handheld`
    font-size: 18px;
    margin: 12px 0 18px;
  `}
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  margin-top: 18px;
  margin-bottom: 30px;
  padding-top: 30px;

  ${mq.handheld`
    margin-bottom: 24px;
    padding-top: 24px;
  `}

  ${mq.mobile`
    flex-direction: column;
    margin-bottom: 0;
  `}
`
