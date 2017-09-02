// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Radio, RadioGroup } from 'components/Radio'
import updateKnob from 'utils/updateKnob'

const onChange = (value) => {
  updateKnob('selectedValue', 'text', value)
}

storiesOf('Controls/Radio', module)
  .addWithInfo('default', () => {
    const selectedValue = text('selectedValue', 'base')

    return (
      <RadioGroup selectedValue={selectedValue} onChange={onChange}>
        <Radio label="Базовый" value="base" />
        <Radio label="Трэвэл" value="travel" />
      </RadioGroup>
    )
  })

  .addWithInfo('disabled', () => {
    const selectedValue = text('selectedValue', 'base')

    return (
      <RadioGroup selectedValue={selectedValue} onChange={onChange}>
        <Radio label="Базовый" value="base" />
        <Radio disabled={boolean('disabled', true)} label="Трэвэл" value="travel" />
      </RadioGroup>
    )
  })
