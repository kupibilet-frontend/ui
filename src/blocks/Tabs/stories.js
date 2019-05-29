import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Tabs, TabPane, TabBar, Tab as StyledTab } from 'blocks/Tabs'
import updateKnob from 'storybook/updateKnob'

/* eslint-disable react/prop-types */
const renderTab = (props) => (
  <StyledTab {...props} />
)

const renderTabBar = (props) => (
  <TabBar {...props} renderTab={renderTab} />
)

const onTabChange = (key) => {
  updateKnob('activeKey', 'text', key)
}

storiesOf('BLOCKS|Tabs', module)
  .add(
    'Styled Tabs',
    () => {
      const activeKey = text('activeKey', '2')

      return (
        <Tabs
          activeKey={activeKey}
          renderTabBar={renderTabBar}
          onTabChange={onTabChange}
        >
          <TabPane tab="1. Бронирование" key="1">First tab</TabPane>
          <TabPane tab="2. Оплата" key="2">Second tab</TabPane>
          <TabPane tab="3. Получение билета" key="3">Third tab</TabPane>
        </Tabs>
      )
    }, {
      info: `
        \`\`\`
        const renderTab = (props) => (
          <Tab {...props} />
        )
    
        const renderTabBar = (props) => (
          <TabBar {...props} renderTab={renderTab} />
        )
        \`\`\`
      `,
    },
  )
  .add(
    'Conditional rendered Tabs',
    () => {
      const activeKey = text('activeKey', '1')
      const showHiddenTabs = boolean('show', false)

      return (
        <Tabs
          activeKey={activeKey}
          renderTabBar={renderTabBar}
          onTabChange={onTabChange}
        >
          <TabPane tab="1. Бронирование" key="1">First tab</TabPane>
          { showHiddenTabs && <TabPane tab="2. Оплата" key="2">Second tab</TabPane> }
          { showHiddenTabs && <TabPane tab="3. Получение билета" key="3">Third tab</TabPane> }
        </Tabs>
      )
    }, {
      info: `
        \`\`\`
        const renderTab = (props) => (
          <Tab {...props} />
        )
    
        const renderTabBar = (props) => (
          <TabBar {...props} renderTab={renderTab} />
        )
        \`\`\`
      `,
    },
  )
