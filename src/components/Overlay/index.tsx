import React, { MouseEvent } from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'

import { TWithMediaProps } from 'utils/types'

import {
  Wrapper,
  OverlayContentWrap,
  OverlayContent,
} from './styled'

export { OVERLAY_Z_INDEX } from './styled'

const SCROLLBAR_WIDTH = 20

interface TProps extends TWithMediaProps {
  closePortal: () => void,
  isOnBottom: boolean,
  children: React.ReactElement,
  isModalOverlay: boolean;
}

class Overlay extends React.PureComponent<TProps> {
  static defaultProps = {
    isModalOverlay: false,
  }

  stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  close = (e: MouseEvent) => {
    // Из-за невозможности определения ширины скроллбара
    // на mac os, не закрываем портал если пользователь
    // кликнул в область предпологаемого отображения скроллбара
    if (this.props.isModalOverlay
      && document.documentElement.clientWidth - e.clientX > SCROLLBAR_WIDTH) {
      this.props.closePortal()
    }
  }

  renderOverlay = () => {
    const {
      closePortal,
      isOnBottom,
      children,
    } = this.props

    return (
      <Wrapper
        onMouseDown={this.close}
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
    return (
      <GlobalStylesScope>
        {this.renderOverlay()}
      </GlobalStylesScope>
    )
  }
}
export default withMedia(Overlay)
