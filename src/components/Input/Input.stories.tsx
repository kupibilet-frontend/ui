import React from 'react'
import { Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import ControlsGroup from 'components/ControlsGroup'
import Icon from 'components/Icon'
import { Input, TProps } from 'components/Input'
import { COLOR_NAMES } from 'components/ThemeProvider/types'


function InputTemplate<T extends HTMLInputElement | HTMLTextAreaElement>(args: TProps<T>) {
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

const DEFAULT_INPUT_PROPS = {
  type: 'text',
  name: 'input',
  placeholder: 'Только прямые рейсы',
}

// ----------------------------------------------
// Default Input
// ----------------------------------------------
export const DefaultInput: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

DefaultInput.args = DEFAULT_INPUT_PROPS


// ----------------------------------------------
// Success Input
// ----------------------------------------------
export const SuccessInput: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

SuccessInput.args = {
  ...DEFAULT_INPUT_PROPS,
  success: true,
}

// ----------------------------------------------
// Error Input
// ----------------------------------------------
export const ErrorInput: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

ErrorInput.args = {
  ...DEFAULT_INPUT_PROPS,
  error: 'Error! Fix the value in input',
}

// ----------------------------------------------
// Input with Icons
// ----------------------------------------------
export const InputWithIcons: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

InputWithIcons.args = {
  ...DEFAULT_INPUT_PROPS,
  leftIcon: <Icon name="man" fill={COLOR_NAMES.miscDark} />,
  rightIcon: <Icon name="angle" fill={COLOR_NAMES.miscDark} />,
}

// ----------------------------------------------
// Input with Icons group
// ----------------------------------------------
export const InputWithIconsGroup: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

InputWithIconsGroup.args = {
  ...DEFAULT_INPUT_PROPS,
  rightIcon: [
    <Icon name="man" fill={COLOR_NAMES.miscDark} />,
    <Icon name="angle" fill={COLOR_NAMES.miscDark} />,
  ],
}

// ----------------------------------------------
// Input as Textarea
// ----------------------------------------------
export const InputAsTextarea: Story<TProps<HTMLTextAreaElement>> = InputTemplate.bind({})

InputAsTextarea.args = {
  ...DEFAULT_INPUT_PROPS,
  isTextarea: true,
}


// ----------------------------------------------
// Input in ControlsGroup
// ----------------------------------------------
export function InputInControlsGroup(args: TProps<HTMLInputElement>): JSX.Element {
  const [{ firstValue, secondValue, thirdValue }, updateArgs] = useArgs()

  function createOnChangeHandler(field: string) {
    return function onValueChange(event: React.ChangeEvent<HTMLInputElement>): void {
      updateArgs({ [field]: event.target.value })
    }
  }

  return (
    <ControlsGroup>
      <Input
        {...args}
        value={firstValue}
        onChange={createOnChangeHandler('firstValue')}
        placeholder="First"
      />
      <Input
        {...args}
        value={secondValue}
        onChange={createOnChangeHandler('secondValue')}
        placeholder="Second"
      />
      <Input
        {...args}
        value={thirdValue}
        onChange={createOnChangeHandler('thirdValue')}
        placeholder="Third"
      />
    </ControlsGroup>
  )
}

InputInControlsGroup.args = {
  ...DEFAULT_INPUT_PROPS,
}


export default {
  component: Input,
  title: 'Input',
}
