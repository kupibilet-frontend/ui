import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { select, text, boolean } from '@kadira/storybook-addon-knobs'
import Input from './index'

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
        size={sizesSelect()}
        placeholder={placeholder}
      />
    )
  })
  .addWithInfo('disabled', () => {
    const disabled = boolean('disabled', true)

    return (
      <Input
        disabled={disabled}
        size={sizesSelect()}
      />
    )
  })
  .addWithInfo('success', () => {
    const success = boolean('success', true)

    return (
      <Input
        success={success}
        size={sizesSelect()}
      />
    )
  })
  .addWithInfo('error', () => {
    const error = boolean('error', true)

    return (
      <Input
        error={error}
        size={sizesSelect()}
      />
    )
  })
  .addWithInfo('icon right', () => {
    const iconName = text('iconName', 'question')

    return (
      <Input
        size={sizesSelect()}
        iconName={iconName}
      />
    )
  })
  .addWithInfo('phone input', () => {
    const circle = boolean('circle', true)

    return (
      <Input
        circle={circle}
        size={sizesSelect()}
        className="input circle"
        type="tel"
        name="phone"
        placeholder="Номер телефона"
      />
    )
  })
