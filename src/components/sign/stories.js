import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'
import Sign from './index'

const Default = {
  name: 'attention',
  text: '!',
}

storiesOf('Sign', module)
  .addWithInfo('default', () => {
    const content = text('text', Default.text)
    const name = text('name', Default.name)

    return (
      <Sign
        name={name}
        text={content}
      />
    )
  })
