// @flow
import React, { Component } from 'react'
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
  children: React.Element<*>,
}

class Overlay extends Component<Props, void> {
  constructor() {
    super()
    this.scrollPosition = 0
  }
  componentWillMount() {
    this.calcWidth()
    window.addEventListener('resize', this.calcWidth)
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden'
    this.scrollPosition = window.scrollY
    document.body.style.position = 'fixed'
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWidth)
    document.body.style.overflow = 'auto'
    document.body.style.maxWidth = 'none'
    document.body.style.position = 'relative'
    window.scrollTo(0, this.scrollPosition)
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }

  calcWidth = () => {
    document.body.style.maxWidth = `${document.body.clientWidth}px`
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
