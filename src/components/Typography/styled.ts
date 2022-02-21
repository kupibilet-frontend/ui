import styled from 'styled-components'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { TTokenName } from 'components/Typography'

interface TStyledTypography {
    color?: COLOR_NAMES,
    tokenName: TTokenName,
    className?: string;
}

export const StyledTypography = styled.span<TStyledTypography>`
  color: ${({ theme, color }) => (color ? theme.color[color] : 'inherit')};
  font-size: ${({ theme, tokenName }) => theme.typography[tokenName].size}px;
  font-weight: ${({ theme, tokenName }) => theme.typography[tokenName].fontWeight};
  line-height: ${({ theme, tokenName }) => theme.typography[tokenName].lineHeight}px;
  text-decoration: none;
  text-decoration-skip-ink: none;
  margin: 0;
`