import React from 'react'
import RCTabs from 'rc-tabs'

export interface TTabsProps {
  children: React.ReactElement[],
  activeKey: string,
  renderTabBar: (props: TTabsProps) => JSX.Element,
  renderTabContent?: () => JSX.Element,
  onTabChange: (tabKey: string) => void,
}

const Tabs = (props: TTabsProps): JSX.Element => {
  const renderTabBar = () => (
    props.renderTabBar(props)
  )

  const { activeKey, children, ...restProps } = props

  return (
    <RCTabs
      {...restProps}
      renderTabBar={renderTabBar}
      activeKey={activeKey}
    >
      { children }
    </RCTabs>
  )
}

export default Tabs
