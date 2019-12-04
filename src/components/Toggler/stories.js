import React from 'react'
import { text } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import { TogglerItem, TogglerGroup } from 'components/Toggler'

const onChange = (value) => {
  updateKnob('currentValue', 'text', value)
}

export const Toggler = () => {
  const currentValue = text('currentValue', '')
  const errorMessage = text('errorMessage', '')

  return (
    <TogglerGroup
      currentValue={currentValue}
      onChange={onChange}
      errorMessage={errorMessage}
    >
      <TogglerItem value="male">
        М
      </TogglerItem>
      <TogglerItem value="hz">
         ?
      </TogglerItem>
      <TogglerItem value="female">
        Ж
      </TogglerItem>
    </TogglerGroup>
  )
}

Toggler.story = {
  name: 'simple Toggler',
}

export default {
  title: 'COMPONENTS|Controls/Toggler',
  parameters: {
    component: Toggler,
    componentSubtitle: `import { TogglerItem, TogglerGroup } '@kupibilet/ui/components/Toggler'`,
  },
}
