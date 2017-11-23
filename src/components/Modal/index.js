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
  heading: React.Element<*>,
  children: React.Element<*>,
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

  handleClick = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }

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
      children,
      isHandheld,
      isCompact,
      footer,
      heading,
      renderHeader,
      renderContent,
      renderFooter,
      isOpen,
      closeOnOutsideClick,
      showCloseButton,
      ...props
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

    const ModalHeader = () => (
      <div>
        {(isCompact || isHandheld) ? <H3>{heading}</H3> : <H1>{heading}</H1> }
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
      </div>
    )


    return (
      <div>
        {isOpen &&
          <Portal>
            <GlobalStylesScope>
              <div className="responsive">
                <Overlay
                  closePortal={closeOnOutsideClick && this.closePortal}
                  showCloseButton={showCloseButton}
                >
                  <ModalContent isCompact={isCompact}>

                    { renderHeader({ ...props, children: ModalHeader() }) }
                    { renderContent(this.props) }
                    { renderFooter({ ...props, children: this.props.footer }) }

                  </ModalContent>
                </Overlay>
              </div>
            </GlobalStylesScope>,
          </Portal>
        }
      </div>
    )
  }
}

Modal.defaultProps = {
  renderHeader: (props) => <Header {...props} />,
  renderContent: (props) => <Content {...props} />,
  renderFooter: (props) => <Footer {...props} />,

  isCompact: false,
  closeOnOutsideClick: true,
  closeOnEsc: true,
  showCloseButton: true,
}

export default withMedia(Modal)
