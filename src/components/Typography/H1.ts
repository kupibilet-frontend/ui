import styled, { css } from 'styled-components'

const H1 = styled.h1`
  font-size: 36px;
  line-height: 48px;
  margin: 0;
  font-weight: 600;
  ${({ theme }) => css`
    @media ${theme.queries.isTablet} {
      font-size: 32px;
      line-height: 40px;
    }
    
    @queries ${theme.queries.isMobile} {
      font-size: 24px;
      line-height: 32px;
    }
  `}
`

export default H1
