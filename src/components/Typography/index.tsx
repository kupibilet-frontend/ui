import React from 'react'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { StyledTypography } from 'components/Typography/styled'
import { getTokenName } from './getTokenName'
import { TVariant, TVariantMapper, TVariantToken } from './types'

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

const Typography = ({
  color,
  variant = 'medium',
  isBold = false,
  tag,
  children,
  ...props
}: TTypographyProps): JSX.Element => {
  const tokenVariant = calculateTokenVariant(variant)

  const { desktop: tokenName, mobile: mobileTokenName } = getTokenName(tokenVariant, isBold)

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
