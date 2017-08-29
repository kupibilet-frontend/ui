import React from 'react'
import { storiesOf } from '@storybook/react'
import ControlsGroup from 'components/ControlsGroup'
import { select, text, boolean } from '@storybook/addon-knobs'
import Input, { InnerInput } from './index'

const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
  error: 'Только латинские буквы',
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

storiesOf('Controls/Input', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', null)

    return (
      <Input
        name={inputDefault.name}
        disabled={disabled}
        success={success}
        error={error}
        size={sizesSelect()}
        placeholder={placeholder}
      />
    )
  })
  .addWithInfo('Seperate inputs group', () => {
    return (
      <ControlsGroup>
        <Input
          type={inputDefault.type}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
        <Input
          type={inputDefault.type}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
        <Input
          type={inputDefault.type}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
      </ControlsGroup>
    )
  })
  .addWithInfo('Compined inputs group', () => {
    return (
      <Input
        size={sizesSelect()}
      >
        <InnerInput
          type="number"
          placeholder="DD"
        />
        <InnerInput
          type="number"
          placeholder="MM"
        />
        <InnerInput
          type="number"
          placeholder="YYYY"
        />
      </Input>
    )
  })
