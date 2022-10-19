import { BasePlacement, Placement } from '@popperjs/core'
import React from 'react'

type TPopoverSize = 'normal' | 'large'

type TPopoverProps = {
  /**
  * Вложенный в тултип элемент
  */
  children: React.ReactNode,
  /**
  * То, что будет отображаться в поповере
  */
  content: React.ReactNode,
  /**
  * Хедер поповера
  */
  header?: React.ReactNode,
  /**
  * Положение поповера, относительно элемента
  */
  placement?: Placement,
  /**
  * Размер поповера
  */
  size?: TPopoverSize,
  /**
  * z-index поповера
  */
  zIndex?: number,
  /**
   * allow popover usage with styled components
   */
  className?: string,

  autoWidth?: boolean,
}

type TPopoverWithDefaultsProps = Required<TPopoverProps>

interface TPopoverIconProps {
  side: BasePlacement,
}

type TPopoverBackgroundProps = Pick<TPopoverWithDefaultsProps, 'size' | 'autoWidth'> & {
  header: TPopoverProps['header']
}


export {
  TPopoverSize,
  TPopoverProps,
  TPopoverIconProps,
  TPopoverBackgroundProps,
}
