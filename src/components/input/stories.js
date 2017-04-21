import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, text, boolean } from '@kadira/storybook-addon-knobs'
import Input from './index'

const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
  errorText: 'Только латинские буквы',
}

const sizesSelect = (defaultValue = 'large') => select(
  'size',
  {
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
  },
  defaultValue,
)

storiesOf('Input', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', 'Только прямые рейсы')

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={placeholder}
      />
    )
  })
  .addWithInfo('disabled', () => {
    const disabled = boolean('disabled', true)

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        disabled={disabled}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    )
  })
  .addWithInfo('success', () => {
    const success = boolean('success', true)

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        success={success}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
      />
    )
  })
  .addWithInfo('error', () => {
    const error = boolean('error', true)
    const errorText = text('errorText', inputDefault.errorText)

    return (
      <Input
        type={inputDefault.type}
        name={inputDefault.name}
        error={error}
        size={sizesSelect()}
        errorText={errorText}
        placeholder={inputDefault.placeholder}
      />
    )
  })
  .addWithInfo('icon right', () => (
    <Input
      className="has-badge"
      type={inputDefault.type}
      name={inputDefault.name}
      size={sizesSelect()}
      placeholder={inputDefault.placeholder}
    />
  ))
