import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H3 = styled.h3`
  font-size: 30px;
  line-height: 34px;
  margin: 0;
  font-weight: 600;

  @media ${queries.isHandheld} {
    font-size: 24px;
    line-height: 28px;
  }
`

export default H3
