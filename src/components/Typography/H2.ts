import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H2 = styled.h2`
  font-size: 38px;
  line-height: 38px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorTextPrimary};

  @media ${queries.isHandheld} {
    font-size: 24px;
    line-height: 28px;
  }
`

export default H2
