import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H1 = styled.h1`
  font-size: 36;
  line-height: 48px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorTextPrimary};

  @media ${queries.isTablet} {
    font-size: 32px;
    line-height: 40px;
  }
  
  @media ${queries.isMobile} {
    font-size: 24px;
    line-height: 32px;
  }
`

export default H1
