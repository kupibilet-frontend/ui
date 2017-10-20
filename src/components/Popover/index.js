// @flow
import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import Hint from 'blocks/Hints'
import type { Coordinates } from 'blocks/Hints'
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
  content: Object | Element,
  header: ?string,
  shouldRender: boolean,
  dotCentering: boolean,
}

const PopoverPortal = (props : PortalProps) => {
  const {
    isOpen,
    coords,
    placement,
    align,
    content,
    header,
    shouldRender,
    dotCentering,
  } = props
  return ((shouldRender && isOpen && coords)
    ? <Portal>
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
                <PopoverBackground>
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
  content: any,
  header: ?string,
  placement: string,
  align: ?string,
  shouldRender: boolean,
  dotCentering: boolean,
}

type PopoverState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Popover extends Hint {
  props: PopoverProps
  state: PopoverState
  static defaultProps = {
    placement: 'bottom',
    shouldRender: true,
    dotCentering: false,
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
    } = this.props
    const { coords } = this
    const { isOpen } = this.state
    return [
      <PopoverChildrenProxy
        key="PopoverpedElement"
        ref={(element) => { this.childRef = element }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
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
      />,
    ]
  }
}


// Proxy for possibility to transfer ref to any children
class PopoverChildrenProxy extends React.Component {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Popover
