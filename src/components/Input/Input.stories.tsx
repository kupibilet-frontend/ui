import React from 'react'
import { Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import Icon from 'components/Icon'
import { Input, TProps } from 'components/Input'
import { InnerInput } from 'components/Input/styled'
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
const DefaultInput: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

DefaultInput.args = DEFAULT_INPUT_PROPS

// ----------------------------------------------
// Error Input
// ----------------------------------------------
const ErrorInput: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

ErrorInput.args = {
  ...DEFAULT_INPUT_PROPS,
  error: 'Error! Fix the value in input',
}

// ----------------------------------------------
// Input with Icons
// ----------------------------------------------
const InputWithIcons: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

InputWithIcons.args = {
  ...DEFAULT_INPUT_PROPS,
  leftIcon: <Icon name="man" fill={COLOR_NAMES.miscDark} />,
  rightIcon: <Icon name="angle" fill={COLOR_NAMES.miscDark} />,
}

// ----------------------------------------------
// Input with Icons group
// ----------------------------------------------
const InputWithIconsGroup: Story<TProps<HTMLInputElement>> = InputTemplate.bind({})

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
const InputAsTextarea: Story<TProps<HTMLTextAreaElement>> = InputTemplate.bind({})

InputAsTextarea.args = {
  ...DEFAULT_INPUT_PROPS,
  isTextarea: true,
}


// ----------------------------------------------
// Input in ControlsGroup
// ----------------------------------------------
function InputInControlsGroup(args: TProps<HTMLInputElement>): JSX.Element {
  const [{ firstValue, secondValue, thirdValue }, updateArgs] = useArgs()

  function createOnChangeHandler(field: string) {
    return function onValueChange(event: React.ChangeEvent<HTMLInputElement>): void {
      updateArgs({ [field]: event.target.value })
    }
  }

  return (
    <Input {...args}>
      <InnerInput
        inputSize="normal"
        value={firstValue}
        onChange={createOnChangeHandler('firstValue')}
        placeholder="First"
      />
      <InnerInput
        inputSize="normal"
        value={secondValue}
        onChange={createOnChangeHandler('secondValue')}
        placeholder="Second"
      />
      <InnerInput
        inputSize="normal"
        value={thirdValue}
        onChange={createOnChangeHandler('thirdValue')}
        placeholder="Third"
      />
    </Input>
  )
}

InputInControlsGroup.args = {
  ...DEFAULT_INPUT_PROPS,
}

// ----------------------------------------------
// Input in ControlsGroup Error
// ----------------------------------------------
const InputInControlsGroupError: Story<TProps<HTMLInputElement>> = InputInControlsGroup.bind({})

InputInControlsGroupError.args = {
  ...DEFAULT_INPUT_PROPS,
  error: 'Error! Please enter correct data',
}

export {
  DefaultInput,
  ErrorInput,
  InputWithIcons,
  InputWithIconsGroup,
  InputAsTextarea,
  InputInControlsGroup,
  InputInControlsGroupError,
}

export default {
  component: Input,
  title: 'Input',
}
