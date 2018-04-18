// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  PlacementWrapper,
} from './styled'
/* eslint-disable react/no-unused-prop-types */

export type Coordinates = {
  left: number,
  top: number,
  width: number,
  height: number,
}

type GetCoordinates = (node: Element) => Coordinates

type PortalProps = {
  isOpen: boolean,
  coords: Coordinates | null,
  placement: string,
  content: string | Element | any | null,
  success: ?boolean,
  error: ?boolean,
}

const TooltipPortal = (props: PortalProps) => {
  const { isOpen, coords, placement, content, success, error } = props

  return content && isOpen && coords ? (
    <Portal>
      <GlobalStylesScope>
        <TooltipContainer
          top={coords.top}
          left={coords.left}
          width={coords.width}
          height={coords.height}
          placement={placement}
        >
          <PositionWrapper>
            <PlacementWrapper placement={placement}>
              <RelativeWrapper
                placement={placement}
                width={coords.width}
                height={coords.height}
              >
                <TooltipDot success={success} error={error} />
                <TooltipBackground success={success} error={error}>
                  <TextSmall>{content}</TextSmall>
                </TooltipBackground>
              </RelativeWrapper>
            </PlacementWrapper>
          </PositionWrapper>
        </TooltipContainer>
      </GlobalStylesScope>
    </Portal>
  ) : null
}

type TooltipProps = {
  children: Object | Element,
  content: string | Element | any | null,
  placement: string,
  success: ?boolean,
  error: ?boolean,
  dotCentering: ?boolean,
  header: ?string,
  align: ?string,
}

type TooltipState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static defaultProps = {
    placement: 'bottom',
    success: false,
    error: false,
    dotCentering: false,
  }

  state = {
    isOpen: false,
  }

  componentDidMount() {
    if (this.childRef !== null) {
      this.coords = this.getCoordinates(this.childRef)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hoverTimeout)
  }
  /* eslint-disable react/no-find-dom-node */
  getCoordinates = (node): GetCoordinates => {
    const availableNode = ReactDOM.findDOMNode(node)
    if (availableNode) {
      const rect = ReactDOM.findDOMNode(node).getBoundingClientRect()
      return {
        width: rect.width,
        height: rect.height,
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
      }
    }
  }

  handleMouseLeave = () => {
    clearTimeout(this.hoverTimeout)
    this.setState({
      isOpen: false,
    })
  }

  handleMouseEnter = () => {
    this.hoverTimeout = setTimeout(() => {
      this.coords = this.getCoordinates(this.childRef)
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
      placement,
      content,
      success,
      error,
      shouldRender,
    } = this.props
    const { coords } = this
    const { isOpen } = this.state
    return [
      <TooltipChildrenProxy
        key="tooltippedElement"
        ref={element => {
          this.childRef = element
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </TooltipChildrenProxy>,
      <TooltipPortal
        key="tooltipPortal"
        coords={coords}
        placement={placement}
        isOpen={isOpen}
        content={content}
        success={success}
        error={error}
        shouldRender={shouldRender}
      />,
    ]
  }
}

// Proxy for possibility to transfer ref to any children
class TooltipChildrenProxy extends React.Component<void, void> {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Tooltip
