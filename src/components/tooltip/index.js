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
  show: boolean,
  onMouseDown: (e: any) => void,
}

type State = {
  isHovering: boolean,
  isMouseDown: boolean,
}

export default class Tooltip extends PureComponent<Props, Props, State> {
  state = {
    isHovering: false,
    isActive: false,
  }

  handleMouseOver = () => {
    if (this.props.show) {
      return
    }
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
    if (this.props.show) {
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
      show,
      onMouseDown,
    } = this.props

    const WrappedIcon = <Icon isHovering={this.state.isHovering}>?</Icon>

    return (
      <ToolTipWrap
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onMouseDown={onMouseDown}
        style={{ ...style, zIndex }}
        hasHandle={hasHandle}
      >
        <Root
          onClick={handleClick}
          isShowing={show || this.state.isHovering}
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
