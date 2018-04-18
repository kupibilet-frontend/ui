// @flow
import React, { Component } from 'react'
import type { Element } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'
import Scrollfix from 'components/Scrollfix'

import { Wrapper, OverlayContentWrap, OverlayContent } from './styled'

type Props = {
  closePortal?: Event => void,
  isOnBottom: boolean,
  children: Element<*>,
}

class Overlay extends Component<Props, void> {
  stopPropagation = e => {
    e.stopPropagation()
  }

  render() {
    const { closePortal, isOnBottom, children } = this.props

    return (
      <GlobalStylesScope>
        <Scrollfix>
          <Wrapper onClick={closePortal} isOnBottom={isOnBottom}>
            <OverlayContentWrap isOnBottom={isOnBottom}>
              <OverlayContent
                onClick={this.stopPropagation}
                isOnBottom={isOnBottom}
              >
                {React.cloneElement(children, { closePortal })}
              </OverlayContent>
            </OverlayContentWrap>
          </Wrapper>
        </Scrollfix>
      </GlobalStylesScope>
    )
  }
}

export default withMedia(Overlay)
