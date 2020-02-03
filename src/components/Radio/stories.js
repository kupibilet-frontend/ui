// @flow

// @flow
import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Radio from 'components/Radio'

const onChange = (value) => {
  updateKnob('selectedValue', 'text', value)
}

export const RadioGroupStory = () => {
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
        label="Трэвэл"
        value="travel"
        checked={selectedValue === 'travel'}
        onChange={onChange}
      />
    </div>
  )
}

RadioGroupStory.story = {
  name: 'Radio Group',
}


export default {
  title: 'COMPONENTS|Controls/Radio',
  parameters: {
    component: Radio,
    componentSubtitle: `import Radio from '@kupibilet/ui/components/Radio'`,
  },
}
