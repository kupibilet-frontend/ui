import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const Text = styled.span`
  font-size: 16px;
  line-height: 24px;

  @media ${queries.isMobile} {
    font-size: 14px;
    line-height: 20px;
  }
`

export default Text
