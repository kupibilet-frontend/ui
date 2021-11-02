import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H2 = styled.h2`
  font-size: 28px;
  line-height: 40px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorTextPrimary};

  @media ${queries.isTablet} {
    font-size: 24px;
    line-height: 36px;
  }
  
  @media ${queries.isMobile} {
    font-size: 20px;
    line-height: 26px;
  }
`

export default H2
