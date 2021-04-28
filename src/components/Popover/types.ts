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
  header?: string,
  /**
  * Положение поповера, относительно элемента
  */
  placement?: Placement,
  /**
  * Размер поповера
  */
  size?: TPopoverSize,
}

type TPopoverWithDefaultsProps = Required<TPopoverProps>

interface TPopoverIconProps {
  side: BasePlacement,
}

type TPopoverBackgroundProps = Pick<TPopoverWithDefaultsProps, 'size'>


export {
  TPopoverSize,
  TPopoverProps,
  TPopoverIconProps,
  TPopoverBackgroundProps,
}
