import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const TextAccent = styled.span`
  font-size: 24px;
  line-height: 36px;

  @media ${queries.isTablet} {
    font-size: 22px;
    line-height: 32px;
  }
  
  @media ${queries.isMobile} {
    font-size: 18px;
    line-height: 26px;
  }
`

export default TextAccent
