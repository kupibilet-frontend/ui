// @flow

// @flow
import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import { Radio, RadioGroup } from 'components/Radio'

const onChange = (value) => {
  updateKnob('selectedValue', 'text', value)
}

export const RadioGroupStory = () => {
  const selectedValue = text('selectedValue', 'base')
  const disabled = boolean('disabled', false)

  return (
    <RadioGroup selectedValue={selectedValue} onChange={onChange}>
      <Radio disabled={disabled} label="Базовый" value="base" />
      <Radio disabled={disabled} label="Трэвэл" value="travel" />
    </RadioGroup>
  )
}

RadioGroupStory.story = {
  name: 'Radio Group',
}


export default {
  title: 'COMPONENTS|Controls/Radio',
  parameters: {
    component: RadioGroup,
    componentSubtitle: `import { Radio, RadioGroup } from '@kupibilet/ui/components/Radio'`,
  },
}
