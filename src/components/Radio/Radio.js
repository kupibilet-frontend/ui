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
  selectedValue: '',
  onChange: () => null,
}

export type TValue = string | number | boolean

type TProps = {
  value: TValue,
  label: React.Node,
  disabled?: boolean,
  className?: string,
  selectedValue?: TValue,
  onChange?: () => void,
}

const Radio = (props: TProps) => {
  const {
    value,
    label,
    disabled,
    className,
    selectedValue,
    onChange,
  } = props

  const checked = value === selectedValue

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
