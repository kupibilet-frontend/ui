import React from 'react'
import { Story } from '@storybook/react'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { TButtonProps } from './types'

const defaultProps: TButtonProps = {
  disabled: false,
  variant: 'primary',
}

const Template: Story<TButtonProps> = (args) => (
  <Button {...args}>
    Авиабилеты
  </Button>
)

export const DefaultButton = Template.bind({})
DefaultButton.args = { ...defaultProps }

export const WithCustomIcons = Template.bind({})
WithCustomIcons.args = {
  ...defaultProps,
  leftIcon: <Icon name="plane" inheritColor />,
  rightIcon: <Icon name="hand-baggage" inheritColor />,
}

export const WithLeftAndRightIcons = Template.bind({})
WithLeftAndRightIcons.args = {
  ...defaultProps,
  leftIcon: 'hand-baggage',
  rightIcon: 'plane',
}

export const IconButton = Template.bind({})
IconButton.args = {
  ...defaultProps,
  icon: <Icon name="carrot_monochrome" inheritColor />,
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  ...defaultProps,
  icon: 'spinner',
}

export const LinkButton = Template.bind({})
LinkButton.args = {
  ...defaultProps,
  href: '/',
  target: '_blank',
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
    variant: {
      options: ['primary', 'secondary', 'link'],
      control: 'radio',
    },
  },
}
