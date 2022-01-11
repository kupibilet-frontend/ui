import styled, { css } from 'styled-components'

const H5 = styled.h5`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  font-weight: 600;
  
  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 14px;
      line-height: 20px;
    }
  `}
`

export default H5
