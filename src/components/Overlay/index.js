// @flow
import React, { Component } from 'react'
import type { Element } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'

import {
  Wrapper,
  OverlayContentWrap,
  OverlayContent,
} from './styled'

type Props = {
  closePortal?: (Event) => void,
  isOnBottom: boolean,
  children: Element<*>,
}

class Overlay extends Component<Props, void> {
  componentDidMount() {
    this.element.addEventListener('mousewheel', this.onWheel, true)
    this.element.addEventListener('touchstart', this.getTouchStartCoord, true)
    this.element.addEventListener('touchmove', this.onTouch, true)
  }

  componentWillUnmount() {
    this.element.removeEventListener('mousewheel', this.onWheel, true)
    this.element.removeEventListener('touchstart', this.getTouchStartCoord, true)
    this.element.removeEventListener('touchmove', this.onTouch, true)
  }

  onWheel = (event) => {
    const { deltaY } = event
    this.onScroll(event, deltaY)
  }

  onTouch = (event) => {
    const currentY = event.changedTouches[0].clientY
    const deltaY = this.lastY - currentY
    this.onScroll(event, deltaY)
  }

  onScroll = (event, deltaY) => {
    const scrollTop = this.element.scrollTop
    if (scrollTop <= 1 && deltaY < 0) {
      event.preventDefault()
    } else if (
      scrollTop + this.element.offsetHeight >= this.element.scrollHeight - 1
      && deltaY > 0
    ) {
      event.preventDefault()
    }
  }

  getTouchStartCoord = (event) => {
    this.lastY = event.changedTouches[0].clientY
  }

  element = {}
  lastY = 0


  stopPropagation = (e) => {
    e.stopPropagation()
  }

  render() {
    const {
      closePortal,
      isOnBottom,
      children,
    } = this.props

    return (
      <GlobalStylesScope>
        <Wrapper
          onClick={closePortal}
          isOnBottom={isOnBottom}
          innerRef={(element) => { this.element = element }}
        >
          <OverlayContentWrap isOnBottom={isOnBottom}>
            <OverlayContent onClick={this.stopPropagation} isOnBottom={isOnBottom}>
              {React.cloneElement(children, { closePortal })}
            </OverlayContent>
          </OverlayContentWrap>
        </Wrapper>
      </GlobalStylesScope>
    )
  }
}


export default withMedia(Overlay)
