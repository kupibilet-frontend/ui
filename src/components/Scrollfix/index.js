// @flow

import { Component } from 'react'
import { get } from 'lodash'
import ReactDOM from 'react-dom'
import type { Element } from 'react'

type Props = {
  children: Element<*>,
  freezableElement?: 'DEPRECATED and don`t needed anymore', // eslint-disable-line react/no-unused-prop-types
}

class Scrollfix extends Component<Props> {
  static defaultProps = {
    freezableElement: null,
  }

  element = {}
  lastY = 0

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this.element = ReactDOM.findDOMNode(this)
    this.element.addEventListener('mousewheel', this.onWheel, { passive: true })
    this.element.addEventListener('touchstart', this.getTouchStartCoord, { passive: true })
    this.element.addEventListener('touchmove', this.onTouch, { passive: true })
  }

  componentWillUnmount() {
    this.element.removeEventListener('mousewheel', this.onWheel, { passive: true })
    this.element.removeEventListener('touchstart', this.getTouchStartCoord, { passive: true })
    this.element.removeEventListener('touchmove', this.onTouch, { passive: true })
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
    const { scrollTop } = this.element
    const touchesLength = get(event, 'touches.length', 0)
    if (scrollTop <= 1 && deltaY < 0 && touchesLength < 2) {
      event.preventDefault()
    } else if (
      scrollTop + this.element.offsetHeight >= this.element.scrollHeight - 1
      && deltaY > 0
      && touchesLength < 2
    ) {
      event.preventDefault()
    }
  }

  getTouchStartCoord = (event: Event) => {
    this.lastY = event.changedTouches[0].clientY
  }

  render() {
    const {
      children,
    } = this.props
    return children
  }
}

export default Scrollfix
