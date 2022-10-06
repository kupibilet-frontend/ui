import styled, { css } from 'styled-components'
import { borderRadiusLarge } from 'utils/borderRadius'
import { queries } from 'utils/media-queries'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { OVERLAY_Z_INDEX } from 'components/Overlay'
import Typography from 'components/Typography'

import { getWidth, isCompact, isSetSize } from './utils'
import { ModalSize } from './types'

interface TProps {
  size: ModalSize,
}

export const H4 = styled(Typography)`
  margin: 0;
`

export const ModalContent = styled.div<TProps>`
  ${borderRadiusLarge.all}
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: ${OVERLAY_Z_INDEX + 1};
  width: ${({ size }) => getWidth(size)};

  @media ${queries.isTablet} {
    ${({ size }) => !isSetSize(size) && `
        width: 80vw;
    `}
  }

  @media ${queries.isMobile} {
    border-radius: 0;
    width: 100%;
  }
`

export const Header = styled.div<TProps>`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  min-height: 60px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.colorTextPrimaryNormal};
  padding: 42px 42px ${({ size }) => (isCompact(size) ? '18' : '30')}px;

  @media ${queries.isDesktop} {
    max-width: 672px;
  }


  @media ${queries.isTablet} {
    padding: 42px 102px 24px 42px;
  }

  @media ${queries.isMobile} {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 30px 30px 18px 30px;
  }
`

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  margin-bottom: 18px;
  padding: 0 42px;
  color: ${({ theme }) => theme.color.colorTextSecondaryDefault};

  @media ${queries.isMobile} {
    padding: 0 30px;
  }
`

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`

export const CloseIcon = styled(Button)<{ modalSize: ModalSize }>`
  background: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.colorBgSecondaryNormal : 'none')};
  position: ${(props) => (isCompact(props.modalSize) ? 'absolute' : 'fixed')};
  right: ${(props) => (isCompact(props.modalSize) ? '12' : '4')}px;
  top: ${(props) => (isCompact(props.modalSize) ? '12' : '5')}px;

  &:hover {
    background: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.colorBgSecondaryHover : 'none')};
    box-shadow: none;
  }

  &:focus {
    background: ${({ modalSize, theme }) => (isCompact(modalSize) ? theme.color.colorBgSecondaryActive : 'none')};
    box-shadow: none;
  }

  @media ${queries.isHandheld} {
    background: ${({ theme }) => theme.color.colorBgSecondaryNormal}; 
    margin-left: 32px;
    position: absolute;
    right: 12px;
    top: 12px;
    z-index: 2;

    &:hover {
      box-shadow: none;
    }

    ${StyledIcon} {
      fill: ${({ theme }) => theme.color.primary700};
    }
  }
`

export const Footer = styled.div<TProps>`
  display: flex;
  padding: ${({ size }) => (isCompact(size) ? '18' : '42')}px 42px;

  @media ${queries.isTablet} {
    padding: 42px;
  }

  @media ${queries.isMobile} {
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }
`

export const CloseButton = styled(Button)`
  @media ${queries.isMobile} {
    width: 100%;
    margin-top: 12px;
  }
`

export const SubmitButton = styled(Button)`
  margin-right: 8px;

  @media ${queries.isMobile} {
    width: 100%;
    margin-right: 0;
  }
`
