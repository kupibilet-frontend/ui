import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
import { withTheme } from 'styled-components'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import {
  PopoverBackground,
  PopoverContainer,
  RelativeWrapper,
  PopoverDot,
  PositionWrapper,
  OrientationWrapper,
  Header,
  HeaderText,
} from './styled'

type PortalProps = {
  isOpen: boolean,
  coords: Object | null,
  orientation: string,
  subOrientation: ?string,
  content: string | Element,
  header: ?string,
}

const PopoverPortal = (props : PortalProps) => {
  const {
    isOpen,
    coords,
    orientation,
    subOrientation,
    content,
    header,
  } = props
  return ((isOpen && coords)
    ? <Portal>
      <StylesProvider>
        <PopoverContainer
          top={coords.top}
          left={coords.left}
          width={coords.width}
          height={coords.height}
          orientation={orientation}
          subOrientation={subOrientation}
        >
          <PositionWrapper>
            <OrientationWrapper
              orientation={orientation}
              subOrientation={subOrientation}
            >
              <RelativeWrapper
                orientation={orientation}
                subOrientation={subOrientation}
                width={coords.width}
                height={coords.height}
              >
                <PopoverDot
                  orientation={orientation}
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
            </OrientationWrapper>
          </PositionWrapper>
        </PopoverContainer>
      </StylesProvider>
    </Portal>
    : null
  )
}

type PopoverProps = {
  children: Object | Element,
  content: string | Element,
  header: ?string,
  orientation: string,
  subOrientation: ?string,
}

type PopoverState = {
  isOpen: boolean,
}

/* eslint-disable react/prop-types */
class Popover extends React.Component <PopoverProps, PopoverState> {
  static defaultProps = {
    orientation: 'bottom',
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
  getCoordinates = (node : Element) => {
    const availableNode = ReactDOM.findDOMNode(node)
    if (availableNode) {
      return ReactDOM.findDOMNode(node).getBoundingClientRect()
    }
  }

  handleMouseOut = () => {
    clearTimeout(this.hoverTimeout)
    this.setState({
      isOpen: true,
    })
  }

  handleMouseOver = () => {
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
      orientation,
      subOrientation,
      content,
      header,
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
        orientation={orientation}
        subOrientation={subOrientation}
        isOpen={isOpen}
        content={content}
        header={header}
      />,
    ]
  }
}

const StylesProvider = withTheme(GlobalStylesScope)

class PopoverChildrenProxy extends React.Component {
  render() {
    const { children, ...props } = this.props
    return React.cloneElement(React.Children.only(children), props)
  }
}

export default Popover
