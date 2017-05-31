// @flow

import React, { PureComponent } from 'react'

import {
  Icon,
  SpanWithMargin,
  Root,
  ToolTipWrap,
} from './styled'


type Props = {
  handleClick: (e: any) => void,
  children: Function | any[],
  title: Function,
  position: 'top' | 'bottom' | 'left' | 'right',
  iconPosition: 'left' | 'right',
  color: 'green' | 'red',
}

type State = {
  isHovering: boolean,
}

export default class Tooltip extends PureComponent<Props, Props, State> {

  state = {
    isHovering: false,
  }

  handleMouseOver = () => {
    this.hoverTimeout = setTimeout(() => {
      this.setState({ isHovering: true })
    }, 150)
  }

  handleMouseOut = () => {
    clearTimeout(this.hoverTimeout)
    this.setState({ isHovering: false })
  }

  render() {
    const {
      iconPosition,
      position,
      color,
      zIndex,
      handleClick,
      style,
      children,
      title,
    } = this.props

    const WrappedIcon = <Icon isHovering={this.state.isHovering}>?</Icon>

    return (
      <ToolTipWrap
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
        style={{ ...style, zIndex }}
      >
        <Root
          onClick={handleClick}
          isShowing={this.state.isHovering}
          iconPosition={iconPosition}
          position={position}
          color={color}
        >
          {iconPosition === 'left' && WrappedIcon}
          <SpanWithMargin iconPosition={iconPosition}>
            {title}
          </SpanWithMargin>
          {iconPosition === 'right' && WrappedIcon}
        </Root>
        <span style={{ zIndex: '0' }}>
          {children}
        </span>
      </ToolTipWrap>
    )
  }
}

Tooltip.defaultProps = {
  position: 'left',
}
