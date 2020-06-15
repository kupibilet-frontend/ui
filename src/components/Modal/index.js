// @flow
import React from 'react'
import { compose } from 'redux'
import { Portal } from 'react-portal'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import H4 from 'components/Typography/H4'
import Overlay from 'components/Overlay'
import GlobalStylesScope from 'components/ThemeProvider'
import { withMedia } from 'utils/media-queries'
import { isCompact } from './utils'
import messages from './messages'

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

const getCloseIconColor = ({ size }) => {
  if (isCompact(size)) {
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
  footer?: React.Element<*>,
  onClose: Function,
  heading?: string,
  renderHeader?: React.Element<*> | () => node,
  renderContent?: React.Element<*> | () => node,
  isOpen: boolean,
  intl: IntlShape,
}

class Modal extends React.PureComponent<Props> {
  static defaultProps = {
    heading: '',
    renderHeader: ({ heading, size }) => (heading ? (
      <Header size={size}>
        <H4>{heading}</H4>
      </Header>
    ) : null),
    renderContent: (props) => <Content {...props} />,
    footer: null,
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
      footer,
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
      intl,
    } = this.props

    const defaultFooter = !isOnBottom ? (
      <Footer>
        {onSubmitClick ? (
          <SubmitButton
            size="large"
            onClick={onSubmitClick}
          >
            {submitText}
          </SubmitButton>
        ) : null}
        {shouldRenderCloseButton ? (
          <CloseButton
            onClick={onClose}
            size="large"
            variant="secondary"
          >
            {onSubmitClick ? closeButtonText : 'Закрыть'}
          </CloseButton>
        ) : null}
      </Footer>
    ) : null

    if (!isOpen) {
      return null
    }

    return (
      <div>
        Message from injectIntl: {intl.formatMessage(messages.closeButton)}
      </div>
    )

    /* eslint-disable */
    return (
      <Portal node={document && document.getElementById('portal')}>
        <GlobalStylesScope className="responsive">
          <Overlay
            closePortal={closeOnOutsideClick && this.closePortal}
            isOnBottom={isOnBottom}
            scrollFix={scrollFix}
          >
            <ModalContent size={size}>
              { renderHeader({ ...this.props, children: heading }) }
              {shouldRenderCloseIcon ? (
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
              ) : null}
              { renderContent(this.props) }
              { footer || defaultFooter }
            </ModalContent>
          </Overlay>
        </GlobalStylesScope>
      </Portal>
    )
  }
}

export default compose(
  withMedia,
  injectIntl,
)(Modal)
