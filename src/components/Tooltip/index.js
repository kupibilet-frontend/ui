// @flow

import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import Hint from 'blocks/Hints'
import type { Coordinates } from 'blocks/Hints'
import TextSmall from 'components/Typography/TextSmall'
import {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  PlacementWrapper,
} from './styled'

type PortalProps = {
  isOpen: boolean,
  coords: Coordinates | null,
  placement: string,
  content: string | Element,
  success: ?boolean,
  error: ?boolean,
  shouldRender: boolean,
}

const TooltipPortal = (props : PortalProps) => {
  const {
    isOpen,
    coords,
    placement,
    content,
    success,
    error,
    shouldRender,
  } = props

  return ((shouldRender && isOpen && coords)
    ? <Portal>
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
                <TooltipDot
                  success={success}
                  error={error}
                />
                <TooltipBackground
                  success={success}
                  error={error}
                >
                  <TextSmall>
                    { content }
                  </TextSmall>
                </TooltipBackground>
              </RelativeWrapper>
            </PlacementWrapper>
          </PositionWrapper>
        </TooltipContainer>
      </GlobalStylesScope>
    </Portal>
    : null
  )
}

type TooltipProps = {
  children: Object | Element,
  content: string | Element,
  placement: string,
  success: ?boolean,
  error: ?boolean,
  shouldRender: boolean,
}

type TooltipState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Tooltip extends Hint {
  props: TooltipProps
  state: TooltipState
  static defaultProps = {
    placement: 'bottom',
    success: false,
    error: false,
    shouldRender: true,
  }

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
        ref={(element) => { this.childRef = element }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
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
class TooltipChildrenProxy extends React.Component {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Tooltip
