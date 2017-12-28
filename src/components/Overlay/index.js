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
  componentWillMount() {
    document.body.getElementsByTagName('div')[0].style.overflow = 'auto'
    document.body.getElementsByTagName('div')[0].style.height = '100%'
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
