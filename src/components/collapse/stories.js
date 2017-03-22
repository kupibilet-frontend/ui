import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Collapse } from './index'

const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

storiesOf('Collapse', module)
  .addWithInfo('Collapse', () => (
    <Collapse accordion>
      <Panel header={'This is panel header 1'} key="1">
        <p>{text}</p>
      </Panel>
      <Panel header={'This is panel header 2'} key="2">
        <p>{text}</p>
      </Panel>
      <Panel header={'This is panel header 3'} key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  ))
