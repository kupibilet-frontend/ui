import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import { usePopover } from 'hooks/usePopover'
import React from 'react'
import { Portal } from 'react-portal'
import { OVERLAY_Z_INDEX } from 'components/Overlay'
import { TooltipBackground, TooltipIconContainer, TooltipIcon } from './styled'
import { TTooltipProps } from './types'

const Tooltip = ({
  content,
  placement = 'bottom',
  success = false,
  error = false,
  children,
  className = '',
}: TTooltipProps): JSX.Element => {
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
        ref={setRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        key="tooltippedElement"
        className={className}
      >
        {children}
      </div>
      {isOpen && (
        <Portal>
          <GlobalStylesScope>
            <div
              ref={setPopper}
              style={{ ...styles.popper, zIndex: OVERLAY_Z_INDEX - 1 }}
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
                <TextSmall>
                  { content }
                </TextSmall>
              </TooltipBackground>
            </div>
          </GlobalStylesScope>
        </Portal>
      )}
    </>
  )
}

export default Tooltip
