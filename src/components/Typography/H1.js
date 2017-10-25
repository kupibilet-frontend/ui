import styled from 'styled-components'
import mq from 'utils/media-queries'

const H1 = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.2px;
  margin: 0;
  ${mq.handheld`
    font-size: 38px;
    line-height: 38px;
    letter-spacing: -1px;
  `}
  ${mq.mobile`
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -.6px;
  `}
`

export default H1
