import { BasePlacement, Placement } from '@popperjs/core'
import React from 'react'

type TPopoverSize = 'normal' | 'large'

type TPopoverProps = {
  children: React.ReactNode,
  content: React.ReactNode,
  header?: string,
  placement?: Placement,
  size?: TPopoverSize,
}

type TPopoverWithDefaultsProps = Required<TPopoverProps>

interface TPopoverIconProps {
  placement: BasePlacement,
}

type TPopoverBackgroundProps = Pick<TPopoverWithDefaultsProps, 'size'>


export {
  TPopoverSize,
  TPopoverProps,
  TPopoverIconProps,
  TPopoverBackgroundProps,
}
