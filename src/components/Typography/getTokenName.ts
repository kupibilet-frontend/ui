import { TVariantToken, TTokenName } from './types'

const onlyDefaultStateVariants = [
  'headline_hero',
  'headline_h1',
  'headline_h2',
  'headline_h3',
  'headline_h4',
  'headline_h5',
] as const

const onlyNormalStateVariants = ['text_description', 'text_accent'] as const

const checkOnlyDefaultState = (
  variant: any,
): variant is typeof onlyDefaultStateVariants[number] => {
  return onlyDefaultStateVariants.includes(variant)
}

const checkOnlyNormalState = (variant: any): variant is typeof onlyNormalStateVariants[number] => {
  return onlyNormalStateVariants.includes(variant)
}

type TGetTokenName = (tokenVariant: TVariantToken, isBold: boolean) => {
  desktop: TTokenName,
  mobile: TTokenName,
}

export const getTokenName: TGetTokenName = (tokenVariant, isBold) => {
  const onlyDefaultState = checkOnlyDefaultState(tokenVariant)
  const onlyNormalState = checkOnlyNormalState(tokenVariant)

  if ((onlyDefaultState || onlyNormalState) && isBold) {
    console.error(`${tokenVariant} typography variant has no bold state`)
  }

  if (onlyDefaultState) {
    return {
      desktop: `typography_desktop_${tokenVariant}_default`,
      mobile: `typography_mobile_${tokenVariant}_default`,
    }
  }

  if (onlyNormalState) {
    return {
      desktop: `typography_desktop_${tokenVariant}_normal`,
      mobile: `typography_mobile_${tokenVariant}_normal`,
    }
  }

  return {
    desktop: `typography_desktop_${tokenVariant}_${isBold ? 'bold' : 'normal'}`,
    mobile: `typography_mobile_${tokenVariant}_${isBold ? 'bold' : 'normal'}`,
  }
}
