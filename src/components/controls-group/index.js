import React, { PropTypes } from 'react'
import { SwapContainer, SwapIcon, FlexContainer } from './styled'

export type controlsGroupProps = {
  neighboringInGroup: null | 'right' | 'both' | 'left'
}

const getNeighboringInGroup = (index, length) => {
  if (index === 0) {
    return 'right'
  }
  if (index === length - 1) {
    return 'left'
  }

  return 'both'
}

class Swap extends React.Component {
  static propTypes = {
    onSwap: PropTypes.func,
  }

  static defaultProps = {
    onSwap: null,
  }

  render() {
    const { onSwap } = this.props

    return (
      <SwapContainer
        onClick={onSwap}
      >
        <SwapIcon
          className="controls-group__swap"
          name="left-right"
          size="xxsmall"
          inheritColor
        />
      </SwapContainer>
    )
  }
}

const ControlsGroup = ({ children, onSwap, ...props }) => {
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

ControlsGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSwap: PropTypes.func,
}

ControlsGroup.defaultProps = {
  onSwap: null,
}

export default ControlsGroup
