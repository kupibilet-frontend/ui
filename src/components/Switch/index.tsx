import React from 'react'

import { TTypographyProps } from 'components/Typography'
import { WrappedFieldProps } from 'redux-form'
import { InnerInput, LabelText, SwitchWrapper } from './styled'

export type TLabelPlacement = 'end' | 'start'

export type TSwitchProps = {
  className?: string
  disabled?: boolean
  name?: string,
  label?: string
  labelPlacement?: TLabelPlacement
  labelProps?: Omit<Partial<TTypographyProps>, 'children'> & { variant: Extract<TTypographyProps['variant'], 'medium' | 'large'> }
} & React.HTMLProps<HTMLInputElement>

export function Switch(props: TSwitchProps): JSX.Element {
  const {
    checked,
    className,
    label,
    labelProps,
    labelPlacement = 'end',
    name = '',
    disabled,
    ...rest
  } = props

  return (
    <SwitchWrapper className={className} disabled={disabled} checked={checked} labelProps={{ variant: labelProps?.variant || 'medium', ...labelProps }}>
      {/* @ts-ignore */}
      <InnerInput
        type="checkbox"
        checked={checked ?? false}
        labelPlacement={labelPlacement}
        disabled={disabled}
        name={name}
        {...rest}
      />
      {Boolean(label) && (
        <LabelText
          variant="medium"
          checked={checked}
          disabled={disabled}
          {...labelProps}
        >
          {label}
        </LabelText>
      )
      }
    </SwitchWrapper>
  )
}

export type TRFSwitchProps = WrappedFieldProps & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const RFSwitch = React.memo((props: TRFSwitchProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props.input || props
    onChange(e.target.checked)
  }

  const { input, ...restProps } = props
  const { checked } = input || props

  return (
    <Switch
      {...restProps}
      {...input}
      checked={Boolean(checked)}
      onChange={onChangeHandler}
    />
  )
})

export default RFSwitch
