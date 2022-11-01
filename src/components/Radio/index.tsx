import { TTypographyProps } from 'components/Typography'
import React from 'react'
import {
  RadioLabel,
  StyledRadio,
  RadioInput,
  LabelText,
} from './styled'


export type TValue = string | number | boolean

export interface TProps {
  /**
  * Значение опции
  */
  value: TValue,
  /**
  * Отображаемая подпись опции
  */
  label: React.ReactNode,
  /**
  * Недоступность выбора опции
  */
  disabled?: boolean,
  /**
  * Выбрана ли опция
  */
  checked?: boolean,
  /**
  * Функция, срабатывающая при выборе опции. Принимает значение опции
  */
  onChange?: (value: TValue) => void,
  className?: string,

  labelVariant?: Extract<TTypographyProps['variant'], 'medium' | 'large'>
}

/**
 * Компонент для выбора опции
 */

const Radio = (props: TProps): JSX.Element => {
  const {
    value,
    label,
    className = '',
    disabled = false,
    checked = false,
    onChange = () => null,
    labelVariant = 'medium',
  } = props

  return (
    <RadioLabel
      checked={checked}
      disabled={disabled}
      className={className}
      labelVariant={labelVariant}
    >
      <StyledRadio
        disabled={disabled}
        checked={checked}
      />
      <RadioInput
        {...props}
        value={value.toString()}
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <LabelText disabled={disabled} variant={labelVariant}>
        {label}
      </LabelText>
    </RadioLabel>
  )
}

export default Radio
