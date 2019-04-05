// @flow
import React, { Component } from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import Tooltip from 'components/Tooltip'
import type { Coordinates } from 'components/Tooltip'
import TextSmall from 'components/Typography/TextSmall'
import {
  PopoverBackground,
  PopoverContainer,
  RelativeWrapper,
  PopoverDot,
  PositionWrapper,
  PlacementWrapper,
  Header,
  HeaderText,
} from './styled'


type PortalProps = {
  isOpen: boolean,
  coords: Coordinates | null,
  placement: string,
  align: ?string,
  content: any | null,
  header: ?string,
  dotCentering: ?boolean,
  size: string,
}

const PopoverPortal = (props: PortalProps) => {
  const {
    isOpen,
    coords,
    placement,
    align,
    content,
    header,
    dotCentering,
    size,
  } = props
  return ((content && isOpen && coords) ?
    <Portal>
      <GlobalStylesScope>
        <PopoverContainer
          top={coords.top}
          left={coords.left}
          width={coords.width}
          height={coords.height}
          placement={placement}
          align={align}
          dotCentering={dotCentering}
        >
          <PositionWrapper>
            <PlacementWrapper
              placement={placement}
              align={align}
            >
              <RelativeWrapper
                placement={placement}
                align={align}
                width={coords.width}
                height={coords.height}
              >
                <PopoverDot
                  placement={placement}
                />
                <PopoverBackground
                  size={size}
                >
                  {header &&
                    <Header>
                      <HeaderText>
                        {header}
                      </HeaderText>
                    </Header>
                  }
                  <TextSmall>
                    { content }
                  </TextSmall>
                </PopoverBackground>
              </RelativeWrapper>
            </PlacementWrapper>
          </PositionWrapper>
        </PopoverContainer>
      </GlobalStylesScope>
    </Portal>
    : null
  )
}

type PopoverProps = {
  children: Object | Element,
  content: any | null,
  header: ?string,
  placement: string,
  align: ?string,
  dotCentering: ?boolean,
  size: string,
  success: ?boolean,
  error: ?boolean,
}

type PopoverState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Popover extends Tooltip<PopoverProps, PopoverState> {
  static defaultProps = {
    placement: 'bottom',
    size: 'normal',
    shouldRender: true,
    dotCentering: false,
    success: false,
    error: false,
  }
  render() {
    const {
      children,
      placement,
      align,
      content,
      header,
      shouldRender,
      dotCentering,
      size,
    } = this.props
    const { coords } = this
    const { isOpen } = this.state
    return [
      <PopoverChildrenProxy
        key="PopoverpedElement"
        ref={(element) => { this.childRef = element }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </PopoverChildrenProxy>,
      <PopoverPortal
        key="PopoverPortal"
        coords={coords}
        placement={placement}
        align={align}
        isOpen={isOpen}
        content={content}
        header={header}
        shouldRender={shouldRender}
        dotCentering={dotCentering}
        size={size}
      />,
    ]
  }
}


// Proxy for possibility to transfer ref to any children
class PopoverChildrenProxy extends Component<void, void> {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Popover
