import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H3 = styled.h3`
  font-size: 22px;
  line-height: 32px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorTextPrimary};
  
  @media ${queries.isMobile} {
    font-size: 18px;
    line-height: 26px;
  }
`

export default H3
