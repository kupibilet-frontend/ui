import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H1 = styled.h1`
  font-size: 44px;
  line-height: 44px;
  margin: 0;
  font-weight: 600;

  @media ${queries.isHandheld} {
    font-size: 24px;
    line-height: 28px;
  }
`

export default H1
