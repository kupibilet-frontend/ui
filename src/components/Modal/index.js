// @flow
import React from 'react'
import { Portal } from 'react-portal'
import H1 from 'components/Typography/H1'
import Overlay from 'components/Overlay'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'
import isCompact from './utils'

import {
  ModalContent,
  Header,
  Content,
  CloseIcon,
  Footer,
  CloseButton,
  SubmitButton,
  StyledIcon,
} from './styled'

const getCloseIconSize = ({ isHandheld, size }) => {
  if (isHandheld) {
    return 'normal'
  } else if (isCompact(size)) {
    return 'xxsmall'
  }
  return 'medium'
}

const getCloseIconColor = ({ isHandheld, size }) => {
  if (isHandheld) {
    return 'primaryDarkest'
  } else if (isCompact(size)) {
    return 'miscDarkest'
  }
  return 'textLight'
}

type Props = {
  size: 'wide' | 'compact' | 'thin',
  closeOnOutsideClick: boolean,
  closeOnEsc: boolean,
  shouldRenderCloseIcon: boolean,
  isOnBottom: boolean,
  scrollFix?: boolean,
  onSubmitClick?: Function,
  submitText?: string,
  closeButtonText?: string,
  shouldRenderCloseButton?: boolean,
  renderFooter?: React.Element<*>,
}

class Modal extends React.PureComponent<Props> {
  static defaultProps = {
    renderHeader: ({ heading, size }) => (heading &&
      <Header size={size}>
        <H1>{heading}</H1>
      </Header>
    ),
    renderContent: (props) => <Content {...props} />,
    renderFooter: null,
    size: 'wide',
    closeOnOutsideClick: true,
    closeOnEsc: true,
    shouldRenderCloseIcon: true,
    isOnBottom: false,
    scrollFix: true,
    onSubmitClick: null,
    submitText: 'Продолжить',
    closeButtonText: 'Отменить',
    shouldRenderCloseButton: true,
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
      renderHeader,
      renderContent,
      renderFooter,
      isOpen,
      closeOnOutsideClick,
      shouldRenderCloseIcon,
      isOnBottom,
      scrollFix,
      onSubmitClick,
      submitText,
      closeButtonText,
      shouldRenderCloseButton,
      onClose,
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
            scrollFix={scrollFix}
          >
            <ModalContent size={size}>
              { renderHeader({ ...this.props, children: heading }) }
              {shouldRenderCloseIcon &&
                <CloseIcon
                  modalSize={size}
                  isOnBottom={isOnBottom}
                  icon={<StyledIcon
                    name="cross"
                    fill={getCloseIconColor(this.props)}
                    onClick={this.closePortal}
                    size={getCloseIconSize(this.props)}
                  />}
                />
              }
              { renderContent(this.props) }
              { renderFooter ? <Footer {...this.props}>{renderFooter}</Footer> :
              <Footer>
                {onSubmitClick &&
                  <SubmitButton
                    size="large"
                    onClick={onSubmitClick}
                  >
                    {submitText}
                  </SubmitButton>
                }
                {shouldRenderCloseButton &&
                  <CloseButton
                    onClick={onClose}
                    size="large"
                    variant="secondary"
                  >
                    {onSubmitClick ? closeButtonText : 'Закрыть'}
                  </CloseButton>
                }
              </Footer>}
            </ModalContent>
          </Overlay>
        </GlobalStylesScope>
      </Portal>
    )
  }
}

export default withMedia(Modal)
