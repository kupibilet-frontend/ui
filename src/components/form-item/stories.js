import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import FormItem from './index'

storiesOf('FormItem', module)
  .addWithInfo('default', () => {
    const title = text('text', 'Cake is a lie')

    return (
      <FormItem
        title={title}
        htmlFor="input"
      >
        <input id="input" type="text" />
      </FormItem>
    )
  })
