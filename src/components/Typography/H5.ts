import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H5 = styled.h5`
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  font-weight: 600;

  @media ${queries.isHandheld} {
    font-size: 18px;
    line-height: 22px;
  }
`

export default H5
