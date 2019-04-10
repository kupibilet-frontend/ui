// @flow
import React from 'react'
import { Portal } from 'react-portal'
import H1 from 'components/Typography/H1'
import H4 from 'components/Typography/H4'
import Overlay from 'components/Overlay'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'
import isCompact from './utils'

import {
  ModalContent,
  Header,
  Content,
  StyledIcon,
  CloseButton,
  Footer,
} from './styled'

const getCloseButtonSize = ({ isHandheld, size }) => {
  if (isHandheld) {
    return 'normal'
  } else if (isCompact(size)) {
    return 'xxsmall'
  }
  return 'medium'
}

const getCloseButtonColor = ({ isHandheld, size }) => {
  if (isHandheld) {
    return 'primaryDarkest'
  } else if (isCompact(size)) {
    return 'miscDarkest'
  }
  return 'textLight'
}

type Props = {
  footer?: React.Element<*>,
  size: 'wide' | 'compact' | 'thin',
  closeOnOutsideClick: boolean,
  closeOnEsc: boolean,
  showCloseButton: boolean,
  isOnBottom: boolean,
}

/* eslint-disable react/prop-types */
class Modal extends React.PureComponent<Props> {
  static defaultProps = {
    renderHeader: ({ heading, size, isHandheld }) => (heading &&
      <Header size={size}>
        {(isCompact(size) || isHandheld)
          ? <H4>{heading}</H4>
          : <H1>{heading}</H1>
        }
      </Header>
    ),
    renderContent: (props) => <Content {...props} />,
    renderFooter: (props) => props.footer && <Footer {...props} />,

    footer: null,
    size: 'wide',
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
      size,
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
      <Portal node={document && document.getElementById('portal')}>
        <GlobalStylesScope className="responsive">
          <Overlay
            closePortal={closeOnOutsideClick && this.closePortal}
            isOnBottom={isOnBottom}
          >
            <ModalContent size={size}>
              { renderHeader({ ...this.props, children: heading }) }
              {showCloseButton &&
                <CloseButton size={size} isOnBottom={isOnBottom}>
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
