// @flow
import React from 'react'
import { text } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import { TogglerItem, TogglerGroup } from 'components/Toggler'

const onChange = (value) => {
  updateKnob('currentValue', 'text', value)
}

const onSelectedTogglerChange = (value) => {
  updateKnob('currentSelectedValue', 'text', value)
}

export const GenderToggler = () => {
  const currentValue = text('currentValue', '')
  const errorMessage = text('errorMessage', '')

  return (
    <TogglerGroup
      currentValue={currentValue}
      onChange={onChange}
      errorMessage={errorMessage}
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

GenderToggler.story = {
  name: 'Gender Toggler',
}

export const ManyOptionsToggler = () => {
  const currentValue = text('currentValue', '')
  const errorMessage = text('errorMessage', '')

  return (
    <TogglerGroup
      currentValue={currentValue}
      onChange={onChange}
      errorMessage={errorMessage}
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

ManyOptionsToggler.story = {
  name: 'Toggler with many options',
}

export const SelectedToggler = () => {
  const currentValue = text('currentSelectedValue', '1')
  const errorMessage = text('errorMessage', '')

  return (
    <TogglerGroup
      currentValue={currentValue}
      onChange={onSelectedTogglerChange}
      errorMessage={errorMessage}
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
    </TogglerGroup>
  )
}

SelectedToggler.story = {
  name: 'Toggler with selected option',
}

export const FailedToggler = () => {
  const currentValue = text('currentValue', '')
  const errorMessage = text('errorFailedMessage', 'Выберите значение')

  return (
    <TogglerGroup
      currentValue={currentValue}
      onChange={onChange}
      errorMessage={errorMessage}
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
    </TogglerGroup>
  )
}

FailedToggler.story = {
  name: 'Toggler with error',
}

export default {
  title: 'COMPONENTS|Controls/Toggler',
  parameters: {
    component: TogglerGroup,
    componentSubtitle: `import { TogglerItem, TogglerGroup } from '@kupibilet/ui/components/Toggler'`,
  },
}
