import React from 'react'

import { TTypographyProps } from 'components/Typography'
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
