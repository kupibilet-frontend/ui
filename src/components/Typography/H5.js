import styled from 'styled-components'
import mq from 'utils/media-queries'

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
  ${mq.handheld`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -.1px;
  `};
`

export default H5
