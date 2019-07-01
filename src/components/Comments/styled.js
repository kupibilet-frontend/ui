import styled from 'styled-components'
import mq from 'utils/media-queries'
import TextLarge from 'components/Typography/TextLarge'
import Text from 'components/Typography/Text'
import Link from 'components/Link'

const createColor = (orderNumber, theme) => {
  const modulo = orderNumber % 3
  switch (modulo) {
    case 0:
      return '#FFF2FE'
    case 1:
      return '#E8F7FF'
    case 2:
      return '#E6FFEE'
    default:
      return theme.color.miscLightest
  }
}

export const Bubble = styled.div`
  border-radius: 24px;
  padding: 24px 30px;
  background-color: ${({ theme, orderNumber }) => createColor(orderNumber, theme)};
  position: relative;
  ${({ reply }) => reply && 'display: inline-block;'}
  min-width: 294px;
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    ${({ reply }) => (reply ? 'left' : 'right')}: 48px;
    border: 12px solid transparent;
    ${({ reply }) => (reply ? 'border-right' : 'border-left')}: 16px solid ${({ theme, orderNumber }) => createColor(orderNumber, theme)};
  }
  ${mq.mobile`
    border-radius: 0;
    padding: 12px 18px 18px;
    display: block;
  `}
`
export const CommentWrapper = styled.div`
  max-width: 756px;
  margin: 0 auto 6px;
`
export const CommentBlock = styled.div`
  margin-bottom: 36px;
  ${mq.mobile`
    margin: 0 -18px 24px;
  `}
`

export const Author = styled(Text.withComponent('p'))`
  color: ${({ theme }) => theme.color.text};
  text-align: ${({ reply }) => (reply ? 'left' : 'right')};
  ${({ reply }) => (reply ? 'padding-left' : 'padding-right')}: 100px;
  margin-top: 2px;
`
export const CommentText = TextLarge.withComponent('p').extend`
  white-space: pre-line;
`

export const MoreButton = styled(Link)`
  display: block;
  text-align: center;

  ${mq.mobile`
    text-align: left;
  `}
`
