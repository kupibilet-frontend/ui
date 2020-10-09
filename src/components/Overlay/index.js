// @flow
import React, { Component } from 'react'
import type { Element } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'
import Scrollfix from 'components/Scrollfix'

import {
  Wrapper,
  OverlayContentWrap,
  OverlayContent,
} from './styled'

export { OVERLAY_Z_INDEX } from './styled'

type Props = {
  closePortal: (Event) => void,
  isOnBottom: boolean,
  children: Element<*>,
  scrollFix?: boolean,
}

class Overlay extends Component<Props, void> {
  static defaultProps = {
    scrollFix: true,
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }

  renderOverlay = () => {
    const {
      closePortal,
      isOnBottom,
      children,
    } = this.props

    return (
      <Wrapper
        onMouseDown={closePortal}
        isOnBottom={isOnBottom}
      >
        <OverlayContentWrap isOnBottom={isOnBottom}>
          <OverlayContent onMouseDown={this.stopPropagation} isOnBottom={isOnBottom}>
            {React.cloneElement(children, { closePortal })}
          </OverlayContent>
        </OverlayContentWrap>
      </Wrapper>
    )
  }

  render() {
    const { scrollFix } = this.props

    if (!scrollFix) {
      return (
        <GlobalStylesScope>
          {this.renderOverlay()}
        </GlobalStylesScope>
      )
    }

    return (
      <GlobalStylesScope>
        <Scrollfix>
          {this.renderOverlay()}
        </Scrollfix>
      </GlobalStylesScope>
    )
  }
}


export default withMedia(Overlay)
