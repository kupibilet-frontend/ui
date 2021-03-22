import React from 'react'
import { Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Tabs, TabPane, TabBar, Tab as StyledTab } from 'components/Tabs'
import { TTabProps } from 'components/Tabs/Tab'
import { TTabsProps } from 'components/Tabs/Tabs'

interface TTabsTemplateProps extends TTabsProps {
  showHiddenTabs: boolean,
}

const renderTab = (props: TTabProps) => (
  <StyledTab {...props} />
)

const TabsTemplate = () => {
  const [{ activeKey, showHiddenTabs, renderTabBar }, updateArgs] = useArgs()

  const onTabChange = (tabKey: string) => {
    updateArgs({ activeKey: tabKey })
  }

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
}

const defaultArgs = {
  activeKey: '2',
  showHiddenTabs: true,
  renderTabBar: (props: TTabsProps) => (
    <TabBar {...props} renderTab={renderTab} />
  ),
}

export const StyledTabs: Story<TTabsTemplateProps> = TabsTemplate.bind({})
StyledTabs.args = defaultArgs

export const ConditionalRenderedTabs: Story<TTabsTemplateProps> = TabsTemplate.bind({})
ConditionalRenderedTabs.args = {
  ...defaultArgs,
  showHiddenTabs: false,
}

export default {
  component: Tabs,
  title: 'Tabs',
}
