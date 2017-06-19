// @flow

import React, { PureComponent } from 'react'
import { uniqueId } from 'lodash'

import {
  Icon,
  SpanWithMargin,
  Root,
  ToolTipWrap,
} from './styled'


type Props = {
  startDelay: number,
  endDelay: number,
  handleClick: (e: any) => void,
  children: Function | any[],
  title: Function,
  position: 'top' | 'bottom' | 'left' | 'right',
  iconPosition: 'left' | 'right',
  color: 'green' | 'red',
}

type State = {
  isHovering: boolean,
  isMouseDown: boolean,
}

export default class Tooltip extends PureComponent<Props, Props, State> {

  id = uniqueId('tooltip_')

  constructor(props) {
    super(props)
    document.addEventListener('mousedown', this.onMouseDown)
    document.addEventListener('mouseup', this.onMouseUp)
  }

  state = {
    isHovering: false,
    isMouseDown: false,
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown)
    document.removeEventListener('mouseup', this.onMouseUp)
  }

  onMouseDown = (e) => {
    if (!document.getElementById(this.id).contains(e.target)) {
      return
    }
    this.setState({
      isMouseDown: true,
    })
  }

  onMouseUp = (e) => {
    this.setState({
      isMouseDown: false,
    })
    if (document.getElementById(this.id).contains(e.target)) {
      return
    }
    this.handleMouseOut(e)
  }

  handleMouseOver = () => {
    const { startDelay } = this.props
    if (!startDelay) {
      this.ensureHover(true)
      return
    }
    this.hoverTimeout = setTimeout(() => {
      this.ensureHover(true)
    }, startDelay)
  }

  handleMouseOut = () => {
    if (this.state.isMouseDown) {
      return
    }
    clearTimeout(this.hoverTimeout)
    this.ensureHover(false)
  }

  ensureHover(isHovering: boolean) {
    if (this.state.isHovering === isHovering) {
      return
    }
    this.setState({ isHovering })
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
      hasHandle,
    } = this.props

    const WrappedIcon = <Icon isHovering={this.state.isHovering}>?</Icon>

    return (
      <ToolTipWrap
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        style={{ ...style, zIndex }}
        hasHandle={hasHandle}
        id={this.id}
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
        <span>
          {children}
        </span>
      </ToolTipWrap>
    )
  }
}

Tooltip.defaultProps = {
  startDelay: 150,
  endDelay: 0,
  position: 'left',
}
