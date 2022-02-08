import React from 'react'
import styled from 'styled-components'
import { withMedia2021 } from 'utils/media-queries'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import * as typographyTokens from 'components/ThemeProvider/tokens/typography'


export type TVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'accent'
  | 'caption'
  | 'description'
  | 'large'
  | 'hero'
  | 'medium'
  | 'small'

type TBold = '_bold' | '_normal' | ''

interface TProps {
  variant?: TVariant,
  color?: COLOR_NAMES,
  isBold?: boolean,
  tag?: keyof JSX.IntrinsicElements,
  children: React.ReactNode,
  isMobile: boolean,
}

interface TStyledTypography {
  color: COLOR_NAMES,
  tokenName:keyof typeof typographyTokens,
}


const VARIANTS_MAPPER = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  accent: 'span',
  caption: 'span',
  description: 'span',
  large: 'span',
  hero: 'h1',
  medium: 'span',
  small: 'span',
}

const calculateTokenVariant = (variant: TVariant):string => {
  switch (variant) {
    case 'h1':
      return 'headline_h1_default'
    case 'h2':
      return 'headline_h2_default'
    case 'h3':
      return 'headline_h3_default'
    case 'h4':
      return 'headline_h4_default'
    case 'h5':
      return 'headline_h5_default'
    case 'accent':
      return 'text_accent'
    case 'caption':
      return 'text_caption'
    case 'description':
      return 'text_description'
    case 'large':
      return 'text_large'
    case 'hero':
      return 'headline_hero_default'
    case 'medium':
      return 'text_medium'
    case 'small':
      return 'text_small'
    default:
      return 'text_medium'
  }
}

const calculateBold = (variant: TVariant, isBold: boolean): TBold => {
  const withoutBoldVariants = ['hero', 'h1', 'h2', 'h3', 'h4', 'h5']

  if (!withoutBoldVariants.includes(variant) && isBold) {
    return '_bold'
  } else if (!withoutBoldVariants.includes(variant) && !isBold) {
    return '_normal'
  } else { return '' }
}

const StyledTypography = styled.span<TStyledTypography>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme, tokenName }) => theme.typography[tokenName].size}px;
  font-family: ${({ theme, tokenName }) => theme.typography[tokenName].fontFamily};
  font-weight: ${({ theme, tokenName }) => theme.typography[tokenName].fontWeight};
  line-height: ${({ theme, tokenName }) => theme.typography[tokenName].lineHeight}px;
`

const Typography = ({
  color = 'colorTextPrimaryNormal',
  variant = 'medium',
  isBold = false,
  tag,
  children,
  isMobile,
}: TProps): JSX.Element => {
  const platform = isMobile ? 'mobile' : 'desktop'
  const tokenVariant = calculateTokenVariant(variant)
  const bold = calculateBold(variant, isBold)
  const tokenName = `typography_${platform}_${tokenVariant}${bold}`

  return (
    <StyledTypography
      as={tag ?? VARIANTS_MAPPER[variant]}
      color={color}
      tokenName={tokenName}
    >
      {children}
    </StyledTypography>
  )
}

export default withMedia2021(Typography)
