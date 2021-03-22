// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
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

type TCoordinates = {
  left: number,
  top: number,
  width: number,
  height: number,
}

type PortalProps = {
  isOpen: boolean,
  coords: TCoordinates | null,
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
  return (content && isOpen && coords) ? (
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
                  {header ? (
                    <Header>
                      <HeaderText>
                        {header}
                      </HeaderText>
                    </Header>
                  ) : null}
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
  ) : null
}

type PopoverProps = {
  children: Object | Element,
  content: any | null,
  header: ?string,
  placement: string,
  align: ?string,
  dotCentering: ?boolean,
  size: string,
}

type PopoverState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Popover extends React.Component<PopoverProps, PopoverState> {
  static defaultProps = {
    placement: 'bottom',
    size: 'normal',
    shouldRender: true,
    dotCentering: false,
  }

  state = {
    isOpen: false,
  }

  childRef = null
  coords = null
  hoverTimeout = null

  componentDidMount() {
    if (this.childRef !== null) {
      this.coords = this.getCoordinates(this.childRef)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hoverTimeout)
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
      this.coords = this.getCoordinates(this.childRef)
      this.setState({
        isOpen: Boolean(this.hoverTimeout),
      })
    }, 150)
  }

  /* eslint-disable react/no-find-dom-node */
  getCoordinates = (node) => {
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

type PopoverChildrenProxyProps = {
  children: React.Node,
}

// Proxy for possibility to transfer ref to any children
class PopoverChildrenProxy extends React.Component<PopoverChildrenProxyProps> {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Popover
