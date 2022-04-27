import React from 'react'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import styled, { css } from 'styled-components'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import Text from './Text'
import TextSmall from './TextSmall'
import TextLarge from './TextLarge'
import UppercaseExtraSmall from './UppercaseExtraSmall'
import TextCaption from './TextCaption'

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

type TStyled = Pick<TTypographyProps, 'color' | 'isBold'>

const styles = css<TStyled>`
  font-weight: ${(props) => (props.isBold ? '600' : undefined)};
  color: ${(props) => (props.color ? props.theme.color[props.color] : undefined)};
`

const StyledH1 = styled(H1)<TStyled>`
  ${styles}
`

const StyledH2 = styled(H2)<TStyled>`
  ${styles}
`

const StyledH3 = styled(H3)<TStyled>`
  ${styles}
`

const StyledH4 = styled(H4)<TStyled>`
  ${styles}
`

const StyledH5 = styled(H5)<TStyled>`
  ${styles}
`

const StyledH6 = styled(H6)<TStyled>`
  ${styles}
`

const StyledText = styled(Text)<TStyled>`
  ${styles}
`

const StyledTextSmall = styled(TextSmall)<TStyled>`
  ${styles}
`

const StyledTextLarge = styled(TextLarge)<TStyled>`
  ${styles}
`

const StyledUppercaseExtraSmall = styled(UppercaseExtraSmall)<TStyled>`
  ${styles}
`

const StyledTextCaption = styled(TextCaption)<TStyled>`
  ${styles}
`

export type TVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'accent'
  | 'caption'
  | 'description'
  | 'large'
  | 'hero'
  | 'medium'
  | 'small'

type TVariantMapper = Record<TVariant, React.ComponentType<TStyled>>

const VARIANTS_MAPPER: TVariantMapper = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  hero: StyledH6,
  small: StyledTextSmall,
  medium: StyledText,
  large: StyledTextLarge,
  caption: StyledUppercaseExtraSmall,
  description: StyledTextCaption,
  accent: StyledText,
}

const Typography = ({
  variant = 'medium',
  children,
  ...props
}: TTypographyProps):JSX.Element => {
  const Component = VARIANTS_MAPPER[variant] ?? StyledText
  return (
    <Component {...props}>
      {children}
    </Component>
  )
}

export default Typography
