import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import {
  TooltipBackground,
  TooltipContainer,
  RelativeWrapper,
  TooltipDot,
  PositionWrapper,
  PlacementWrapper,
} from './styled'
import { TCoordinates, TPlacement } from '../types'

interface TProps {
  isOpen: boolean,
  coords?: TCoordinates,
  placement: TPlacement,
  content: React.ReactNode,
  success?: boolean,
  error?: boolean,
}

const TooltipPortal = ({
  isOpen,
  coords,
  placement,
  content,
  success = false,
  error = false,
}: TProps): JSX.Element | null => {
  if (!content || !isOpen || !coords) return null

  return (
    <Portal>
      <GlobalStylesScope>
        <TooltipContainer
          top={coords.top}
          left={coords.left}
          width={coords.width}
          height={coords.height}
          placement={placement}
        >
          <PositionWrapper>
            <PlacementWrapper placement={placement}>
              <RelativeWrapper
                placement={placement}
                width={coords.width}
                height={coords.height}
              >
                <TooltipDot
                  success={success}
                  error={error}
                />
                <TooltipBackground
                  success={success}
                  error={error}
                >
                  <TextSmall>
                    { content }
                  </TextSmall>
                </TooltipBackground>
              </RelativeWrapper>
            </PlacementWrapper>
          </PositionWrapper>
        </TooltipContainer>
      </GlobalStylesScope>
    </Portal>
  )
}

export default TooltipPortal
