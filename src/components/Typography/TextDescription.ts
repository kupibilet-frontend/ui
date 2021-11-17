import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const TextDescription = styled.span`
  font-size: 12px;
  line-height: 18px;
  
  @media ${queries.isMobile} {
    font-size: 10px;
    line-height: 16px;
  }
`
export default TextDescription
