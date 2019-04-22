// @flow
import * as React from 'react'

/* eslint-disable react/prop-types */
type Props = {
  children: React.Node,
  className?: string,
  renderTab: Function,
  activeKey: string,
  onTabChange: string => void,
}

class TabBar extends React.PureComponent<Props> {
  static defaultProps = {
    className: null,
  }

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
        {
          React.Children.map(children, (child) => {
            if (child) {
              return renderTab({
                role: 'tab',
                isActive: activeKey === child.key,
                'aria-disabled': child.props.disabled,
                key: child.key,
                tabKey: child.key,
                onTabChange: this.onTabChange,
                children: child.props.tab,
              })
            }
            return null
          })
        }
      </div>
    )
  }
}

export default TabBar
