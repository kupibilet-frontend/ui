// @flow
import React from 'react'

/* eslint-disable react/prop-types */
type Props = {
  children: React.Element<*>,
  className?: string,
  renderTab: Function,
  activeKey: string,
  onTabChange: string => void,
}

class TabBar extends React.PureComponent<void, Props, void> {
  onTabChange = (key: string) => {
    const { activeKey, onTabChange } = this.props

    if (key !== activeKey) {
      onTabChange(key)
    }
  }

  render() {
    const { children, activeKey, renderTab, className } = this.props

    return (
      <div className={className}>
        {React.Children.map(children, child =>
          renderTab({
            role: 'tab',
            isActive: activeKey === child.key,
            'aria-disabled': child.props.disabled,
            key: child.key,
            tabKey: child.key,
            onTabChange: this.onTabChange,
            children: child.props.tab,
          })
        )}
      </div>
    )
  }
}

export default TabBar
