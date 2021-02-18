import React, { MouseEvent } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'
import Scrollfix from 'components/Scrollfix'

import { TWithMediaProps } from 'utils/types'

import {
  Wrapper,
  OverlayContentWrap,
  OverlayContent,
} from './styled'

export { OVERLAY_Z_INDEX } from './styled'

interface TProps extends TWithMediaProps {
  closePortal: () => void,
  isOnBottom: boolean,
  children: React.ReactElement,
  scrollFix?: boolean,
}

class Overlay extends React.PureComponent<TProps> {
  static defaultProps = {
    scrollFix: true,
  }

  stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
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
