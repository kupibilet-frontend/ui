import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import FormItem from 'components/FormItem'

storiesOf('COMPONENTS|FormItem', module)
  .add('default', () => {
    const label = text('text', 'Cake is a lie')

    return (
      <FormItem
        label={label}
        htmlFor="input"
      >
        <input id="input" type="text" />
      </FormItem>
    )
  })
