import styled, { css } from 'styled-components'

const H4 = styled.h4`
  font-size: 18px;
  line-height: 28px;
  margin: 0;
  font-weight: 600;
  
  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 16px;
      line-height: 24px;
    }
  `}
`

export default H4
