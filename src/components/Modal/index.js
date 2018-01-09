// @flow
import React from 'react'
import { Portal } from 'react-portal'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'
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

const getCloseButtonSize = ({ isHandheld, isCompact }) => {
  if (isHandheld) {
    return 'normal'
  } else if (isCompact) {
    return 'xxsmall'
  }
  return 'medium'
}

const getCloseButtonColor = ({ isHandheld, isCompact }) => {
  if (isHandheld) {
    return 'primaryDarkest'
  } else if (isCompact) {
    return 'miscDarkest'
  }
  return 'textLight'
}

type Props = {
  footer?: React.Element<*>,
  isCompact: boolean,
  closeOnOutsideClick: boolean,
  closeOnEsc: boolean,
  showCloseButton: boolean,
  isOnBottom: boolean,
}

/* eslint-disable react/prop-types */
class Modal extends React.PureComponent<Props> {
  static defaultProps = {
    renderHeader: ({ heading, isCompact, isHandheld }) => (heading &&
      <Header isCompact={isCompact}>
        {(isCompact || isHandheld)
          ? <H4>{heading}</H4>
          : <H1>{heading}</H1>
        }
      </Header>
    ),
    renderContent: (props) => <Content {...props} />,
    renderFooter: (props) => props.footer && <Footer {...props} />,

    isCompact: false,
    closeOnOutsideClick: true,
    closeOnEsc: true,
    showCloseButton: true,
    isOnBottom: false,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  closePortal = () => {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 27 && this.props.closeOnEsc) {
      this.closePortal()
    }
  }

  render() {
    const {
      isCompact,
      heading,
      footer,
      renderHeader,
      renderContent,
      renderFooter,
      isOpen,
      closeOnOutsideClick,
      showCloseButton,
      isOnBottom,
    } = this.props

    if (!isOpen) {
      return null
    }

    return (
      <Portal>
        <GlobalStylesScope className="responsive">
          <Overlay
            closePortal={closeOnOutsideClick && this.closePortal}
            isOnBottom={isOnBottom}
          >
            <ModalContent isCompact={isCompact}>
              { renderHeader({ ...this.props, children: heading }) }
              {showCloseButton &&
                <CloseButton isCompact={isCompact} isOnBottom={isOnBottom}>
                  <StyledIcon
                    name="cross"
                    fill={getCloseButtonColor(this.props)}
                    onClick={this.closePortal}
                    size={getCloseButtonSize(this.props)}
                  />
                </CloseButton>
              }
              { renderContent(this.props) }
              { renderFooter({ ...this.props, children: footer }) }

            </ModalContent>
          </Overlay>
        </GlobalStylesScope>
      </Portal>
    )
  }
}

export default withMedia(Modal)
