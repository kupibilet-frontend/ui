import React from 'react'
import { Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import Icon from 'components/Icon'
import { Input } from 'components/Input'
import { TInputProps } from 'components/Input/types'

function InputTemplate<T extends HTMLInputElement | HTMLTextAreaElement>(args: TInputProps<T>) {
  const [{ value }, updateArgs] = useArgs()

  function onValueChange(event: React.ChangeEvent<T>): void {
    updateArgs({ value: event.target.value })
  }

  return (
    <Input
      value={value}
      onChange={onValueChange}
      {...args}
    />
  )
}

const DEFAULT_INPUT_PROPS: TInputProps<HTMLInputElement> = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
}

const DEFAULT_TEXTAREA_PROPS: TInputProps<HTMLTextAreaElement> = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
}

// ----------------------------------------------
// Default Input
// ----------------------------------------------
const DefaultInput: Story<TInputProps<HTMLInputElement>> = InputTemplate.bind({})

DefaultInput.args = DEFAULT_INPUT_PROPS

// ----------------------------------------------
// Error Input
// ----------------------------------------------
const ErrorInput: Story<TInputProps<HTMLInputElement>> = InputTemplate.bind({})

ErrorInput.args = {
  ...DEFAULT_INPUT_PROPS,
  error: 'Error! Fix the value in input',
  helperText: 'Helper text here',
}

// ----------------------------------------------
// Disabled Input
// ----------------------------------------------
const DisabledInput: Story<TInputProps<HTMLInputElement>> = InputTemplate.bind({})

DisabledInput.args = {
  ...DEFAULT_INPUT_PROPS,
  disabled: true,
}

// ----------------------------------------------
// Input with Icons
// ----------------------------------------------
const InputWithIcons: Story<TInputProps<HTMLInputElement>> = InputTemplate.bind({})

InputWithIcons.args = {
  ...DEFAULT_INPUT_PROPS,
  leftIcon: <Icon name="man" fill="misc500" />,
  rightIcon: <Icon name="angle" fill="misc500" />,
}

// ----------------------------------------------
// Input with Icons group
// ----------------------------------------------
const InputWithIconsGroup: Story<TInputProps<HTMLInputElement>> = InputTemplate.bind({})

InputWithIconsGroup.args = {
  ...DEFAULT_INPUT_PROPS,
  rightIcon: [
    <Icon name="man" fill="misc500" />,
    <Icon name="angle" fill="misc500" />,
  ],
}

// ----------------------------------------------
// Input as Textarea
// ----------------------------------------------
const InputAsTextarea: Story<TInputProps<HTMLTextAreaElement>> = InputTemplate.bind({})

InputAsTextarea.args = {
  ...DEFAULT_TEXTAREA_PROPS,
  isTextarea: true,
}

export {
  DefaultInput,
  ErrorInput,
  DisabledInput,
  InputWithIcons,
  InputWithIconsGroup,
  InputAsTextarea,
}

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: 'radio',
    },
  },
}
