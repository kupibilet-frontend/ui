import React from 'react'

import { Checkbox, TProps } from 'components/Checkbox'
import { useArgs } from '@storybook/client-api'

export const Default = (args: TProps): JSX.Element => {
  const [{ checked, disabled }, updateArgs] = useArgs()

  const handleChange = (): void => {
    updateArgs({ checked: !checked })
  }

  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
    >
      Авиабилеты
    </Checkbox>
  )
}

export default {
  title: 'Checkbox',
  component: Checkbox,
}
