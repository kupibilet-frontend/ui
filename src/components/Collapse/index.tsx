
import React, { useCallback, useState, useEffect } from 'react'
import CollapsePanel from './CollapsePanel'


interface TProps {
  activeKey?: string[],
  defaultActiveKey?: string[],
  isAccordion?: boolean,
  onChange?: (activeKey: string[]) => void,
  children: React.ReactElement[],
  disabled?: boolean,
}


/**
 * Collapse component implements logic for storing opened panel indexes in its state,
 * but in certain scenarios we want to pass opened panel indexes as props
 *
 * If component has activeKey prop, it should use it, otherwise it should use inner state
 * If defaultActiveKey is provided, we should initialize inner store with these values
 */
function Collapse(props: TProps): JSX.Element {
  const { isAccordion, onChange, defaultActiveKey, disabled, ...restProps } = props

  const initialInnerActiveKey = defaultActiveKey || []
  const [innerActiveKey, setInnerActiveKey] = useState<string[]>(initialInnerActiveKey)

  const activeKey = props.activeKey ? props.activeKey : innerActiveKey

  useEffect(
    () => setInnerActiveKey(initialInnerActiveKey),
    [initialInnerActiveKey],
  )

  const onPanelClick = useCallback((panelIndex: string) => {
    if (disabled) return

    if (isAccordion) {
      if (!activeKey.includes(panelIndex)) {
        const updatedActiveKey = [panelIndex]

        if (onChange) onChange(updatedActiveKey)
        setInnerActiveKey(updatedActiveKey)
      } else {
        if (onChange) onChange([])
        setInnerActiveKey([])
      }
    } else if (activeKey.includes(panelIndex)) {
      const updatedActiveKey = activeKey.filter((key) => key !== panelIndex)

      if (onChange) onChange(updatedActiveKey)
      setInnerActiveKey(updatedActiveKey)
    } else {
      const updatedActiveKey = [...activeKey, panelIndex]

      if (onChange) onChange(updatedActiveKey)
      setInnerActiveKey(updatedActiveKey)
    }
  }, [activeKey, onChange, isAccordion, disabled])

  return (
    <div {...restProps}>
      {React.Children.map(props.children, (child, index) => {
        const panelIndex = index.toString()
        const onClick = () => onPanelClick(panelIndex)

        return (
          React.cloneElement(child, {
            key: panelIndex,
            isOpen: activeKey.includes(panelIndex),
            onClick,
          })
        )
      })}
    </div>
  )
}

export { Collapse, CollapsePanel }
