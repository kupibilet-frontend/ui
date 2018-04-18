import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, boolean, number } from '@storybook/addon-knobs'
import withReduxForm from 'storybook/decorators/withReduxForm'
import { Field } from 'redux-form'
import ControlsGroup from 'components/ControlsGroup'
import Icon from 'components/Icon'
import RFInput, { Input, InnerInput } from 'components/Input'

const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
  error: 'Только латинские буквы',
}

const sizesSelect = (defaultValue = 'large') =>
  select(
    'size',
    {
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
    },
    defaultValue
  )

const isRequired = value => (value ? undefined : 'Поле должно быть заполнено')

storiesOf('Controls/Input', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')

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
      <Input size={sizesSelect()}>
        <InnerInput type="number" placeholder="DD" />
        <InnerInput type="number" placeholder="MM" />
        <InnerInput type="number" placeholder="YYYY" />
      </Input>
    )
  })
  .addWithInfo('With icons', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')

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
    const error = text('error', '')

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
  .addDecorator(withReduxForm)
  .addWithInfo('With RF + validation', () => {
    return (
      <Field
        component={RFInput}
        name={inputDefault.name}
        size={sizesSelect()}
        placeholder={inputDefault.placeholder}
        validate={[isRequired]}
      />
    )
  })
  .addWithInfo('As textarea', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')
    const rows = number('rows', 4)

    return (
      <Input
        name={inputDefault.name}
        disabled={disabled}
        success={success}
        error={error}
        size={sizesSelect()}
        placeholder={placeholder}
        isTextarea
        rows={rows}
      />
    )
  })
