import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;

  @media ${queries.isHandheld} {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.1px;
  }
`

export default H5
