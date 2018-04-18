// @flow
import React, { Component } from 'react'
import RCTabs, { TabContent } from 'rc-tabs'

type Props = {
  children: React.Element<*>,
  activeKey: string,
  renderTabBar: Function,
  renderTabContent?: Function,
}

/* eslint-disable react/prop-types */
class Tabs extends Component<{}, Props, void> {
  static defaultProps = {
    animatedTabContent: false,
    renderTabContent: () => <TabContent animated={false} />,
  }

  renderTabBar = () => this.props.renderTabBar(this.props)

  render() {
    const props = this.props
    const { activeKey, children } = props

    return (
      <RCTabs
        {...props}
        renderTabBar={this.renderTabBar}
        renderTabContent={props.renderTabContent}
        activeKey={activeKey}
      >
        {children}
      </RCTabs>
    )
  }
}

export default Tabs
