import styled, { DefaultTheme, keyframes } from 'styled-components'
import { transparentize } from 'polished'
import Text from 'components/Typography/Text'
import mq from 'utils/media-queries'
import getPopoverContainerCoordinates from './getPopoverContainerCoordinates'
import {
  TPopoverContainerProps,
  TPlacementWrapperProps,
  TRelativeWrapperProps,
  TPopoverDotProps,
  TPopoverBackgroundProps,
  TPopoverPlacement,
} from '../types'


const POPOVER_SIZES = {
  normal: '360px',
  large: '480px',
}

const PLACEMENT_TO_FLEX_DIRECTION = {
  bottom: 'row',
  top: 'row',
  left: 'row-reverse',
  right: 'row',
}

const SUB_POSITIONS = {
  top: 'bottom: 0;',
  bottom: 'top: 0;',
  right: 'left: 0;',
  left: 'right: 0;',
}

const DOT_MARGINS = {
  top: '2px 12px;',
  bottom: '2px 12px;',
  left: '12px 2px;',
  right: '12px 2px;',
}

const CONTAINER_ANIMATION_KEYFRAMES = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const getFlexDirection = (placement: TPopoverPlacement) => {
  if (placement === 'top' || placement === 'bottom') {
    return PLACEMENT_TO_FLEX_DIRECTION[placement]
  }

  return PLACEMENT_TO_FLEX_DIRECTION[placement]
}

const getBackgroundColor = (theme: DefaultTheme) => {
  return transparentize(0.03, theme.color.textDarker)
}


const PopoverContainer = styled.div<TPopoverContainerProps>`
  height: 0;
  position: absolute;
  opacity: 0;
  animation: 0.15s ease-out forwards ${CONTAINER_ANIMATION_KEYFRAMES};
  ${(props) => {
    const coordinates = getPopoverContainerCoordinates(props)

    return `
      top: ${coordinates.top}px;
      left: ${coordinates.left}px;
    `
  }}
  
  z-index: 100;
  
  ${mq.handheld`
    width: 100%;
    right: 0;
    left: 0;
  `}
  `


const PositionWrapper = styled.div`
  position: relative;
`

const PlacementWrapper = styled.div<TPlacementWrapperProps>`
  position: absolute;
  ${({ placement }) => SUB_POSITIONS[placement]}

  ${mq.handheld`
    width: 100%;
  `}
`

const RelativeWrapper = styled.div<TRelativeWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ placement }) => getFlexDirection(placement)};

  ${({ placement }) => (placement === 'top' || placement === 'bottom') && 'flex-wrap: wrap;'}

  justify-content: flex-start;

  ${mq.handheld`
    justify-content: center;
  `}
`

const PopoverDot = styled.div<TPopoverDotProps>`
  order: ${({ placement }) => (placement === 'top' ? 3 : 1)};
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  margin: ${({ placement }) => DOT_MARGINS[placement]}
  border-radius: 50%;
  background: ${(props) => getBackgroundColor(props.theme)};

  ${mq.handheld`
    display: none;
  `}
`

const PopoverBackground = styled.div<TPopoverBackgroundProps>`
  order: 2;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 240px;
  max-width: ${({ size }) => POPOVER_SIZES[size]};
  background: ${(props) => getBackgroundColor(props.theme)};
  color: ${({ theme }) => theme.color.background};
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;

  ${mq.handheld`
    max-width: auto;
    flex: 1;
    margin: 12px;
  `}
`

const HeaderText = styled(Text)`
  font-weight: 600;
`

const Header = styled.div`
  margin-bottom: 3px;
`

export {
  PopoverBackground,
  PopoverContainer,
  RelativeWrapper,
  PopoverDot,
  PositionWrapper,
  PlacementWrapper,
  Header,
  HeaderText,
}
