import React from 'react'
import { useArgs } from '@storybook/client-api'
import { Switch } from 'components/Switch'

export const SwitchStory = (args: { checked: boolean }): JSX.Element => {
  const [, updateArgs] = useArgs()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateArgs({ checked: e.target.checked })
  }

  return <Switch {...args} onChange={onChange} />
}

export default {
  title: 'Switch',
  component: Switch,
}
