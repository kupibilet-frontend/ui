import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;

  @media ${queries.isHandheld} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
`

export default H3
