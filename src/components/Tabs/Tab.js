import React from 'react'

/* eslint-disable react/prop-types */
type Props = {
  onTabChange: string => void,
  isActive: boolean,
}

export default class Tab extends React.PureComponent<void, Props, void> {
  onFocus = (e: MouseEvent) => {
    const { tabKey, onTabChange } = this.props
    e.preventDefault()
    onTabChange(tabKey)
  }

  render() {
    const { isActive, tabKey, onTabChange, children, ...props } = this.props

    return (
      <span tabIndex="0" role="tab" {...props} onFocus={this.onFocus}>
        {children}
      </span>
    )
  }
}
