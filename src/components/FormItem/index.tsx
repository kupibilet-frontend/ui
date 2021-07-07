import React from 'react'
import { LabelWrapper, Label } from './styled'

export interface TProps {
  label: React.ReactNode,
  children: React.ReactNode,
  htmlFor?: string,
  className?: string,
}

function FormItem({ children, label, htmlFor = 'null', ...props }: TProps): JSX.Element {
  return (
    <LabelWrapper {...props}>
      <Label htmlFor={htmlFor}>
        {label}
      </Label>

      {children}
    </LabelWrapper>
  )
}

export default FormItem
