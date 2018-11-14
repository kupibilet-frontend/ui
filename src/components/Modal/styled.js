import styled from 'styled-components'
import { borderRadiusLarge } from 'utils/borderRadius'
import mq from 'utils/media-queries'
import Button from 'components/Button'
import H4 from 'components/Typography/H4'
import Icon from 'components/Icon'
import isCompact from './utils'

const getWidth = (size) => {
  switch (size) {
    case 'thin':
      return '378'

    case 'compact':
      return '588'

    case 'wide':
      return '882'

    default:
      return '882'
  }
}

export const ModalContent = styled.div`
  ${borderRadiusLarge.all}
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 11;
  width: ${(props) => getWidth(props.size)}px;

  ${mq.handheld`
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
  padding: 30px 42px ${(props) => (isCompact(props.size) ? '18' : '30')}px;
  ${H4} {
    font-weight: 700;
  }

  ${mq.desktop`
    box-sizing: content-box;
    max-width: 588px;
  `}

  ${mq.tablet`
    padding: 24px 102px 24px 18px;
  `}

  ${mq.mobile`
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 18px 62px 18px 18px;
  `}
`

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  margin-bottom: 30px;
  padding: 0 42px;

  ${mq.handheld`
    padding: 0 18px;
  `}

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

export const CloseButton = styled(Button)`
  background: none;
  position: ${(props) => (isCompact(props.modalSize) ? 'absolute' : 'fixed')};
  right: ${(props) => (isCompact(props.modalSize) ? '0' : '4')}px;
  top: ${(props) => (isCompact(props.modalSize) ? '0' : '5')}px;

  ${mq.desktop`
    &:hover {
      background: none;
      box-shadow: none;

      ${StyledIcon} {
        fill: ${(props) => (isCompact(props.modalSize) ? 'miscLight' : 'white')};
      }
    }
  `}
  ${mq.handheld`
    background: ${({ theme }) => theme.color.miscLightest};
    margin-left: 32px;
    position: absolute;
    right: 18px;
    top: 18px;
    z-index: 2;

    &:hover {
      box-shadow: none;
    }
  `}
`

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  padding: ${(props) => (isCompact(props.size) ? '18' : '30')}px 42px;

  ${mq.handheld`
    align-items: center;
    padding: 24px 18px;
  `}

  ${mq.mobile`
    flex-direction: column;
    padding: 18px;
  `}
`

export const CancelButton = styled(Button)`
  ${mq.mobile`
    width: 100%;
    margin-top: 12px;
  `}
`

export const SubmitButton = styled(Button)`
  margin-right: 24px;

  ${mq.mobile`
    width: 100%;
    margin-right: 0;
  `}
`
