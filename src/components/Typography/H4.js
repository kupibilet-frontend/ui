import styled from 'styled-components'
import mq from 'utils/media-queries'

const H4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  margin: 0;
  ${mq.handheld`
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -.2px;
  `};
`

export default H4
