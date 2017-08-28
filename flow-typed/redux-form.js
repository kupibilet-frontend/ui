declare type RF$FieldProps = {
  type?: string,
  input: {
    onChange: RF$onChange,
    checked?: boolean,
    value: string,
  },
  meta: {
    warn?: string,
    error?: string,
    touched: bool,
  }
}

declare type RF$EventPayload = InputEvent | string | number | boolean

declare type RF$onChange = (RF$EventPayload) => *
