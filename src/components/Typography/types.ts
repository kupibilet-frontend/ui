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

export type TTokenName = keyof typeof typographyTokens

export type TVariantToken =
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

export type TVariantMapper = Record<TVariant, keyof JSX.IntrinsicElements>
