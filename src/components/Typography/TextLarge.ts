import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const TextLarge = styled.span`
font-size: 18px;
line-height: 28px;

@media ${queries.isMobile} {
  font-size: 16px;
  line-height: 24px;
}
`

export default TextLarge
