import styled, { css } from 'styled-components'

const Text = styled.span`
  font-size: 16px;
  line-height: 24px;

  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 14px;
      line-height: 20px;
    }
  `}
`

export default Text
