// @flow
import React from 'react'
import { PortalWithState } from 'react-portal'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'

import {
  Overlay,
  FullScreenContent,
  Header,
  Content,
  StyledIcon,
  CloseButton,
  SubmitButton,
  CancelButton,
  Footer,
} from './styled'

type Props = {
  header: React.Element<*>,
  content: React.Element<*>,
  children: React.Element<*>,
}

/* eslint-disable react/prop-types */
class FullScreen extends React.PureComponent<Props> {
  onClick = (openPortal, isOpen) => {
    if (isOpen && this.props.onClick) {
      this.props.onClick()
    }
    return (openPortal)
  }

  handleClick = (closePortal, isOpen) => {
    if (!isOpen && this.props.onSubmit) {
      this.props.onSubmit()
    }
    return (closePortal)
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }

  render() {
    const {
      header,
      content,
      children,
      submitText,
      cancelText,
      isHandheld,
      isNarrow,
    } = this.props

    const fullScreenButton = (openPortal, isOpen) =>
      React.cloneElement(children, {
        onClick: this.onClick(openPortal, isOpen),
        key: 'full-screen-button',
      })

    const closeButtonSize = () => {
      if (isHandheld) {
        return 'normal'
      } else if (isNarrow) {
        return 'xxsmall'
      }
      return 'medium'
    }

    const closeButtonColor = () => {
      if (isHandheld) {
        return 'primaryDarkest'
      } else if (isNarrow) {
        return 'miscDarkest'
      }
      return 'textLighter'
    }

    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, isOpen, closePortal, portal }) => [
          fullScreenButton(openPortal, isOpen),
          portal(
            <GlobalStylesScope>
              <div className="responsive">
                <Overlay onClick={closePortal}>
                  <FullScreenContent isNarrow={isNarrow} onClick={this.stopPropagation}>
                    <Header>
                      {(isHandheld || isNarrow) ? <H4>{header}</H4> : <H1>{header}</H1>}
                      <CloseButton isNarrow={isNarrow}>
                        <StyledIcon
                          name="cross"
                          fill={closeButtonColor()}
                          onClick={closePortal}
                          size={closeButtonSize()}
                        />
                      </CloseButton>
                    </Header>
                    <Content>
                      {content}
                    </Content>

                    {(submitText || cancelText) &&
                      <Footer>
                        {submitText &&
                          <SubmitButton
                            size={isNarrow ? 'normal' : 'large'}
                            onClick={this.handleClick(closePortal, isOpen)}
                          >
                            {submitText}
                          </SubmitButton>
                        }

                        {cancelText &&
                          <CancelButton
                            onClick={closePortal}
                            isNarrow={isNarrow}
                          >
                            {cancelText}
                          </CancelButton>
                        }
                      </Footer>
                    }
                  </FullScreenContent>
                </Overlay>
              </div>
            </GlobalStylesScope>,
          ),
        ]}
      </PortalWithState>
    )
  }
}

export default withMedia(FullScreen)
