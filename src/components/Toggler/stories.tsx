// @flow
import React, { ReactNode } from 'react'
import { text } from '@storybook/addon-knobs'
import { TogglerItem, TogglerGroup } from 'components/Toggler'

// @ts-ignore, TODO: add storybook folder to typescript settings?
import updateKnob from 'storybook/updateKnob'

export const GenderToggler = (): ReactNode => {
  const currentValue = text('currentValueGender', '')
  const errorMessage = text('errorMessage', '')
  const onChange = (value: string) => updateKnob('currentValueGender', 'text', value)

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

export const ManyOptionsToggler = (): ReactNode => {
  const currentValue = text('currentValueManyOptions', '')
  const errorMessage = text('errorMessage', '')
  const onChange = (value: string) => updateKnob('currentValueManyOptions', 'text', value)

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

export const SelectedToggler = (): ReactNode => {
  const currentValue = text('currentValueSelected', '1')
  const errorMessage = text('errorMessage', '')
  const onChange = (value: string) => updateKnob('currentValueSelected', 'text', value)

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

SelectedToggler.story = {
  name: 'Toggler with selected option',
}

export const FailedToggler = (): ReactNode => {
  const currentValue = text('currentValueFailed', '')
  const errorMessage = text('errorFailedMessage', 'Выберите значение')
  const onChange = (value: string) => updateKnob('currentValueFailed', 'text', value)

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
