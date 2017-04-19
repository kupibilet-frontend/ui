import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, select } from '@kadira/storybook-addon-knobs'
import InputSign from './index'

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

storiesOf('InputSign', module)
  .addWithInfo('default', () => {
    const content = text('text', Default.text)
    const name = text('name', Default.name)

    return (
      <InputSign
        name={name}
        text={content}
        size={sizesSelect()}
      />
    )
  })
