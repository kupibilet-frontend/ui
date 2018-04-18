// @flow
import React from 'react'
import { TabPane as RCTabPane } from 'rc-tabs'

type Props = {
  children: React.Element<*>,
  tab: React.Element<*>,
  active: ?boolean,
}

const TabPane = ({ tab, children, active, ...props }: Props) => (
  <RCTabPane {...props} active={active} tab={tab}>
    {active && children}
  </RCTabPane>
)

export default TabPane
