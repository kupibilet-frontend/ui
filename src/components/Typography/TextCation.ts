import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const TextCation = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.colorTextPrimary};
  
  @media ${queries.isMobile} {
    font-size: 12px;
    line-height: 26px;
  }
`

export default TextCation
