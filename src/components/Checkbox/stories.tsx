import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import withReduxForm from 'redux-form-storybook'
import { Field } from 'redux-form'

import Checkbox from 'components/Checkbox'

storiesOf('COMPONENTS|Controls/Checkbox', module)
  .addDecorator(withReduxForm)
  .add('ReduxForm-ready', () => {
    return (
      <Field
        type="checkbox"
        name="checkmark"
        component={Checkbox}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Авиабилеты')}
      </Field>
    )
  })
