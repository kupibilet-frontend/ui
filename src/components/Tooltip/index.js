import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
import {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
} from './styled'

const TooltipPortal = (props) => {
  const { isOpen, coords, orientation } = props
  if (coords) { console.info(typeof(coords.left))}
  return ((isOpen && coords)
    ? <Portal>
      <TooltipContainer
        top={coords.top}
        bottom={coords.bottom}
        left={coords.left}
        right={coords.right}
        width={coords.width}
        height={coords.height}
        orientation={orientation}
      >
        <RelativeWrapper>
          <TooltipBackground orientation={orientation}>
            Хех мда
          </TooltipBackground>
        </RelativeWrapper>
      </TooltipContainer>
    </Portal>
    : null
  )
}


export default class Tooltip extends React.Component {

  static defaultProps = {
    orientation: 'bottom',
  }

  state = {
    isOpen: true,
  }

  childRef = null
  coords = null

  componentDidMount() {
    const { children } = this.props
    this.coords = this.getCoordinates(this.childRef)
  }

  getCoordinates = (node) => node.getBoundingClientRect()

  render() {
    const { children, orientation } = this.props
    const { coords } = this
    const { isOpen } = this.state
    return [
      React.cloneElement(React.Children.only(children),
        {
          key: 'tooltippedElement',
          ref: (element) => { this.childRef = element }
        }
      ),
      <TooltipPortal
        key="tooltipPortal"
        coords={coords}
        orientation={orientation}
        isOpen={isOpen}
      />
    ]
  }
}
