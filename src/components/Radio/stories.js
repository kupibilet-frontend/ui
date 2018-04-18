// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Radio, RadioGroup } from 'components/Radio'
import updateKnob from 'storybook/updateKnob'

const onChange = value => {
  updateKnob('selectedValue', 'text', value)
}

storiesOf('Controls/Radio', module).addWithInfo('default', () => {
  const selectedValue = text('selectedValue', 'base')
  const disabled = boolean('disabled', false)

  return (
    <RadioGroup selectedValue={selectedValue} onChange={onChange}>
      <Radio disabled={disabled} label="Базовый" value="base" />
      <Radio disabled={disabled} label="Трэвэл" value="travel" />
    </RadioGroup>
  )
})
