import React from 'react'

import { Checkbox, TProps } from 'components/Checkbox'
import { useArgs } from '@storybook/client-api'
import { Story } from '@storybook/react'

export const Default = (args: TProps): JSX.Element => {
  const [{ checked, disabled, labelPlacement, labelProps }, updateArgs] = useArgs()

  const handleChange = (): void => {
    updateArgs({ checked: !checked })
  }

  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      labelPlacement={labelPlacement}
      labelProps={labelProps}
    >
      Авиабилеты
    </Checkbox>
  )
}

export const DisabledCheckbox: Story<TProps> = Default.bind({})
DisabledCheckbox.args = {
  disabled: true,
}

export default {
  title: 'Checkbox',
  component: Checkbox,
}
