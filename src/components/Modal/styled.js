import styled from 'styled-components'
import { borderRadiusCircle, borderRadiusLarge } from 'utils/borderRadius'
import mq from 'utils/media-queries'
import H4 from 'components/Typography/H4'
import Icon from 'components/Icon'
import isCompact from './utils'

const getWidth = size => {
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
  ${borderRadiusLarge.all} background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 42px;
  position: relative;
  z-index: 11;

  width: ${props => getWidth(props.size)}px;

  ${mq.desktop`
    margin: 24px 0;
  `} ${mq.handheld`
    padding: 0 18px;
    border-radius: 0;
    width: 100%;
  `};
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  min-height: 60px;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: ${props => (isCompact(props.size) ? '18' : '30')}px;
  ${H4} {
    font-weight: 700;
  }

  ${mq.desktop`
    max-width: 588px;
  `} ${mq.tablet`
    padding: 24px 102px 24px 0;
  `} ${mq.mobile`
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 18px 62px 18px 0;

  `};
`

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  margin-bottom: 30px;
  ${mq.tablet`
    margin-bottom: 24px;
  `} ${mq.mobile`
    margin-bottom: 18px;
  `};
`

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`

export const CloseButton = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: ${props => (isCompact(props.size) ? 'absolute' : 'fixed')};
  right: ${props => (isCompact(props.size) ? '0' : '4')}px;
  top: ${props => (isCompact(props.size) ? '0' : '5')}px;
  height: 30px;
  width: 30px;

  ${mq.desktop`
    &:hover ${StyledIcon} {
      fill: ${props => (isCompact(props.size) ? 'miscLight' : 'white')};
    }
  `} ${mq.handheld`
    background: ${({ theme }) => theme.color.miscLightest};
    ${borderRadiusCircle.all}
    margin-left: 32px;
    position: absolute;
    right: 18px;
    top: 18px;
    z-index: 2;
  `};
`

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  padding: ${props => (isCompact(props.size) ? '18' : '30')}px 0;

  ${mq.handheld`
    padding: 24px 0;
  `} ${mq.mobile`
    flex-direction: column;
    padding: 18px 0;
  `};
`
