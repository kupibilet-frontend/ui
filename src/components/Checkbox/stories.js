import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import withReduxForm from 'storybook/decorators/withReduxForm'
import { Field } from 'redux-form'

import Checkbox from 'components/Checkbox'

storiesOf('Controls/Checkbox', module)
  .addDecorator(withReduxForm)
  .addWithInfo('ReduxForm-ready', () => {
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
