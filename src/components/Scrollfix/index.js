// @flow

import { Component } from 'react'
import ReactDOM from 'react-dom'
import type { Element } from 'react'

type Props = {
  children: Element<*>,
}

class Scrollfix extends Component<Props> {
  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this.element = ReactDOM.findDOMNode(this)
    this.element.addEventListener('mousewheel', this.onWheel, true)
    this.element.addEventListener('touchstart', this.getTouchStartCoord, true)
    this.element.addEventListener('touchmove', this.onTouch, true)
  }

  componentWillUnmount() {
    this.element.removeEventListener('mousewheel', this.onWheel, true)
    this.element.removeEventListener(
      'touchstart',
      this.getTouchStartCoord,
      true
    )
    this.element.removeEventListener('touchmove', this.onTouch, true)
  }

  onWheel = (event: Event) => {
    const { deltaY } = event
    this.onScroll(event, deltaY)
  }

  onTouch = (event: Event) => {
    const currentY = event.changedTouches[0].clientY
    const deltaY = this.lastY - currentY
    this.onScroll(event, deltaY)
  }

  onScroll = (event: Event, deltaY: number) => {
    const scrollTop = this.element.scrollTop
    if (scrollTop <= 1 && deltaY < 0) {
      event.preventDefault()
    } else if (
      scrollTop + this.element.offsetHeight >= this.element.scrollHeight - 1 &&
      deltaY > 0
    ) {
      event.preventDefault()
    }
  }

  getTouchStartCoord = (event: Event) => {
    this.lastY = event.changedTouches[0].clientY
  }

  element = {}
  lastY = 0

  render() {
    const { children } = this.props
    return children
  }
}

export default Scrollfix
