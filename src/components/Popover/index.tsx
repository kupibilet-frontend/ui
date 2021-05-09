import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import { usePopover } from 'hooks/usePopover'
import { TPopoverProps } from './types'
import {
  PopoverBackground,
  Header,
  HeaderText,
  PopoverIconContainer,
  PopoverIcon,
} from './styled'

function Popover(props: TPopoverProps): JSX.Element {
  const {
    children,
    content,
    header,
    placement = 'bottom-start',
    size = 'normal',
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
        style={{ display: 'inline-flex' }}
      >
        {children}
      </div>
      {isOpen && (
        <Portal>
          <GlobalStylesScope>
            <div ref={setPopper} style={{ ...styles.popper, zIndex: 100 }} {...attributes.popper}>
              <PopoverIconContainer
                ref={setArrow}
                style={styles.arrow}
                {...attributes.arrow}
                side={side}
              >
                <PopoverIcon side={side} />
              </PopoverIconContainer>
              <PopoverBackground size={size}>
                {header && (
                  <Header>
                    <HeaderText>
                      {header}
                    </HeaderText>
                  </Header>
                )}
                <TextSmall>
                  {content}
                </TextSmall>
              </PopoverBackground>
            </div>
          </GlobalStylesScope>
        </Portal>
      )}
    </>
  )
}

export default Popover
