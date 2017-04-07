import React, { PropTypes } from 'react'
import { SwapContainer, SwapIcon, FlexContainer } from './styled'
import Icon from '../icons'

class Swap extends React.PureComponent {
  static propTypes = {
    onSwap: PropTypes.func,
  }

  static defaultProps = {
    onSwap: null,
  }

  state = {
    hovered: false,
  }

  onHover = () => {
    this.setState({
      hovered: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      hovered: false,
    })
  }

  render() {
    const { onSwap } = this.props
    const { hovered } = this.state

    return (
      <SwapContainer
        onClick={onSwap}
        onMouseOver={this.onHover}
        onMouseLeave={this.onMouseLeave}
      >
        <SwapIcon className="controls-group__swap">
          <Icon name="left-right" size="xxsmall" fill={hovered ? 'primary' : 'miscDark'} />
        </SwapIcon>
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
            neighboringInGroup: index === 0 && (
                'right'
              ) || (index === length - 1) && (
                'left'
              ) || (
                'both'
              ),
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
