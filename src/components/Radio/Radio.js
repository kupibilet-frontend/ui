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

type TProps = {
  value: string | number | boolean,
  label: React.Node,
  disabled?: boolean,
  className?: string,
  selectedValue?: string | number | boolean,
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
