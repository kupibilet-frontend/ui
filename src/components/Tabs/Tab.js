import React, { PureComponent } from 'react'

import createE2EId from '../../utils/createE2EId'
/* eslint-disable react/prop-types */
type Props = {
  onTabChange: (string) => void,
  tabKey: string,
  isActive: boolean,
  children: React.Node,
}

export default class Tab extends PureComponent<Props, void> {
  onFocus = (e: MouseEvent) => {
    const { tabKey, onTabChange } = this.props
    e.preventDefault()
    onTabChange(tabKey)
  }

  render() {
    const { isActive, tabKey, onTabChange, children, ...props } = this.props
    const tabName = typeof children === 'string' && !/[0-9]/.test(children) ? children : 'undefined'
    return (
      <span
        tabIndex="0"
        {...createE2EId(`tabs.${tabName}`)}
        role="tab"
        {...props}
        onFocus={this.onFocus}
      >
        { children }
      </span>
    )
  }
}
