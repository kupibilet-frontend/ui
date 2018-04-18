import styled from 'styled-components'
import mq from 'utils/media-queries'

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  margin: 0;
  ${mq.handheld`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -.4px;
  `};
`

export default H2
