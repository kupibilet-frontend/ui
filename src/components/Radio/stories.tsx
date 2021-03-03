import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
// @ts-ignore TODO: fix this
import updateKnob from 'storybook/updateKnob'
import Radio, { TValue } from 'components/Radio'


const onChange = (value: TValue) => {
  updateKnob('selectedValue', 'text', value)
}

storiesOf('COMPONENTS|Controls/Radio', module)
  .add('Radio Group', () => {
    const selectedValue = text('selectedValue', 'base')
    const disabled = boolean('disabled', false)

    return (
      <div>
        <Radio
          disabled={disabled}
          label="Базовый"
          value="base"
          checked={selectedValue === 'base'}
          onChange={onChange}
        />
        <Radio
          disabled={disabled}
          label="Трэвэл"
          value="travel"
          checked={selectedValue === 'travel'}
          onChange={onChange}
        />
      </div>
    )
  })
