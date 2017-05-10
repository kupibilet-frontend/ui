import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, number, boolean } from '@kadira/storybook-addon-knobs'
import Passenger from './index'

const defaultDescription = {
  title: 'Взрослые',
  description: 'До 2 лет, без места',
  current: 1,
  disabled: 'disabled-min',
}

storiesOf('Passenger', module)
  .addWithInfo('Defalut', () => {
    const title = text('title', defaultDescription.title)
    const description = text('description', defaultDescription.description)
    let current = number('current', defaultDescription.current)
    const disabled = text('disabled', defaultDescription.disabled)
    const decrement = () => {
      current -= 1
    }
    const increment = () => {
      current += 1
    }

    return (
      <Passenger
        title={title}
        description={description}
        current={current}
        disabled={disabled}
        decrement={decrement}
        increment={increment}
      />
    )
  })
