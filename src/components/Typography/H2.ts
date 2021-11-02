import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: -1px;
  margin: 0;

  @media ${queries.isHandheld} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
`

export default H2
