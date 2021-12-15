import styled, { css } from 'styled-components'

const H3 = styled.h3`
  font-size: 22px;
  line-height: 32px;
  margin: 0;
  font-weight: 600;
  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 18px;
      line-height: 26px;
    }
  `}
`

export default H3
