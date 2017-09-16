import type { Dispatch } from 'redux'
import * as React from 'react'

// https://github.com/erikras/redux-form/blob/v7.0.4/src/FieldProps.types.js.flow
export type InputProps = {
  checked?: boolean,
  name: string,
  onBlur: { (eventOrValue: Event | any): void },
  onChange: { (eventOrValue: Event | any): void },
  onDrop: { (event: Event): void },
  onDragStart: { (event: Event): void },
  onFocus: { (event: Event): void },
  value: any
}

export type FieldProps = {
  type?: string,
  input: InputProps,
  meta: {
    active: boolean,
    asyncValidating: boolean,
    autofilled: boolean,
    dirty: boolean,
    dispatch: Dispatch<*>,
    error?: any,
    form: string,
    initial?: any,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    submitFailed: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean,
    warning?: any
  },
  custom: {
    ref?: (ref: React.ElementRef<*>) => React.ElementRef<*>
  }
}
