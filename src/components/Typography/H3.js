import styled from 'styled-components'
import mq from 'utils/media-queries'

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
  ${mq.handheld`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -.4px;
  `};
`

export default H3
