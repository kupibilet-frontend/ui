import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Collapse from './index'
import Box from '../box'

const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

storiesOf('Collapse', module)
  .addWithInfo('Collapse', () => (
    <Box>
      <Collapse
        accordion
      >
        <Panel
          header={'Вылет'}
          key="1"
          showArrow={false}
        >
          {text}
        </Panel>
        <Panel header={'Прилет'} key="2">
          {text}
        </Panel>
        <Panel header={'Пересадки'} key="3">
          {text}
        </Panel>
      </Collapse>
    </Box>
  ))
