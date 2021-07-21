import React from 'react'
import { LabelWrapper, Label } from './styled'

export interface TProps {
  label: React.ReactNode,
  children: React.ReactNode,
  htmlFor?: string,
  disabled?: boolean,
}

function FormItem({ children, label, htmlFor = 'null', disabled = false, ...props }: TProps): JSX.Element {
  return (
    <LabelWrapper {...props}>
      <Label htmlFor={htmlFor} disabled={disabled}>
        {label}
      </Label>

      {children}
    </LabelWrapper>
  )
}

export default FormItem
