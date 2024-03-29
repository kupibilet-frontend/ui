import { GlobalStylesScope } from 'components/ThemeProvider'
import { usePopover } from 'hooks/usePopover'
import React from 'react'
import { Portal } from 'react-portal'
import { OVERLAY_Z_INDEX } from 'components/Overlay'
import {
  TooltipBackground,
  TooltipIconContainer,
  TooltipIcon,
  TextCaption,
} from './styled'
import { TTooltipProps } from './types'

const Tooltip = ({
  content,
  placement = 'bottom',
  success = false,
  error = false,
  children,
  className = '',
  zIndex = OVERLAY_Z_INDEX - 1,
  isOpen: isOpenProp = null,
}: TTooltipProps): JSX.Element => {
  const {
    isOpen: isOpenInnerState,
    setRef,
    setPopper,
    setArrow,
    styles,
    attributes,
    onMouseEnter,
    onMouseLeave,
    side,
  } = usePopover(placement)

  const isTooltipOpen = isOpenProp === null ? isOpenInnerState : isOpenProp

  return (
    <>
      <div
        ref={setRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        key="tooltippedElement"
        className={className}
      >
        {children}
      </div>
      {isTooltipOpen && (
        <Portal>
          <GlobalStylesScope>
            <div
              ref={setPopper}
              style={{ ...styles.popper, zIndex }}
              {...attributes.popper}
            >
              <TooltipIconContainer
                ref={setArrow}
                style={styles.arrow}
                {...attributes.arrow}
                side={side}
              >
                <TooltipIcon
                  side={side}
                  success={success}
                  error={error}
                />
              </TooltipIconContainer>
              <TooltipBackground
                side={side}
                success={success}
                error={error}
              >
                <TextCaption>
                  { content }
                </TextCaption>
              </TooltipBackground>
            </div>
          </GlobalStylesScope>
        </Portal>
      )}
    </>
  )
}

export default Tooltip
