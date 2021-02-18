import { Component } from 'react'
import _get from 'lodash/get'
import ReactDOM from 'react-dom'

interface TProps {
  children: React.ReactChild,
  freezableElement?: 'DEPRECATED and don`t needed anymore', // eslint-disable-line react/no-unused-prop-types
}

class Scrollfix extends Component<TProps> {
  static defaultProps = {
    freezableElement: null,
  }

  element: Element | null | Text = null
  lastY = 0

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this.element = ReactDOM.findDOMNode(this)
    if (this.element) {
      this.element.addEventListener('mousewheel', this.onWheel, { passive: true })
      this.element.addEventListener('touchstart', this.getTouchStartCoord, { passive: true })
      this.element.addEventListener('touchmove', this.onTouch, { passive: true })
    }
  }

  componentWillUnmount() {
    if (this.element) {
      this.element.removeEventListener('mousewheel', this.onWheel)
      this.element.removeEventListener('touchstart', this.getTouchStartCoord)
      this.element.removeEventListener('touchmove', this.onTouch)
    }
  }

  onWheel = (event: Event): void => {
    const { deltaY } = event as WheelEvent
    this.onScroll(event, deltaY)
  }

  onTouch = (event: Event): void => {
    const currentY = (event as TouchEvent).changedTouches[0].clientY
    const deltaY = this.lastY - currentY

    this.onScroll(event, deltaY)
  }

  onScroll = (event: Event, deltaY: number): void => {
    const { scrollTop } = this.element as HTMLElement
    const touchesLength = _get(event, 'touches.length', 0)
    if (scrollTop <= 1 && deltaY < 0 && touchesLength < 2) {
      event.preventDefault()
    } else if (
      scrollTop + (this.element as HTMLElement).offsetHeight
      >= (this.element as HTMLElement).scrollHeight - 1
      && deltaY > 0
      && touchesLength < 2
    ) {
      event.preventDefault()
    }
  }

  getTouchStartCoord = (event: Event): void => {
    this.lastY = (event as TouchEvent).changedTouches[0].clientY
  }

  render() {
    const {
      children,
    } = this.props
    return children
  }
}

export default Scrollfix
