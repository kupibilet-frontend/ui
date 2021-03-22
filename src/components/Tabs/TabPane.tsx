import React from 'react'
import { TabPane as RCTabPane } from 'rc-tabs'

export interface TTabPaneProps {
  children: React.ReactNode,
  tab: React.ReactNode,
  active?: boolean,
}

const TabPane = ({
  tab,
  children,
  active,
  ...props
}: TTabPaneProps): JSX.Element => (
  <RCTabPane
    {...props}
    active={active}
    tab={tab}
  >
    { active && children }
  </RCTabPane>
)

export default TabPane
