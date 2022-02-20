import styled, { css } from 'styled-components'

const TextSmallLink = styled.span`
  font-size: 14px;
  line-height: 20px;

  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 12px;
      line-height: 16px;
    }
  `}
`

export default TextSmallLink
