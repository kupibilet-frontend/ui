import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, boolean, number } from '@storybook/addon-knobs'
import withReduxForm from 'storybook/decorators/withReduxForm'
import { Field } from 'redux-form'
import ControlsGroup from 'components/ControlsGroup'
import Icon from 'components/Icon'
import { RoundInput } from 'components/RoundInput'
import Button from 'components/Button'


const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Ваш номер телефона',
  error: 'Только латинские буквы',
}

storiesOf('Controls/RoundInput', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const error = text('error', '')
    const success = boolean('success', false)

    return (
      <RoundInput
        inputName="phone"
        formName="defaultForm"
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        success={success}
        size="large"
      />
    )
  })
  .addWithInfo('withButton', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const error = text('error', '')
    const success = boolean('success', false)

    return (
      <ControlsGroup>
        <RoundInput
          inputName="phone"
          formName="defaultForm"
          disabled={disabled}
          placeholder={placeholder}
          error={error}
          success={success}
          size="large"
        />
        <Button size="large">Отправить</Button>
      </ControlsGroup>
    )
  })
