import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const TextCaption = styled.span`
  font-size: 14px;
  line-height: 20px;

  @media ${queries.isMobile} {
    font-size: 12px;
    line-height: 26px;
  }
`

export default TextCaption
