import React from 'react'
import { useArgs } from '@storybook/client-api'
import { TogglerItem, TogglerGroup } from 'components/Toggler'

interface TTogglerProps {
  currentValue: string,
  errorMessage?: string,
}

export const GenderToggler = (args: TTogglerProps): JSX.Element => {
  const [{ currentValue, errorMessage }, updateArgs] = useArgs()

  function onChange(value: string): void {
    updateArgs({ currentValue: value })
  }

  return (
    <TogglerGroup
      currentValue={currentValue}
      errorMessage={errorMessage}
      onChange={onChange}
      name="gender"
    >
      <TogglerItem value="male">
        М
      </TogglerItem>
      <TogglerItem value="female">
        Ж
      </TogglerItem>
    </TogglerGroup>
  )
}

GenderToggler.args = {
  currentValue: 'male',
}

export const ManyOptionsToggler = (args: TTogglerProps): JSX.Element => {
  const [{ currentValue, errorMessage }, updateArgs] = useArgs()

  function onChange(value: string): void {
    updateArgs({ currentValue: value })
  }

  return (
    <TogglerGroup
      currentValue={currentValue}
      errorMessage={errorMessage}
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

export const FailedToggler = (args: TTogglerProps): JSX.Element => {
  const [{ currentValue, errorMessage }] = useArgs()

  return (
    <TogglerGroup
      currentValue={currentValue}
      onChange={() => null}
      name="number"
      errorMessage={errorMessage}
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
