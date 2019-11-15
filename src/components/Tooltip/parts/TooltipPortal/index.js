// @flow
import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import type { Coordinates } from 'components/Tooltip/types'
import {
  Header,
  HeaderText,
  PlacementWrapper,
  PositionWrapper,
  RelativeWrapper,
  TooltipBackground,
  TooltipContainer,
  TooltipPointer,
} from './styled'

type PortalProps = {
  isOpen: boolean,
  coordinates?: Coordinates,
  placement: string,
  content?: string | React.Node,
  header?: string | React.Node,
  align?: string,
  maxWidth?: number,
}

function TooltipPortal({
  isOpen,
  coordinates,
  placement,
  content,
  align,
  header,
  maxWidth,
}: PortalProps) {
  if (!content || !isOpen || !coordinates) return null

  return (
    <Portal>
      <GlobalStylesScope>
        <TooltipContainer
          top={coordinates.top}
          left={coordinates.left}
          width={coordinates.width}
          height={coordinates.height}
          placement={placement}
        >
          <PositionWrapper>
            <PlacementWrapper placement={placement}>
              <RelativeWrapper
                placement={placement}
                width={coordinates.width}
                height={coordinates.height}
              >
                <TooltipPointer placement={placement} />
                <TooltipBackground align={align} maxWidth={maxWidth}>
                  {header && (
                    <Header>
                      <HeaderText>
                        {header}
                      </HeaderText>
                    </Header>
                  )}
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

TooltipPortal.defaultProps = {
  content: null,
  coordinates: null,
  align: '',
  header: null,
  maxWidth: null,
}

export default TooltipPortal
