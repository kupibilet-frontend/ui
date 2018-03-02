import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, boolean, number } from '@storybook/addon-knobs'
import withReduxForm from 'storybook/decorators/withReduxForm'
import { Field } from 'redux-form'
import ControlsGroup from 'components/ControlsGroup'
import Icon from 'components/Icon'
import InputForm from 'components/InputForm'


const inputDefault = {
  type: 'text',
  name: 'input',
  placeholder: 'Ваш номер телефона',
  error: 'Только латинские буквы',
}

storiesOf('Controls/InputForm', module)
  .addWithInfo('default', () => {
    const placeholder = text('placeholder', inputDefault.placeholder)
    const disabled = boolean('disabled', false)
    const successMessage = text('successMessage', '')

    return (
      <InputForm
        inputName={inputDefault.name}
        formName="defaultForm"
        disabled={disabled}
        placeholder={placeholder}
        successMessage={successMessage}
      />
    )
  })
