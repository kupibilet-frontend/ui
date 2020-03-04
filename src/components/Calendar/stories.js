// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from '@kupibilet/moment'
import styled from 'styled-components'
// import { text } from '@storybook/addon-knobs'
// import updateKnob from 'storybook/updateKnob'
import Calendar from 'components/Calendar'
import CalendarDay from 'components/CalendarDay'


const ContainerWithFixedSize = styled.div`
  height: 365px;
  max-width: 700px;
  border: 1px solid #eee;
`
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

const renderDay = (day) => (
  <CalendarDay
    day={moment(day)}
    isCheap={(Number(moment(day).format('DDD')) % 9 === 0)}
    cost={Math.floor(moment(day).format('DDD') * 321 % 100) * 100}
  />
)

storiesOf('COMPONENTS|Calendar', module)
  .add('Default', () => (
    <ContainerWithFixedSize>
      <Calendar
        renderDay={renderDay}
        selectedDays={[new Date(2020, 3, 19), new Date(2020, 3, 25)]}
      />
    </ContainerWithFixedSize>
  ))
