// @flow
import * as React from 'react'
import type { TValue } from './Radio'

type TProps = {
  /**
  * Для указания доступных опций используется компонент <TogglerItem />
  */
  children: React.Node,
  /**
  * Текущее выбранное значение компонента
  */
  selectedValue?: TValue,
  /**
  * Функция, срабатывающая при выборе опции. Принимает значение опции
  */
  onChange: (TValue) => void,
}

/**
 * Компонент для выбора опции
 */

const RadioGroup = ({
  selectedValue,
  onChange,
  children,
  ...props
}: TProps) => (
  <div {...props}>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {
        onChange,
        selectedValue,
        ...props,
      })
    ))}
  </div>
)

RadioGroup.defaultProps = {
  selectedValue: '',
}

export default RadioGroup
