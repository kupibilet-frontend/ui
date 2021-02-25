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

export const SecondaryToggler = (): ReactNode => {
  const currentValue = text('currentValueSecondary', 'none')
  const errorMessage = text('errorMessage', '')
  const onChange = (value: string) => updateKnob('currentValueSecondary', 'text', value)

  return (
    <TogglerGroup
      onChange={onChange}
      currentValue={currentValue}
      name="luggage"
      errorMessage={errorMessage}
      variant="secondary"
    >
      <TogglerItem value="none">
        нет
      </TogglerItem>
      <TogglerItem value="withLuggage">
        +&nbsp;2 390 ₽
      </TogglerItem>
      <TogglerItem value="withMoreLuggage">
        +&nbsp;17 690 ₽
      </TogglerItem>
    </TogglerGroup>
  )
}

SecondaryToggler.story = {
  name: 'Secondary toggler',
}

export const TooltipToggler = (): ReactNode => {
  const currentValue = text('currentValueTooltip', 'none')
  const errorMessage = text('errorMessage', '')
  const onChange = (value: string) => updateKnob('currentValueTooltip', 'text', value)

  return (
    <TogglerGroup
      onChange={onChange}
      currentValue={currentValue}
      name="luggage"
      errorMessage={errorMessage}
      variant="secondary"
    >
      <TogglerItem
        tooltipContent="Без багажа"
        value="none"
      >
        нет
      </TogglerItem>
      <TogglerItem
        tooltipContent="1 место багажа до 23 кг"
        value="withLuggage"
      >
        +&nbsp;2 390 ₽
      </TogglerItem>
      <TogglerItem
        tooltipContent="Безлимит багажа"
        value="withMoreLuggage"
      >
        +&nbsp;17 690 ₽
      </TogglerItem>
    </TogglerGroup>
  )
}

TooltipToggler.story = {
  name: 'Toggler with tooltip',
}

export default {
  title: 'COMPONENTS|Controls/Toggler',
  parameters: {
    component: TogglerGroup,
    componentSubtitle: `import { TogglerItem, TogglerGroup } from '@kupibilet/ui/components/Toggler'`,
  },
}
