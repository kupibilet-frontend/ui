import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, select } from '@kadira/storybook-addon-knobs'
import Badge from './index'

const Default = {
  name: 'attention',
  text: '!',
}

const sizesSelect = (defaultValue = 'large') => select(
  'size',
  {
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
  },
  defaultValue,
)

storiesOf('Badge', module)
  .addWithInfo('default', () => {
    const content = text('text', Default.text)
    const name = text('name', Default.name)

    return (
      <Badge
        name={name}
        text={content}
      />
    )
  })
  .addWithInfo('in input', () => {
    const content = text('text', Default.text)
    const name = text('name', Default.name)

    return (
      <Badge
        name={`badge_input ${name}`}
        text={content}
        size={sizesSelect()}
      />
    )
  })
