import React from 'react'

export type TButtonSize = 'small' | 'medium' | 'large'

export type TNeighboringInGroupType = 'both' | 'left' | 'right' | null

export type TIconPosition = 'left' | 'right'

export type TButtonVariant = 'primary' | 'secondary' | 'contrast' | 'link' | 'help' | 'text'

export interface TButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: TButtonSize,
  variant?: TButtonVariant,
  children?: React.ReactNode | React.ReactNode[],
  disabled?: boolean,
  icon?: React.ReactNode,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  isBlock?: boolean,
  neighboringInGroup?: TNeighboringInGroupType,
  href?: string,
  target?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void,
  type?: string,
  tabIndex?: number,
  withTextUnderline?: boolean,
}
