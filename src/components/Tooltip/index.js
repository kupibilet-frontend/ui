// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
import { withTheme } from 'styled-components'
import { GlobalStylesScope } from 'components/ThemeProvider'
import {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  OrientationWrapper,
} from './styled'

type PortalProps = {
  isOpen: boolean,
  coords: Object | null,
  orientation: string,
  content: string | Element,
  success: boolean,
  error: boolean,
}

const TooltipPortal = (props : PortalProps) => {
  const {
    isOpen,
    coords,
    orientation,
    content,
    success,
    error,
  } = props
  return ((isOpen && coords)
    ? <Portal>
      <StylesProvider>
        <TooltipContainer
          top={coords.top}
          left={coords.left}
          width={coords.width}
          height={coords.height}
          orientation={orientation}
        >
          <PositionWrapper>
            <OrientationWrapper orientation={orientation}>
              <RelativeWrapper
                orientation={orientation}
                width={coords.width}
                height={coords.height}
              >
                <TooltipDot
                  success={success}
                  error={error}
                />
                <TooltipBackground
                  success={success}
                  error={error}
                >
                  { content }
                </TooltipBackground>
              </RelativeWrapper>
            </OrientationWrapper>
          </PositionWrapper>
        </TooltipContainer>
      </StylesProvider>
    </Portal>
    : null
  )
}

type TooltipProps = {
  children: Object | Element,
  content: string | Element,
  orientation: string,
  success?: boolean,
  error?: boolean,
}

type TooltipState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Tooltip extends React.Component <TooltipProps, TooltipState> {
  static defaultProps = {
    orientation: 'bottom',
    success: false,
    error: false,
  }

  state = {
    isOpen: false,
  }

  componentDidMount() {
    this.coords = this.getCoordinates(this.childRef)
  }

  componentWillUnmount() {
    clearTimeout(this.hoverTimeout)
  }

  getCoordinates = (node : Element) => ReactDOM.findDOMNode(node).getBoundingClientRect()

  handleMouseOut = () => {
    clearTimeout(this.hoverTimeout)
    this.setState({
      isOpen: false,
    })
  }

  handleMouseOver = () => {
    this.hoverTimeout = setTimeout(() => {
      this.setState({
        isOpen: true,
      })
    }, 150)
  }

  childRef = null
  coords = null
  hoverTimeout = null

  render() {
    const {
      children,
      orientation,
      content,
      success,
      error,
    } = this.props
    const { coords } = this
    const { isOpen } = this.state
    return [
      <TooltipChildrenProxy
        key="tooltippedElement"
        ref={(element) => { this.childRef = element }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        {children}
      </TooltipChildrenProxy>,
      <TooltipPortal
        key="tooltipPortal"
        coords={coords}
        orientation={orientation}
        isOpen={isOpen}
        content={content}
        success={success}
        error={error}
      />,
    ]
  }
}

const StylesProvider = withTheme(GlobalStylesScope)

class TooltipChildrenProxy extends React.Component {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Tooltip
