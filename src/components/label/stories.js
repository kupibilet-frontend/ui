import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { boolean, text } from '@kadira/storybook-addon-knobs'
import Label from './index'

storiesOf('Label', module)
  .addWithInfo('default', () => {
    const horizonal = boolean('horizonal', false)
    const title = text('text', 'Cake is a lie')

    return (
      <Label
        horizonal={horizonal}
        className={`label ${horizonal ? 'horizonal' : ''}`}
        title={title}
      />
    )
  })
