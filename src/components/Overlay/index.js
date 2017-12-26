// @flow
import React, { Component } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import Icon from 'components/Icon'
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
  componentWillMount() {
    this.calcWidth()
    window.addEventListener('resize', this.calcWidth)
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcWidth)
    document.body.style.overflow = 'auto'
    document.body.style.maxWidth = 'none'
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
