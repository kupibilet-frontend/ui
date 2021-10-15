import React from 'react'
import { BasePlacement, Placement } from '@popperjs/core'
import { DefaultTheme } from 'styled-components'

export interface TTooltipProps {
  /**
  * Вложенный в тултип элемент
  */
  children: React.ReactElement,
  /**
  * То, что будет отображаться в тултипе
  */
  content: React.ReactNode,
  /**
  * Положение тултипа, относительно элемента
  */
  placement: Placement,
  /**
  * Тултип цвета успеха
  */
  success?: boolean,
  /**
  * Тултип цвета ошибки
  */
  error?: boolean,
  /**
  * Проп для стилизации обертки контента тултипа
  */
  className?: string,
  /**
  * z-index тултипа
  */
  zIndex?: number,
  /**
   * Иногда нам необходимо контролировать видимость тултипа из кода вне, например:
   * при нажатии на кнопку "скопировать" мы хотим 3 секунды показывать тултип "скопировано",
   * при этом при наведении на элемент мы не хотим показывать тултип,
   * те отображение или неотображение тултипа зависит полностью от пропа, если он передан
   */
  isOpen?: boolean | null,
}

export type TTooltipWithDefaultsProps = Required<TTooltipProps>

export interface TTooltipCommonProps extends Pick<TTooltipWithDefaultsProps, 'error' | 'success'> {
  side: BasePlacement,
  theme: DefaultTheme,
}

export interface TooltipIconContainerProps {
  side: BasePlacement,
}
