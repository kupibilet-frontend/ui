// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text } from '@storybook/addon-knobs'
// import updateKnob from 'storybook/updateKnob'
import Calendar from 'components/Calendar'

// const onChange = (value) => {
//   updateKnob('currentValue', 'text', value)
// }

// const onSelectedTogglerChange = (value) => {
//   updateKnob('currentSelectedValue', 'text', value)
// }

// export const CalendarStory = () => {
//   return (
//     <Calendar />
//   )
// }

// CalendarStory.story = {
//   name: 'Calendar',
// }

// export default {
//   title: 'COMPONENTS|Calendar',
//   parameters: {
//     component: Calendar,
//     componentSubtitle: `import Calendar from '@kupibilet/ui/components/Calendar'`,
//   },
// }


storiesOf('COMPONENTS|Calendar', module)
  .add('Default', () => (
    <Calendar />
  ))
