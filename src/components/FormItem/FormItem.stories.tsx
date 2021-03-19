import React from 'react'
import { useArgs } from '@storybook/client-api'
import { Input } from 'components/Input'
import FormItem, { TProps } from 'components/FormItem'

interface TFormItemStoryProps extends TProps {
  inputValue: string,
}

export function FormItemStory(args: TFormItemStoryProps): JSX.Element {
  const [{ inputValue }, updateArgs] = useArgs()

  function onValueChange(event: React.ChangeEvent<HTMLInputElement>): void {
    updateArgs({ inputValue: event.target.value })
  }

  return (
    <FormItem {...args}>
      <Input value={inputValue} onChange={onValueChange} />
    </FormItem>
  )
}

FormItemStory.args = {
  label: 'First Name',
  inputValue: 'Vladimir',
}

export default {
  component: FormItem,
  title: 'FormItem',
}
