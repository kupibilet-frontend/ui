// @flow
import React, { PureComponent } from 'react'
import { SwapContainer, SwapIcon, FlexContainer } from './styled'

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

type onSwap = (Event) => void

type SwapProps = {
  onSwap?: onSwap,
}

/* eslint-disable react/prop-types */
class Swap extends PureComponent<SwapProps, {}> {
  static defaultProps = {
    onSwap: null,
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { onSwap } = this.props

    return (
      <SwapContainer
        onClick={onSwap}
      >
        <SwapIcon
          name="left-right"
          size="xxsmall"
          inheritColor
        />
      </SwapContainer>
    )
  }
}

type ControlsGroupProps = {
  onSwap?: onSwap,
  children: Array<React.Element<*>>,
}

// eslint-disable-next-line no-shadow
const ControlsGroup = ({ children, onSwap, ...props }: ControlsGroupProps) => {
  if (!children.length || children.length === 1) {
    return children
  }

  let controls = children
  if (children.length === 2 && onSwap) {
    controls = [
      children[0],
      <Swap onSwap={onSwap} />,
      children[1],
    ]
  }

  return (
    <FlexContainer {...props}>
      {
        React.Children.toArray(controls.map((child, index, { length }) => (
          React.cloneElement(child, {
            neighboringInGroup: getNeighboringInGroup(index, length),
          })
        )))
      }
    </FlexContainer>
  )
}

ControlsGroup.defaultProps = {
  onSwap: null,
}

export default ControlsGroup
