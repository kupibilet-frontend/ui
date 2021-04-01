import React from 'react'
import { Portal } from 'react-portal'
import { GlobalStylesScope } from 'components/ThemeProvider'
import TextSmall from 'components/Typography/TextSmall'
import { TPopoverContentProps } from 'components/Popover/types'
import {
  PopoverBackground,
  PopoverContainer,
  RelativeWrapper,
  PopoverDot,
  PositionWrapper,
  PlacementWrapper,
  Header,
  HeaderText,
} from './styled'


function PopoverContent(props: TPopoverContentProps): JSX.Element | null {
  const {
    isOpen,
    coordinates,
    placement,
    content,
    header,
    size,
  } = props

  if (!content || !isOpen || !coordinates) return null

  return (
    <Portal>
      <GlobalStylesScope>
        <PopoverContainer
          coordinates={coordinates}
          placement={placement}
        >
          <PositionWrapper>
            <PlacementWrapper placement={placement}>
              <RelativeWrapper placement={placement}>
                <PopoverDot placement={placement} />
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
              </RelativeWrapper>
            </PlacementWrapper>
          </PositionWrapper>
        </PopoverContainer>
      </GlobalStylesScope>
    </Portal>
  )
}


export default PopoverContent
