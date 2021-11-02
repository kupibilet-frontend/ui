import styled from 'styled-components'
import { queries } from 'utils/media-queries'

const H5 = styled.h5`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorTextPrimary};
  
  @media ${queries.isMobile} {
    font-size: 14px;
    line-height: 20px;
  }
`

export default H5
