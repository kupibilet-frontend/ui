// @flow
import React from 'react'
import { SwapContainer, SwapIcon, FlexContainer } from './styled'

type neighboringInGroup = null | string
export type controlsGroupProps = {
  neighboringInGroup: neighboringInGroup
}

const getNeighboringInGroup = (index, length, column = false): neighboringInGroup => {
  if (index === 0) {
    return column ? 'down' : 'right'
  }
  if (index === length - 1) {
    return column ? 'up' : 'left'
  }

  return 'both'
}

type onSwap = (Event) => void

type SwapProps = {
  onSwap?: onSwap,
}

/* eslint-disable react/prop-types */
class Swap extends React.PureComponent<SwapProps, void> {
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
const ControlsGroup = ({ children, column = false, onSwap, ...props }: ControlsGroupProps) => {
  if (!children.length || children.length === 1) {
    return children
  }

  let controls = children
  const [first, second, ...tail] = children
  if (children.length >= 2 && onSwap) {
    controls = [
      first,
      <Swap onSwap={onSwap} />,
      second,
      ...tail,
    ]
  }

  return (
    <FlexContainer column={column} {...props}>
      {
        React.Children.toArray(controls.map((child, index, { length }) => (
          React.cloneElement(child, {
            neighboringInGroup: getNeighboringInGroup(index, length, column),
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
