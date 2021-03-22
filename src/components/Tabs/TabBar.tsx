import React from 'react'
import classNames from 'classnames'

interface TRenderTabArg {
  role: string,
  isActive: boolean,
  'aria-disabled': boolean,
  key: string,
  tabKey: string,
  onTabChange: (key: string) => void,
  children: React.ReactNode,
}

export interface TTabBarProps {
  children: React.ReactElement[],
  className?: string,
  renderTab: (arg: TRenderTabArg) => JSX.Element,
  activeKey: string,
  onTabChange: (tabKey: string) => void,
}

const TabBar = React.memo(({
  children,
  activeKey,
  renderTab,
  className,
  onTabChange,
}: TTabBarProps): JSX.Element => {
  const handleTabChange = (key: string): void => {
    if (key !== activeKey) {
      onTabChange(key)
    }
  }

  return (
    <div className={classNames(className)}>
      {
        React.Children.map(children, (child) => {
          if (!child) {
            return null
          }

          return renderTab({
            role: 'tab',
            isActive: activeKey === child.key,
            'aria-disabled': child.props.disabled,
            key: child.key as string,
            tabKey: child.key as string,
            onTabChange: handleTabChange,
            children: child.props.tab,
          })
        })
      }
    </div>
  )
})

export default TabBar
