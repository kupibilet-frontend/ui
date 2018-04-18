import styled from 'styled-components'
import mq from 'utils/media-queries'

const UppercaseLarge = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: 0;
  ${mq.handheld`
    font-size: 18px;
    line-height: 22px;
  `};
`

export default UppercaseLarge
