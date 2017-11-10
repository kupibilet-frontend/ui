// @flow
import React from 'react'
import GlobalStylesScope from 'components/ThemeProvider'
import Icon from 'components/Icon'
import { withMedia } from 'utils/media-queries'

import {
  Wrapper,
  OverlayContentWrap,
  OverlayCell,
  ClosingButton,
  OverlayContent,
  OverlayClosePanel,
  OverlayClosePanelIcon,
  BackLink,
} from './styled'

type Props = {
  closePortal?: (Event) => void,
  isDesktop: boolean,
  backLink: string,
  children: React.Element<*>,
}

class Overlay extends React.Component<{}, Props, void> {
  static defaultProps = {
    backLink: '',
  }

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
    return (
      <GlobalStylesScope>
        <Wrapper
          onClick={this.props.closePortal}
        >
          <OverlayContentWrap>
            <OverlayCell>
              <ClosingButton>
                <Icon name="cross" fill="textLight" size="medium" className="closing-icon" />
              </ClosingButton>
              {!this.props.isDesktop &&
                <OverlayClosePanel>
                  {this.props.backLink &&
                    <BackLink>
                      <Icon name="arrow-down" fill="primaryDarkest" size="xxsmall" className="arrow-icon" />
                      &nbsp;{this.props.backLink}
                    </BackLink>
                  }
                  <OverlayClosePanelIcon>
                    <Icon name="cross" fill="primaryDarkest" size="xxsmall" className="closing-icon" />
                  </OverlayClosePanelIcon>
                </OverlayClosePanel>
              }
              <OverlayContent onClick={this.stopPropagation}>
                {React.cloneElement(this.props.children, { closePortal: this.props.closePortal })}
              </OverlayContent>
            </OverlayCell>
          </OverlayContentWrap>
        </Wrapper>
      </GlobalStylesScope>
    )
  }
}


export default withMedia(Overlay)
