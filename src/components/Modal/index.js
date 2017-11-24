// @flow
import React from 'react'
import { Portal } from 'react-portal'
import H1 from 'components/Typography/H1'
import H3 from 'components/Typography/H3'
import Overlay from 'components/Overlay'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'

import {
  ModalContent,
  Header,
  Content,
  StyledIcon,
  CloseButton,
  Footer,
} from './styled'

type Props = {
  footer: React.Element<*>,
  isCompact: boolean,
  closeOnOutsideClick: boolean,
  closeOnEsc: boolean,
  showCloseButton: boolean,
}

/* eslint-disable react/prop-types */
class Modal extends React.PureComponent<Props> {
  componentWillMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeyDown)
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  closePortal = () => {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 27:
        this.closePortal()
        break
      default:
        break
    }
  }

  render() {
    const {
      isHandheld,
      isCompact,
      heading,
      children,
      footer,
      renderHeader,
      renderContent,
      renderFooter,
      isOpen,
      closeOnOutsideClick,
      showCloseButton,
    } = this.props

    const closeButtonSize = () => {
      if (isHandheld) {
        return 'normal'
      } else if (isCompact) {
        return 'xxsmall'
      }
      return 'medium'
    }

    const closeButtonColor = () => {
      if (isHandheld) {
        return 'primaryDarkest'
      } else if (isCompact) {
        return 'miscDarkest'
      }
      return 'textLight'
    }


    return (
      isOpen &&
        <Portal>
          <GlobalStylesScope>
            <div className="responsive">
              <Overlay
                closePortal={closeOnOutsideClick && this.closePortal}
                showCloseButton={showCloseButton}
              >
                <ModalContent isCompact={isCompact}>

                  { renderHeader({ ...this.props, children: heading }) }
                  {showCloseButton &&
                    <CloseButton isCompact={isCompact}>
                      <StyledIcon
                        name="cross"
                        fill={closeButtonColor()}
                        onClick={this.closePortal}
                        size={closeButtonSize()}
                      />
                    </CloseButton>
                  }
                  { renderContent({ ...this.props, children }) }
                  { renderFooter({ ...this.props, children: footer }) }

                </ModalContent>
              </Overlay>
            </div>
          </GlobalStylesScope>,
        </Portal>
    )
  }
}

Modal.defaultProps = {
  renderHeader: (props) => (props.heading &&
    <Header {...props}>
      {(props.isCompact || props.isHandheld)
        ? <H3>{props.heading}</H3>
        : <H1>{props.heading}</H1>
      }
    </Header>
  ),
  renderContent: (props) => <Content {...props} />,
  renderFooter: (props) => props.footer && <Footer {...props} />,

  isCompact: false,
  closeOnOutsideClick: true,
  closeOnEsc: true,
  showCloseButton: true,
}

export default withMedia(Modal)
