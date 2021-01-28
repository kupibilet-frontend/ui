enum BUTTON_SIZES_NAMES {
  small = 'small',
  normal = 'normal',
  large = 'large',
}

type TNeighboringInGroupType = 'both' | 'left' | 'right' | null

type TButtonVariant = 'primary' | 'secondary' | 'link'

type TIconArg = string | { props: { size: BUTTON_SIZES_NAMES } } | null

export {
  BUTTON_SIZES_NAMES,
  TNeighboringInGroupType,
  TButtonVariant,
  TIconArg,
}
