import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Container, Input } from './styled'

const DateInput = Input.withComponent('div')

/* eslint-disable react/prop-types */
const FakeInput = ({ chidlren, onBlur, onFocus, neighboringInGroup, focused, ...props }) => {
  return (
    <Container
      neighboringInGroup={neighboringInGroup}
      focused={focused}
    >
      <DateInput {...props}>
        {props.value || props.placeholder}
      </DateInput>
    </Container>
  )
}

storiesOf('Controls/AirportInput', module)
  .addWithInfo('Fake input with value', () => {
    const placeholder = text('placeholder', 'Дата вылета')
    const value = text('value', '1 апр')

    return (
      <div style={{ width: 244 }}>
        <FakeInput
          placeholder={placeholder}
          value={value}
        />
      </div>
    )
  })
  .addWithInfo('Fake input without value', () => {
    const placeholder = text('placeholder', 'Дата вылета')

    return (
      <div style={{ width: 244 }}>
        <FakeInput
          placeholder={placeholder}
        />
      </div>
    )
  })
