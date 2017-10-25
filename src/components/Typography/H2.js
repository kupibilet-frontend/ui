import styled from 'styled-components'
import mq from 'utils/media-queries'

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  margin: 0;
  ${mq.handheld`
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -.6px;
  `}
`

export default H2
