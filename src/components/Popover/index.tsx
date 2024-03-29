import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import { usePopover } from 'hooks/usePopover'
import { OVERLAY_Z_INDEX } from 'components/Overlay'
import { TPopoverProps } from './types'
import {
  PopoverBackground,
  Header,
  HeaderText,
  PopoverIconContainer,
  PopoverIcon,
  TextCaption,
} from './styled'

function Popover(props: TPopoverProps): JSX.Element {
  const {
    children,
    content,
    header,
    placement = 'bottom-start',
    size = 'normal',
    zIndex = OVERLAY_Z_INDEX - 1,
    className = '',
    autoWidth = false,
  } = props

  const {
    isOpen,
    setRef,
    setPopper,
    setArrow,
    styles,
    attributes,
    onMouseEnter,
    onMouseLeave,
    side,
  } = usePopover(placement)

  return (
    <>
      <div
        key="PopoverpedElement"
        ref={setRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={className}
      >
        {children}
      </div>
      {isOpen && (
        <Portal>
          <GlobalStylesScope>
            <div
              ref={setPopper}
              style={{ ...styles.popper, zIndex }}
              {...attributes.popper}
            >
              <PopoverIconContainer
                ref={setArrow}
                style={styles.arrow}
                {...attributes.arrow}
                side={side}
              >
                <PopoverIcon side={side} />
              </PopoverIconContainer>
              <PopoverBackground size={size} autoWidth={autoWidth} header={header}>
                {header && (
                  <Header>
                    <HeaderText>
                      {header}
                    </HeaderText>
                  </Header>
                )}
                <TextCaption>
                  {content}
                </TextCaption>
              </PopoverBackground>
            </div>
          </GlobalStylesScope>
        </Portal>
      )}
    </>
  )
}

export default Popover
