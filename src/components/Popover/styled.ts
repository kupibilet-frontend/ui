import styled, { keyframes, DefaultTheme, css } from 'styled-components'
import { queries } from 'utils/media-queries'
import { getPopoverArrow } from 'utils/getPopoverArrow'
import {
  TPopoverBackgroundProps,
  TPopoverIconProps,
} from './types'

interface TGetBackgroundImage {
  theme: DefaultTheme,
}

const getBackgroundImage = ({ theme }: TGetBackgroundImage) => {
  const iconSrc = getPopoverArrow(theme.color.colorBgContrastNormal)

  if (iconSrc) {
    return `background-image: ${iconSrc}`
  }

  return ''
}

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
  ${({ side }) => {
    switch (side) {
      case 'top':
        return 'bottom: -8px;'
      case 'right':
        return 'left: -14px;'
      case 'left':
        return 'right: -14px;'
      case 'bottom':
      default:
        return 'top: -8px;'
    }
  }}
`

const PopoverIcon = styled.div<TPopoverIconProps>`
  ${getBackgroundImage};
  width: 20px;
  height: 8px;

  ${({ side }) => {
    switch (side) {
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
  background: ${({ theme }) => theme.color.colorBgContrastNormal};
  color: ${({ theme }) => theme.color.colorTextContrastDefault};
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;

  ${({ size, autoWidth }) => !autoWidth && css`
    min-width: 240px;
    max-width: ${POPOVER_SIZES[size]};
  `}

  @media ${queries.isHandheld} {
    max-width: auto;
    flex: 1;
  }
`

const HeaderText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 14px;
      line-height: 20px;
    }
  `}
`
const Header = styled.div`
  margin-bottom: 3px;
`

const TextCaption = styled.span`
  font-size: 14px;
  line-height: 20px;

  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 12px;
      line-height: 26px;
    }
  `}
`

export {
  PopoverBackground,
  Header,
  HeaderText,
  PopoverIconContainer,
  PopoverIcon,
  TextCaption,
  getBackgroundImage,
  CONTAINER_ANIMATION_KEYFRAMES,
}
