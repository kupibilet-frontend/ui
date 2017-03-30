import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Collapse, { Panel } from './index'
import Box from '../box'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

storiesOf('Collapse', module)
  .addWithInfo('Collapse', () => (
    <div style={{ width: '252px' }}>
      <Box>
        <div style={{ padding: '18px' }}>Вылет и прилет</div>
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
    </div>
  ))
