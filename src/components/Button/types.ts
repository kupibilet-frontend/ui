export type TButtonSize = 'medium'

export type TNeighboringInGroupType = 'both' | 'left' | 'right' | null

export type TButtonVariant = 'primary' | 'secondary'

export interface TButtonProps {
  size?: TButtonSize,
  variant?: TButtonVariant,
  children?: React.ReactElement | React.ReactChild | string,
  disabled?: boolean,
  icon?: React.ReactNode,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  isBlock?: boolean,
  neighboringInGroup?: TNeighboringInGroupType,
  href?: string,
  target?: string,
  onClick?: (event: Event) => void,
  type?: string,
  tabIndex?: number,
}
