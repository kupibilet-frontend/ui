
import React from 'react'
import styled, { css } from 'styled-components'
import Icon from 'components/Icon'
import { ICON_SIZES } from 'components/Icon/consts'
import { borderRadiusMedium } from 'utils/borderRadius'
import useMouseState from 'hooks/useMouseState'

const PanelHeader = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
  width: 100%;
  ${({ theme, isOpen }) => !isOpen && `border-bottom: 1px solid ${theme.color.misc200};`}
  cursor: pointer;
`

const PanelHeaderText = styled.h4`
  font-weight: 500;
  user-select: none;
  color: ${({ theme }) => theme.color.colorTextPrimaryNormal};
  padding-right: 16px;
  font-size: 18px;
  line-height: 28px;
  margin: 0;
  
  ${({ theme }) => css`
    @media ${theme.queries.isMobile} {
      font-size: 16px;
      line-height: 24px;
    }
  `}
`

const CollapseButton = styled.div<{ isHover: boolean, isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: ${({ theme, isHover, isActive }) => {
    if (isActive) {
      return theme.color.colorBgSecondaryActive
    }

    if (isHover) {
      return theme.color.colorBgSecondaryHover
    }

    return theme.color.colorBgSecondaryNormal
  }};
  ${borderRadiusMedium.all}
`

const CollapseButtonIcon = styled(Icon)`
  fill: ${({ theme }) => theme.color.colorTextPrimaryNormal};
  display: block;
`

export const StyledPanelContent = styled.div`
  color: ${({ theme }) => theme.color.colorTextSecondaryDefault};
  border-bottom: 1px solid ${({ theme }) => theme.color.misc200};
`

export interface TPanelHeaderProps {
  isActive?: boolean,
  header?: string | JSX.Element,
  isMouseHover: boolean,
  isMouseActive: boolean,
}

const renderDefaultHeader = (props: TPanelHeaderProps): JSX.Element => {
  const {
    header,
    isActive,
    isMouseHover,
    isMouseActive,
  } = props

  return (
    <PanelHeader isOpen={isActive}>
      <PanelHeaderText as="div">
        {header}
      </PanelHeaderText>
      <CollapseButton isHover={isMouseHover} isActive={isMouseActive}>
        <CollapseButtonIcon
          name="angle"
          rotate={isActive}
          size={ICON_SIZES.normal}
        />
      </CollapseButton>
    </PanelHeader>
  )
}

interface TPropsFromCollapseParent {
  isOpen?: boolean,
  onClick?: () => void,
}

interface TProps extends TPropsFromCollapseParent {
  header?: string | JSX.Element,
  children: React.ReactElement | string,
  renderHeader?: (props: TPanelHeaderProps) => JSX.Element,
}

function CollapsePanel(props: TProps): JSX.Element {
  const {
    isOpen,
    header = '',
    children,
    onClick,
    renderHeader = renderDefaultHeader,
    ...restProps
  } = props

  const {
    isMouseHover,
    isMouseActive,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
  } = useMouseState()

  return (
    <div {...restProps}>
      <div
        onClick={onClick}
        onKeyDown={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {renderHeader({
          header,
          isActive: isOpen,
          isMouseHover,
          isMouseActive,
        })}
      </div>
      {isOpen && (
        <StyledPanelContent>
          {children}
        </StyledPanelContent>
      )}
    </div>
  )
}

export default CollapsePanel
