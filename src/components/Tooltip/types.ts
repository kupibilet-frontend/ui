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
  className?: string
}

export type TTooltipWithDefaultsProps = Required<TTooltipProps>

export interface TTooltipCommonProps extends Pick<TTooltipWithDefaultsProps, 'error' | 'success'> {
  side: BasePlacement,
  theme: DefaultTheme,
}

export interface TooltipIconContainerProps {
  side: BasePlacement,
}
