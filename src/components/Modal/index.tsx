import React, { useCallback, useEffect } from 'react'
import { Portal } from 'react-portal'
import H4 from 'components/Typography/H4'
import Overlay from 'components/Overlay'
import GlobalStylesScope from 'components/ThemeProvider'
import { BUTTON_SIZES_NAMES } from 'components/Button/types'
import { withMedia } from 'utils/media-queries'
import { TWithMediaProps } from 'utils/types'
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
import { getCloseIconColor, getCloseIconSize } from './utils'

interface TProps extends TWithMediaProps {
  size?: ModalSize,
  closeOnOutsideClick?: boolean,
  closeOnEsc?: boolean,
  shouldRenderCloseIcon?: boolean,
  isOnBottom?: boolean,
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
  children: React.ReactChild,
}

const Modal = React.memo((props: TProps) => {
  const {
    heading = '',
    renderContent = (contentProps: any) => <Content {...contentProps} />,
    footer = null,
    size = 'wide',
    renderHeader = ({ heading: header, size: modalSize = 'wide' }: TProps) => (header ? (
      <Header size={modalSize}>
        <H4>{header}</H4>
      </Header>
    ) : null),
    closeOnOutsideClick = true,
    closeOnEsc = true,
    shouldRenderCloseIcon = true,
    isOnBottom = false,
    submitText = 'Продолжить',
    submitButtonCloseText = 'Отменить',
    defaultButtonCloseText = 'Закрыть',
    shouldRenderCloseButton = true,
    isOpen,
    onSubmitClick,
    onClose,
    isHandheld,
  } = props

  const closePortal = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.keyCode === 27 && closeOnEsc) {
      closePortal()
    }
  }, [closeOnEsc, closePortal])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const defaultFooter = !isOnBottom && (
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
  )

  if (!isOpen) {
    return null
  }

  return (
    <Portal node={document && document.getElementById('portal')}>
      <GlobalStylesScope>
        <Overlay
          closePortal={closeOnOutsideClick ? closePortal : () => null}
          isOnBottom={isOnBottom}
        >
          <ModalContent size={size}>
            {renderHeader && renderHeader({
              ...props,
              size,
              heading,
              children: heading as React.ReactChild,
            })}
            {shouldRenderCloseIcon && (
              <CloseIcon
                modalSize={size}
                icon={<StyledIcon
                  name="cross"
                  fill={getCloseIconColor(size)}
                  onClick={closePortal}
                  size={getCloseIconSize(isHandheld, size)}
                />}
              />
            )}
            { renderContent && renderContent({ ...props, size }) }
            { footer || defaultFooter }
          </ModalContent>
        </Overlay>
      </GlobalStylesScope>
    </Portal>
  )
})

export default withMedia(Modal)
