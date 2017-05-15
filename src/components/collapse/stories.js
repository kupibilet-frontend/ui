import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Collapse from './index'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

storiesOf('Collapse', module)
  .addWithInfo('Default', () => (
    <div style={{ width: '252px' }}>
      <Collapse>
        <Panel header="Foo">{text}</Panel>
        <Panel header="Bar">{text}</Panel>
        <Panel header="Mdaaaaa">{text}</Panel>
      </Collapse>
    </div>
  ))
  .addWithInfo('Accordion', () => (
    <div style={{ width: '252px' }}>
      <Collapse accordion>
        <Panel header="Foo">{text}</Panel>
        <Panel header="Bar">{text}</Panel>
        <Panel header="Mdaaaaa">{text}</Panel>
      </Collapse>
    </div>
  ))
  .addWithInfo('Default active panel', () => (
    <div style={{ width: '252px' }}>
      <Collapse defaultActiveKey="foo">
        <Panel header="Foo" key="foo">{text}</Panel>
        <Panel header="Bar">{text}</Panel>
        <Panel header="Mdaaaaa">{text}</Panel>
      </Collapse>
    </div>
  ))
