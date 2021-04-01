import React from 'react'
import { Story } from '@storybook/react'
import Popover from 'components/Popover'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { TPopoverProps } from './types'


const CarrotButton = () => (
  <Button leftIcon={<Icon name="carrot_monochrome" inheritColor />}>
    Hover me!
  </Button>
)

const CONTENT = `
  A global distribution system (GDS) is a computerised network system owned or operated
  by a company that enables transactions between travel industry service providers,
  mainly airlines, hotels, car rental companies, and travel agencies
`

const DEFAULT_ARGS = {
  content: CONTENT,
}

// ----------------------------------------------
// Default Popover
// ----------------------------------------------
function DefaultPopoverStory(args: TPopoverProps): JSX.Element {
  return (
    <Popover {...args}>
      <CarrotButton />
    </Popover>
  )
}

DefaultPopoverStory.args = DEFAULT_ARGS

// ----------------------------------------------
// Top placement Popover
// ----------------------------------------------
const TopPlacedPopover: Story<TPopoverProps> = DefaultPopoverStory.bind({})

TopPlacedPopover.args = {
  ...DEFAULT_ARGS,
  placement: 'top',
}

// ----------------------------------------------
// Big Popover
// ----------------------------------------------
const LargePopover: Story<TPopoverProps> = DefaultPopoverStory.bind({})

LargePopover.args = {
  ...DEFAULT_ARGS,
  size: 'large',
}

export {
  DefaultPopoverStory,
  TopPlacedPopover,
  LargePopover,
}

export default {
  title: 'Popover',
  component: Popover,
}
