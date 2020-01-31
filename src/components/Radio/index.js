// @flow
import * as React from 'react'
import {
  RadioLabel,
  StyledRadio,
  RadioInput,
  LabelText,
} from './styled'

const DEFAULT_PROPS = {
  disabled: false,
  className: '',
  checked: false,
  onChange: () => null,
}

export type TValue = string | number | boolean

type TProps = {
  /**
  * Значение опции
  */
  value: TValue,
  /**
  * Отображаемая подпись опции
  */
  label: React.Node,
  /**
  * Недоступность выбора опции
  */
  disabled?: boolean,
  className?: string,
  /**
  * Выбрана ли опция
  */
  checked?: boolean,
  /**
  * Функция, срабатывающая при выборе опции. Принимает значение опции
  */
  onChange?: (TValue) => void,
}

/**
 * Компонент для выбора опции
 */

const Radio = (props: TProps) => {
  const {
    value,
    label,
    disabled,
    className,
    checked,
    onChange,
  } = props

  return (
    <RadioLabel disabled={disabled} className={className}>
      <StyledRadio
        disabled={disabled}
        checked={checked}
      />
      <RadioInput
        {...props}
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <LabelText disabled={disabled}>
        {label}
      </LabelText>
    </RadioLabel>
  )
}

Radio.defaultProps = DEFAULT_PROPS

export default Radio
