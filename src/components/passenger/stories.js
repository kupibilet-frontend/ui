import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, number, boolean } from '@kadira/storybook-addon-knobs'
import PassangerPicker from './index'
import updateKnob from '../../utils/updateKnob'

const defaultDescription = {
  title: 'Взрослые',
  description: 'До 2 лет, без места',
  current: 1,
  isMax: false,
  isMin: true,
}

storiesOf('PassangerPicker', module)
  .addWithInfo('Defalut', () => {
    const title = text('title', defaultDescription.title)
    const description = text('description', defaultDescription.description)
    const value = number('value', defaultDescription.current)
    const isMax = boolean('isMax', defaultDescription.isMax)
    const isMin = boolean('isMin', defaultDescription.isMin)
    const onChange = (count) => {
      updateKnob('value', 'number', count)
    }

    return (
      <PassangerPicker
        title={title}
        description={description}
        value={value}
        isMax={isMax}
        isMin={isMin}
        onChange={onChange}
      />
    )
  })
