import styled, { css } from 'styled-components'

const TextCaption = styled.span`
  font-size: 14px;
  line-height: 20px;

  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 12px;
      line-height: 26px;
    }
  `}
`

export default TextCaption
