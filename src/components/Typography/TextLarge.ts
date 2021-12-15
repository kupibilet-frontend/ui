import styled, { css } from 'styled-components'

const TextLarge = styled.span`
  font-size: 18px;
  line-height: 28px;

  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 16px;
      line-height: 24px;
    }
  `}
`

export default TextLarge
