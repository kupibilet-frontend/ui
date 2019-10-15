// @flow

import React from 'react'
import TooltipPortal from './parts/TooltipPortal'

import type { Coordinates } from './types'

type TooltipProps = {
  children: Object | React.Node,
  content?: string | React.Node,
  placement?: string,
  header?: string,
  align?: string,
}

type TooltipState = {
  isOpen: boolean,
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static defaultProps = {
    placement: 'bottom',
    align: '',
    content: null,
    header: null,
  }

  constructor(props: TooltipProps) {
    super(props)
    this.state = {
      isOpen: false,
    }

    this.coords = null
    this.hoverTimeout = null
  }

  componentDidMount() {
    if (this.tooltipRef && this.tooltipRef.current) {
      this.coords = this.getCoordinates()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hoverTimeout)
  }

  getCoordinates = (): Coordinates => {
    const rect = this.tooltipRef.getBoundingClientRect()

    return {
      width: rect.width,
      height: rect.height,
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
    }
  }

  handleMouseLeave = () => {
    clearTimeout(this.hoverTimeout)

    this.hoverTimeout = null

    this.setState({
      isOpen: false,
    })
  }

  handleMouseEnter = () => {
    this.hoverTimeout = setTimeout(() => {
      this.coordinates = this.getCoordinates()
      this.setState({
        isOpen: Boolean(this.hoverTimeout),
      })
    }, 150)
  }

  render() {
    const { children, placement, content, header, align } = this.props
    const { isOpen } = this.state

    return (
      <>
        <div
          ref={(node) => { this.tooltipRef = node }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
        </div>
        <TooltipPortal
          coordinates={this.coordinates}
          align={align}
          placement={placement}
          isOpen={isOpen}
          content={content}
          header={header}
        />
      </>
    )
  }
}

export default Tooltip
