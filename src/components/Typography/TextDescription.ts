import styled, { css } from 'styled-components'

const TextDescription = styled.span`
  font-size: 12px;
  line-height: 18px;
  
  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 10px;
      line-height: 16px;
    }
  `}
`
export default TextDescription
