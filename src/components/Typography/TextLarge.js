import styled from 'styled-components'
import mq from 'utils/media-queries'

const TextLarge = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  ${mq.handheld`
    font-size: 16px;
    line-height: 20px;
  `};
`

export default TextLarge
