import React from 'react'

export interface TTabProps {
  onTabChange: (tabKey: string) => void,
  tabKey: string,
  isActive: boolean,
  children: React.ReactNode,
}

const Tab = React.memo((props: TTabProps): JSX.Element => {
  const {
    tabKey,
    onTabChange,
    children,
    ...restProps
  } = props

  const onFocus = (e: React.FocusEvent<HTMLSpanElement>) => {
    e.preventDefault()
    onTabChange(tabKey)
  }

  return (
    <span
      tabIndex={0}
      role="tab"
      {...restProps}
      onFocus={onFocus}
    >
      { children }
    </span>
  )
})

export default Tab
