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

  componentDidMount() {
    this.scrollPosition = window.scrollY
    const node = document.querySelector('body div:first-child')
    if (node) {
      node.style.overflow = 'auto'
      node.style.height = '100%'
      node.scrollTo(0, this.scrollPosition)
    }
  }

  componentWillUnmount() {
    const node = document.querySelector('body div:first-child')
    if (node) {
      node.style.overflow = ''
      node.style.height = ''
    }
    window.scrollTo(0, this.scrollPosition)
  }

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
