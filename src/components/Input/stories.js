import React from 'react'
import { storiesOf } from '@storybook/react'
import ControlsGroup from 'components/ControlsGroup'
import Icon from 'components/Icon'
import { select, text, boolean } from '@storybook/addon-knobs'
import Input, { InnerInput } from 'components/Input'

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
  .addWithInfo('Separate inputs group', () => {
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
  .addWithInfo('Combined inputs group', () => {
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
  .addWithInfo('With icons', () => {
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
        leftIcon={<Icon name="man" fill="miscDark" />}
        rightIcon={<Icon name="angle" fill="miscDark" />}
      />
    )
  })
  .addWithInfo('With icon group', () => {
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
        rightIcon={[
          <Icon name="man" fill="miscDark" />,
          <Icon name="angle" fill="miscDark" />,
        ]}
      />
    )
  })
