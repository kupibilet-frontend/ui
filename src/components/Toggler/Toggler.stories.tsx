import React from 'react'
import { Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { TogglerItem, TogglerGroup } from 'components/Toggler'

interface TTogglerProps {
  currentValue: string,
  errorMessage?: string,
}

export const GenderToggler = (args: TTogglerProps): JSX.Element => {
  const [, updateArgs] = useArgs()

  function onChange(value: string): void {
    updateArgs({ currentValue: value })
  }

  return (
    <TogglerGroup
      {...args}
      onChange={onChange}
      name="gender"
    >
      <TogglerItem value="male">
        Мужской
      </TogglerItem>
      <TogglerItem value="female">
        Женский
      </TogglerItem>
    </TogglerGroup>
  )
}

GenderToggler.args = {
  currentValue: 'male',
}

export const ManyOptionsToggler = (args: TTogglerProps): JSX.Element => {
  const [, updateArgs] = useArgs()

  function onChange(value: string): void {
    updateArgs({ currentValue: value })
  }

  return (
    <TogglerGroup
      {...args}
      onChange={onChange}
      name="number"
    >
      <TogglerItem value="1">
        1
      </TogglerItem>
      <TogglerItem value="2">
          2
      </TogglerItem>
      <TogglerItem value="3">
        3
      </TogglerItem>
      <TogglerItem value="4">
        4
      </TogglerItem>
    </TogglerGroup>
  )
}

ManyOptionsToggler.args = {
  currentValue: '2',
}

export const FailedToggler: Story<TTogglerProps> = ManyOptionsToggler.bind({})

FailedToggler.args = {
  errorMessage: 'Выберите значение',
}

export default {
  component: GenderToggler,
  title: 'Toggler',
  parameters: {
    componentSubtitle: `import { TogglerItem, TogglerGroup } from '@kupibilet/ui/components/Toggler'`,
  },
}
