import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H4 = styled.h4`
  font-size: 24px;
  line-height: 28px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorTextPrimary};

  @media ${queries.isHandheld} {
    font-size: 20px;
    line-height: 24px;
  }
`

export default H4
