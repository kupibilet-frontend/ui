import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H1 = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.2px;
  margin: 0;

  @media ${queries.isHandheld} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
`

export default H1
