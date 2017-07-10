import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import Label from './index'

storiesOf('Label', module)
  .addWithInfo('default', () => {
    const horizonal = boolean('horizonal', false)
    const title = text('text', 'Cake is a lie')

    return (
      <Label
        horizonal={horizonal}
        title={title}
      >
        <input type="text" />
      </Label>
    )
  })
