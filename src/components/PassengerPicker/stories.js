import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'
import PassengerPicker from 'components/PassengerPicker'
import updateKnob from 'storybook/updateKnob'

const defaults = {
  title: 'Взрослые',
  description: 'До 2 лет, без места',
  current: 1,
  isMax: false,
  isMin: true,
}

storiesOf('Complex controls/PassengerPicker', module).addWithInfo(
  'Defalut',
  `
      redux-form совместимый компонент.\n
      value в redux-form должно быть объектом вида

      \tvalue: {
        \tcounter: number,
        \tisMin: bool,
        \tisMax: bool,
      \t}
    `,
  () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const value = number('value', defaults.current)
    const isMax = boolean('isMax', defaults.isMax)
    const isMin = boolean('isMin', defaults.isMin)
    const onChange = ({ counter }) => {
      updateKnob('value', 'number', counter)
    }

    return (
      <PassengerPicker
        title={title}
        description={description}
        input={{
          value: {
            counter: value,
            isMax,
            isMin,
          },
          onChange,
        }}
      />
    )
  }
)
