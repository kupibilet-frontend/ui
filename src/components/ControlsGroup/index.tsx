import React from 'react'
import { FlexContainer } from './styled'
import { TNeighboringInGroup } from './types'

function getNeighboringInGroup(index: number, length: number): TNeighboringInGroup {
  if (index === 0) {
    return 'right'
  }

  if (index === length - 1) {
    return 'left'
  }

  return 'both'
}

interface TProps {
  children: React.ReactNode,
  className?: string,
}

const ControlsGroup = ({ children, ...props }: TProps): JSX.Element => {
  const childrenLength = React.Children.count(children)

  if (!children || childrenLength <= 1) {
    return children as JSX.Element
  }

  return (
    <FlexContainer {...props}>
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child as React.ReactElement, {
          neighboringInGroup: getNeighboringInGroup(index, childrenLength),
        })
      ))}
    </FlexContainer>
  )
}

export default ControlsGroup
