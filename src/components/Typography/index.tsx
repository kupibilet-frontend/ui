import React from 'react'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import * as typographyTokens from 'components/ThemeProvider/tokens/typography'
import { StyledTypography } from 'components/Typography/styled'


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

type TBold = '_bold' | '_normal' | '_default'
export type TTokenName = keyof typeof typographyTokens

type TVariantToken =
  | 'headline_h1'
  | 'headline_h2'
  | 'headline_h3'
  | 'headline_h4'
  | 'headline_h5'
  | 'headline_hero'
  | 'text_accent'
  | 'text_caption'
  | 'text_description'
  | 'text_large'
  | 'text_medium'
  | 'text_small'
  | 'text_medium'

export interface TTypographyProps {
  variant?: TVariant,
  color?: COLOR_NAMES,
  isBold?: boolean,
  tag?: React.ElementType | keyof JSX.IntrinsicElements,
  children: React.ReactNode,
  className?: string,
  as?: React.ElementType | keyof JSX.IntrinsicElements,
  // properties when used as a reference:
  href?: string,
  target?: string,
  rel?: string,
}

type TVariantMapper = Record<TVariant, keyof JSX.IntrinsicElements>

const VARIANTS_MAPPER: TVariantMapper = {
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

const calculateTokenVariant = (variant: TVariant): TVariantToken => {
  switch (variant) {
    case 'h1':
      return 'headline_h1'
    case 'h2':
      return 'headline_h2'
    case 'h3':
      return 'headline_h3'
    case 'h4':
      return 'headline_h4'
    case 'h5':
      return 'headline_h5'
    case 'accent':
      return 'text_accent'
    case 'caption':
      return 'text_caption'
    case 'description':
      return 'text_description'
    case 'large':
      return 'text_large'
    case 'hero':
      return 'headline_hero'
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

  if (withoutBoldVariants.includes(variant)) return '_default'

  if (isBold) return '_bold'

  return '_normal'
}


const Typography = ({
  color,
  variant = 'medium',
  isBold = false,
  tag,
  children,
  ...props
}: TTypographyProps):JSX.Element => {
  console.log('variant', variant)
  console.log('tag', tag)
  const tokenVariant = calculateTokenVariant(variant)
  const bold = calculateBold(variant, isBold)
  const tokenName = `typography_desktop_${tokenVariant}${bold}` as TTokenName
  const mobileTokenName = `typography_mobile_${tokenVariant}${bold}` as TTokenName

  console.log('tokenName', tokenName)
  console.log('mobileTokenName', mobileTokenName)
  return (
    <StyledTypography
      as={tag ?? VARIANTS_MAPPER[variant]}
      color={color}
      tokenName={tokenName}
      mobileTokenName={mobileTokenName}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
