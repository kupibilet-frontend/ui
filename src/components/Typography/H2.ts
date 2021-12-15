import styled, { css } from 'styled-components'

const H2 = styled.h2`
  font-size: 28px;
  line-height: 40px;
  margin: 0;
  font-weight: 600;

  ${({ theme }) => css`
    @media ${theme.queries.isTablet} {
      font-size: 24px;
      line-height: 36px;
    }
    
    @media ${theme.queries.isMobile} {
      font-size: 20px;
      line-height: 26px;
    }
  `}
`

export default H2
