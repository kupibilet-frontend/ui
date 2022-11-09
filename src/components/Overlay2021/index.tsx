import React, { MouseEvent } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia2021 } from 'utils/media-queries'

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
  isNativeView: boolean,
  children: React.ReactElement,
}

class Overlay2021 extends React.PureComponent<TProps> {
  stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  renderOverlay = () => {
    const {
      closePortal,
      isOnBottom,
      isNativeView,
      children,
    } = this.props

    return (
      <Wrapper
        onMouseDown={closePortal}
        isOnBottom={isOnBottom}
        isNativeView={isNativeView}
      >
        <OverlayContentWrap isOnBottom={isOnBottom} isNativeView={isNativeView}>
          <OverlayContent onMouseDown={this.stopPropagation} isOnBottom={isOnBottom}>
            {React.cloneElement(children, { closePortal })}
          </OverlayContent>
        </OverlayContentWrap>
      </Wrapper>
    )
  }

  render() {
    return (
      <GlobalStylesScope>
        {this.renderOverlay()}
      </GlobalStylesScope>
    )
  }
}

export default withMedia2021(Overlay2021)
