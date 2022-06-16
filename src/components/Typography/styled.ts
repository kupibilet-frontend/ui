import styled from 'styled-components'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { queries } from 'utils/media-queries'
import { TTokenName } from 'components/Typography'

interface TStyledTypography {
    color?: COLOR_NAMES,
    tokenName: TTokenName,
    mobileTokenName: TTokenName,
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

  @media ${queries.isMobile} {
    font-size: ${({ theme, mobileTokenName }) => theme.typography[mobileTokenName].size}px;
    font-weight: ${({ theme, mobileTokenName }) => theme.typography[mobileTokenName].fontWeight};
    line-height: ${({ theme, mobileTokenName }) => theme.typography[mobileTokenName].lineHeight}px;
  }
`
