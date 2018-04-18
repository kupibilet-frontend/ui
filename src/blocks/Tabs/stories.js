import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Tabs, TabPane, TabBar, Tab as StyledTab } from 'blocks/Tabs'
import updateKnob from 'storybook/updateKnob'

/* eslint-disable react/prop-types */
const renderTab = props => <StyledTab {...props} />

const renderTabBar = props => <TabBar {...props} renderTab={renderTab} />

const onTabChange = key => {
  updateKnob('activeKey', 'text', key)
}

storiesOf('Blocks', module).addWithInfo(
  'Styled Tabs',
  `
    \`\`\`
    const renderTab = (props) => (
      <Tab {...props} />
    )

    const renderTabBar = (props) => (
      <TabBar {...props} renderTab={renderTab} />
    )
    \`\`\`
  `,
  () => {
    const activeKey = text('activeKey', '2')

    return (
      <Tabs
        activeKey={activeKey}
        renderTabBar={renderTabBar}
        onTabChange={onTabChange}
      >
        <TabPane tab="1. Бронирование" key="1">
          First tab
        </TabPane>
        <TabPane tab="2. Оплата" key="2">
          Second tab
        </TabPane>
        <TabPane tab="3. Получение билета" key="3">
          Third tab
        </TabPane>
      </Tabs>
    )
  }
)
