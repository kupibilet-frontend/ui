import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { boolean, text } from '@kadira/storybook-addon-knobs'
import Label from './index'
import Input from '../input'

storiesOf('Label', module)
  .addWithInfo('default', () => {
    const horizonal = boolean('horizonal', false)
    const title = text('text', 'Cake is a lie')

    return (
      <Label
        horizonal={horizonal}
        title={title}
      >
        <Input />
      </Label>
    )
  })
