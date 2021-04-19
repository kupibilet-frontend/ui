import styled, { keyframes } from 'styled-components'
import Text from 'components/Typography/Text'
import { queries } from 'utils/media-queries'
import { getPopoverArrow } from 'utils/getPopoverArrow'
import { transparentize } from 'polished'
import { color } from 'components/ThemeProvider/theme'
import {
  TPopoverBackgroundProps,
  TPopoverIconProps,
} from './types'

const iconSrc = getPopoverArrow(transparentize(0.03, color.textDarker))

const POPOVER_SIZES: { [key: string]: string } = {
  normal: '360px',
  large: '480px',
}

const CONTAINER_ANIMATION_KEYFRAMES = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const PopoverIconContainer = styled.div<TPopoverIconProps>`
  flex-shrink: 0;
  animation: 0.15s ease-out forwards ${CONTAINER_ANIMATION_KEYFRAMES};
  ${({ placement }) => {
    switch (placement) {
      case 'top':
        return 'bottom: -8px;'
      case 'right':
        return 'left: -8px;'
      case 'left':
        return 'right: -8px;'
      case 'bottom':
      default:
        return 'top: -8px;'
    }
  }}
`

const PopoverIcon = styled.div<TPopoverIconProps>`
  background-image: ${iconSrc};
  width: 20px;
  height: 8px;

  ${({ placement }) => {
    switch (placement) {
      case 'top':
        return 'transform: rotate(180deg);'
      case 'right':
        return 'transform: rotate(-90deg);'
      case 'left':
        return 'transform: rotate(90deg);'
      case 'bottom':
      default:
        return ''
    }
  }}
`

const PopoverBackground = styled.div<TPopoverBackgroundProps>`
  animation: 0.15s ease-out forwards ${CONTAINER_ANIMATION_KEYFRAMES};
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 240px;
  max-width: ${({ size }) => POPOVER_SIZES[size]};
  background: rgba(51, 51, 51, 0.97);
  color: ${({ theme }) => theme.color.background};
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;

  @media ${queries.isHandheld} {
    max-width: auto;
    flex: 1;
  }
`

const HeaderText = styled(Text)`
  font-weight: 600;
`

const Header = styled.div`
  margin-bottom: 3px;
`

export {
  PopoverBackground,
  Header,
  HeaderText,
  PopoverIconContainer,
  PopoverIcon,
}
