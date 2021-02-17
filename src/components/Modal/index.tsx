import React from 'react'
import { Portal } from 'react-portal'
import H4 from 'components/Typography/H4'
import Overlay from 'components/Overlay'
import GlobalStylesScope from 'components/ThemeProvider'

import { ICON_SIZES } from 'components/Icon/consts'
import { BUTTON_SIZES_NAMES } from 'components/Button/types'
import { COLOR_NAMES } from 'components/ThemeProvider/types'
import { withMedia } from 'utils/media-queries'
import { TWithMediaProps } from 'utils/types'
import { isCompact } from './utils'
import { ModalSize } from './types'

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

const getCloseIconSize = ({ isHandheld, size }: TProps): ICON_SIZES => {
  if (isHandheld) {
    return ICON_SIZES.normal
  } else if (isCompact(size)) {
    return ICON_SIZES.xxsmall
  }
  return ICON_SIZES.medium
}

const getCloseIconColor = ({ size }: TProps): COLOR_NAMES => {
  if (isCompact(size)) {
    return COLOR_NAMES.miscDarkest
  }
  return COLOR_NAMES.textLight
}

interface TProps extends TWithMediaProps {
  size: ModalSize,
  closeOnOutsideClick: boolean,
  closeOnEsc: boolean,
  shouldRenderCloseIcon: boolean,
  isOnBottom: boolean,
  scrollFix?: boolean,
  onSubmitClick?: () => void,
  submitText?: React.ReactChild,
  submitButtonCloseText?: React.ReactChild,
  defaultButtonCloseText?: React.ReactChild,
  shouldRenderCloseButton?: boolean,
  footer?: React.ReactNode,
  onClose: () => void,
  heading?: React.ReactChild,
  renderHeader?: (props: TProps & { children: React.ReactChild }) => React.ReactNode,
  renderContent?: (props: TProps) => React.ReactNode,
  isOpen: boolean,
}

class Modal extends React.PureComponent<TProps> {
  static defaultProps = {
    heading: '',
    renderHeader: ({ heading, size }: TProps) => (heading ? (
      <Header size={size}>
        <H4>{heading}</H4>
      </Header>
    ) : null),
    renderContent: (props: any) => <Content {...props} />,
    footer: null,
    size: 'wide',
    closeOnOutsideClick: true,
    closeOnEsc: true,
    shouldRenderCloseIcon: true,
    isOnBottom: false,
    scrollFix: true,
    onSubmitClick: null,
    submitText: 'Продолжить',
    submitButtonCloseText: 'Отменить',
    defaultButtonCloseText: 'Закрыть',
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

  handleKeyDown = (event: any) => {
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
      submitButtonCloseText,
      defaultButtonCloseText,
      shouldRenderCloseButton,
      onClose,
    } = this.props

    const defaultFooter = !isOnBottom ? (
      <Footer size={size}>
        {onSubmitClick && (
          <SubmitButton
            size={BUTTON_SIZES_NAMES.large}
            onClick={onSubmitClick}
          >
            {submitText}
          </SubmitButton>
        )}
        {shouldRenderCloseButton && (
          <CloseButton
            onClick={onClose}
            size={BUTTON_SIZES_NAMES.large}
            variant="secondary"
          >
            {onSubmitClick ? submitButtonCloseText : defaultButtonCloseText}
          </CloseButton>
        )}
      </Footer>
    ) : null

    if (!isOpen) {
      return null
    }

    return (
      <Portal node={document && document.getElementById('portal')}>
        <GlobalStylesScope>
          <Overlay
            closePortal={closeOnOutsideClick && this.closePortal}
            isOnBottom={isOnBottom}
            scrollFix={scrollFix}
          >
            <ModalContent size={size}>
              {renderHeader && renderHeader({
                ...this.props,
                children: heading as React.ReactChild,
              })}
              {shouldRenderCloseIcon && (
                <CloseIcon
                  modalSize={size}
                  // isOnBottom={isOnBottom}
                  icon={<StyledIcon
                    name="cross"
                    fill={getCloseIconColor(this.props)}
                    onClick={this.closePortal}
                    size={getCloseIconSize(this.props)}
                  />}
                />
              )}
              { renderContent && renderContent(this.props) }
              { footer || defaultFooter }
            </ModalContent>
          </Overlay>
        </GlobalStylesScope>
      </Portal>
    )
  }
}

export default withMedia(Modal)
