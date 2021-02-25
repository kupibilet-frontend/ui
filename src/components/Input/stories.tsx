import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, boolean, number } from '@storybook/addon-knobs'
// @ts-ignore TODO add storybook folder to ts config
import withReduxForm from 'storybook/decorators/withReduxForm'
// @ts-ignore TODO add storybook folder to ts config
import updateKnob from 'storybook/updateKnob'
import { Field } from 'redux-form'
import ControlsGroup from 'components/ControlsGroup'
import Icon from 'components/Icon'
import RFInput, { Input } from 'components/Input'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { TInputSize } from './types'


function createOnChangeHandler(fieldName: string) {
  return function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateKnob(fieldName, 'text', event.target.value)
  }
}

const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
  error: 'Только латинские буквы',
}

const sizesSelect = (defaultValue = 'large'): TInputSize => select(
  'size',
  {
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
  },
  defaultValue,
) as TInputSize

const isRequired = (value: string) => (value ? undefined : 'Поле должно быть заполнено')

storiesOf('COMPONENTS|Controls/Input', module)
  .add('default', () => {
    const value = text('selectedValue', '')
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')

    const onChange = createOnChangeHandler('selectedValue')

    return (
      <Input
        value={value}
        onChange={onChange}
        name={inputDefault.name}
        disabled={disabled}
        success={success}
        error={error}
        size={sizesSelect()}
        placeholder={placeholder}
      />
    )
  })
  .add('Separate inputs group', () => {
    const value1 = text('selectedValue1', '')
    const value2 = text('selectedValue2', '')
    const value3 = text('selectedValue3', '')

    const onChange1 = createOnChangeHandler('selectedValue1')
    const onChange2 = createOnChangeHandler('selectedValue2')
    const onChange3 = createOnChangeHandler('selectedValue3')

    return (
      <ControlsGroup>
        <Input
          value={value1}
          onChange={onChange1}
          type={inputDefault.type}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
        <Input
          value={value2}
          onChange={onChange2}
          type={inputDefault.type}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
        <Input
          value={value3}
          onChange={onChange3}
          type={inputDefault.type}
          size={sizesSelect()}
          placeholder={inputDefault.placeholder}
        />
      </ControlsGroup>
    )
  })
  .add('With icons', () => {
    const value = text('selectedValue', '')
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')

    const onChange = createOnChangeHandler('selectedValue')

    return (
      <Input
        value={value}
        onChange={onChange}
        name={inputDefault.name}
        disabled={disabled}
        success={success}
        error={error}
        size={sizesSelect()}
        placeholder={placeholder}
        leftIcon={<Icon name="man" fill={COLOR_NAMES.miscDark} />}
        rightIcon={<Icon name="angle" fill={COLOR_NAMES.miscDark} />}
      />
    )
  })
  .add('With icon group', () => {
    const value = text('selectedValue', '')
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')

    const onChange = createOnChangeHandler('selectedValue')

    return (
      <Input
        value={value}
        onChange={onChange}
        name={inputDefault.name}
        disabled={disabled}
        success={success}
        error={error}
        size={sizesSelect()}
        placeholder={placeholder}
        rightIcon={[
          <Icon name="man" fill={COLOR_NAMES.miscDark} />,
          <Icon name="angle" fill={COLOR_NAMES.miscDark} />,
        ]}
      />
    )
  })
  .add('As textarea', () => {
    const value = text('selectedValue', '')
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const success = boolean('success', false)
    const error = text('error', '')
    const rows = number('rows', 4)

    const onChange = createOnChangeHandler('selectedValue')

    return (
      <Input
        value={value}
        onChange={onChange}
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
  // TODO: fix stories below
  .addDecorator(withReduxForm)
  .add('With RF + validation', () => {
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
