import styled, { css } from 'styled-components'

const TextAccent = styled.span`
  font-size: 24px;
  line-height: 36px;

  ${({ theme }) => css`
    @media ${theme.queries.isTablet} {
      font-size: 22px;
      line-height: 32px;
    }
    
    @media ${theme.queries.isMobile} {
      font-size: 18px;
      line-height: 26px;
    }
  `}
`

export default TextAccent
