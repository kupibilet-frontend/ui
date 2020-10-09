import styled from 'styled-components'
import { borderRadiusLarge } from 'utils/borderRadius'
import mq from 'utils/media-queries'
import Button from 'components/Button'
import H4 from 'components/Typography/H4'
import Icon from 'components/Icon'
import { OVERLAY_Z_INDEX } from 'components/Overlay'
import { isCompact, isSetSize } from './utils'

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
  z-index: ${OVERLAY_Z_INDEX + 1};
  width: ${(props) => getWidth(props.size)}px;

   ${mq.tablet`
      ${({ size }) => !isSetSize(size) && `
        width: 80vw;
      `}
   `}

  ${mq.mobile`
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
  padding: 42px 42px ${(props) => (isCompact(props.size) ? '18' : '30')}px;
  ${H4} {
    font-weight: 700;
  }

  ${mq.desktop`
    max-width: 672px;
  `}

  ${mq.tablet`
    padding: 42px 102px 24px 42px;
  `}

  ${mq.mobile`
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 30px 30px 18px 30px;
  `}
`

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  margin-bottom: 18px;
  padding: 0 42px;

  ${mq.mobile`
    padding: 0 30px;
  `}
`

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`

export const CloseIcon = styled(Button)`
  background: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.miscLightest : 'none')};
  position: ${(props) => (isCompact(props.modalSize) ? 'absolute' : 'fixed')};
  right: ${(props) => (isCompact(props.modalSize) ? '12' : '4')}px;
  top: ${(props) => (isCompact(props.modalSize) ? '12' : '5')}px;

  &:hover {
    background: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.miscLighter : 'none')};
    box-shadow: none;
  }

  &:focus {
    background: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.miscLightest : 'none')};
    box-shadow: none;
  }

  ${mq.handheld`
    background: ${({ theme }) => theme.color.miscLightest}; 
    margin-left: 32px;
    position: absolute;
    right: 12px;
    top: 12px;
    z-index: 2;

    &:hover {
      box-shadow: none;
    }

    ${StyledIcon} {
      fill: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.miscDarkest : theme.color.primaryDarkest)};
    }
  `}
`

export const Footer = styled.div`
  display: flex;
  padding: ${(props) => (isCompact(props.size) ? '18' : '42')}px 42px;

  ${mq.tablet`
    padding: 42px;
  `}

  ${mq.mobile`
    align-items: center;
    flex-direction: column;
    padding: 30px;
  `}
`

export const CloseButton = styled(Button)`
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
