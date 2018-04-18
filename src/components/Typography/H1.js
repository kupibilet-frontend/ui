import styled from 'styled-components'
import mq from 'utils/media-queries'

const H1 = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.2px;
  margin: 0;
  ${mq.tablet`
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -.6px;
  `} ${mq.mobile`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -.4px
  `};
`

export default H1
