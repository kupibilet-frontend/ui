// @flow
import React from 'react'
import { FlexContainer } from './styled'

type neighboringInGroup = null | 'right' | 'both' | 'left'
export type controlsGroupProps = {
  neighboringInGroup: neighboringInGroup
}

const getNeighboringInGroup = (index, length): neighboringInGroup => {
  if (index === 0) {
    return 'right'
  }
  if (index === length - 1) {
    return 'left'
  }

  return 'both'
}

type ControlsGroupProps = {
  children: Array<React.Element<*>>,
}

// eslint-disable-next-line no-shadow
const ControlsGroup = ({ children, ...props }: ControlsGroupProps) => {
  if (!children.length || children.length === 1) {
    return children
  }

  return (
    <FlexContainer {...props}>
      {
        React.Children.toArray(children.map((child, index, { length }) => (
          React.cloneElement(child, {
            neighboringInGroup: getNeighboringInGroup(index, length),
          })
        )))
      }
    </FlexContainer>
  )
}

export default ControlsGroup
