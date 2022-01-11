import styled, { css } from 'styled-components'

const TitleHero = styled.h1`
  font-size: 48px;
  line-height: 64px;
  margin: 0;
  font-weight: 600;

  ${({ theme }) => css`
    @media ${theme.queries.isTablet} {
      font-size: 40px;
      line-height: 52px;
    }
    
    @media ${theme.queries.isMobile} {
      font-size: 28px;
      line-height: 36px;
    }
  `}
`

export default TitleHero
