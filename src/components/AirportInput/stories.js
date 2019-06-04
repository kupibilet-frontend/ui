import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Container, Input } from './styled'
import AirportInput from './index'

/* eslint-disable react/prop-types */
const FakeInput = ({ chidlren, onBlur, onFocus, neighboringInGroup, focused, ...props }) => {
  return (
    <Container
      neighboringInGroup={neighboringInGroup}
      focused={focused}
    >
      <Input as="div" {...props}>
        {props.value || props.placeholder}
      </Input>
    </Container>
  )
}

storiesOf('COMPONENTS|Controls/AirportInput', module)
  .add('default', () => {
    const placeholder = text('placeholder', 'Дата вылета')
    const value = text('value', '1 апр')

    return (
      <div style={{ width: 244 }}>
        <AirportInput
          placeholder={placeholder}
          value={value}
        />
      </div>
    )
  })
  .add('Fake input, based on div', () => {
    const placeholder = text('placeholder', 'Дата вылета')
    const value = text('value', '1 апр')

    return (
      <div style={{ width: 244 }}>
        <div style={{ paddingBottom: '20px' }}>
          <FakeInput
            placeholder={placeholder}
          />
        </div>
        <FakeInput
          placeholder={placeholder}
          value={value}
        />
      </div>
    )
  })
