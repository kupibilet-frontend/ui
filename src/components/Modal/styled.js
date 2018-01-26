import styled from 'styled-components'
import { borderRadiusCircle, borderRadiusLarge } from 'utils/borderRadius'
import { shadowSmall } from 'utils/shadows'
import mq from 'utils/media-queries'
import H4 from 'components/Typography/H4'
import Icon from 'components/Icon'

export const ModalContent = styled.div`
  ${borderRadiusLarge.all}
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 42px;
  position: relative;
  z-index: 11;

  width: ${(props) => (props.isCompact ? '588' : '882')}px;

  ${mq.desktop`
    margin: 24px 0;
  `}

  ${mq.handheld`
    padding: 0 18px;
    border-radius: 0;
    width: 100%;
  `}
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  min-height: 60px;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: ${(props) => (props.isCompact ? '18' : '30')}px;
  ${H4} {
    font-weight: 700;
  }

  ${mq.desktop`
    max-width: 588px;
  `}

  ${mq.tablet`
    padding: 24px 102px 24px 0;
  `}

  ${mq.mobile`
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 18px 62px 18px 0;

  `}
`

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  margin-bottom: 30px;
  ${mq.tablet`
    margin-bottom: 24px;
  `}
  ${mq.mobile`
    margin-bottom: 18px;
  `}
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
    position: absolute;
    right: 18px;
    top: 15px;
    ${shadowSmall}
    z-index: 2;
  `}
`

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  padding: ${(props) => (props.isCompact ? '18' : '30')}px 0;

  ${mq.handheld`
    padding: 24px 0;
  `}

  ${mq.mobile`
    flex-direction: column;
    padding: 18px 0;
  `}
`
