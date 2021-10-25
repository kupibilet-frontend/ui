import React from 'react'
import Radio, { TValue, TProps } from 'components/Radio'
import { useArgs } from '@storybook/client-api'
import { Story } from '@storybook/react'

const RadioTemplate = (args: TProps): JSX.Element => {
  const [{ value, disabled }, updateArgs] = useArgs()

  const handleChange = (newValue: TValue) => {
    updateArgs({ value: newValue })
  }

  return (
    <div>
      <Radio
        disabled={disabled}
        label="Базовый"
        value="base"
        checked={value === 'base'}
        onChange={handleChange}
      />
      <Radio
        disabled={disabled}
        label="Трэвэл"
        value="travel"
        checked={value === 'travel'}
        onChange={handleChange}
      />
    </div>
  )
}

export const RadioGroup: Story<TProps> = RadioTemplate.bind({})
RadioGroup.args = {
  value: 'base',
}

export const DisabledRadioGroup: Story<TProps> = RadioTemplate.bind({})
DisabledRadioGroup.args = {
  value: 'base',
  disabled: true,
}

export default {
  title: 'Radio',
  component: Radio,
}
