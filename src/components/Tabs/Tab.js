// @flow
import React, { PureComponent } from 'react'
import type { Node } from 'react'
import createE2EId from '../../utils/createE2EId'

type Props = {
  onTabChange: (string) => void,
  tabKey: string,
  isActive: boolean,
  children: Node,
}

export default class Tab extends PureComponent<Props, void> {
  onFocus = (e: MouseEvent) => {
    const { tabKey, onTabChange } = this.props
    e.preventDefault()
    onTabChange(tabKey)
  }

  render() {
    const { isActive, tabKey, onTabChange, children, ...props } = this.props
    const tabName = typeof children === 'string' ? children : 'undefined'

    return (
      <span tabIndex="0" {...createE2EId(`tabs.${tabName}`)} role="tab" {...props} onFocus={this.onFocus}>
        { children }
      </span>
    )
  }
}
