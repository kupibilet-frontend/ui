
import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import { ICON_SIZES } from 'components/Icon/consts'


const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter}
`

const PanelHeaderText = styled.div`
  font-weight: 700;
  user-select: none;
`

const CollapseHeaderArrow = styled(Icon)`
  fill: ${({ theme }) => theme.color.miscDarker};
  display: block;
`


export interface TPanelHeaderProps {
  isActive?: boolean,
  header?: string | JSX.Element,
}

const renderDefaultHeader = (props: TPanelHeaderProps): JSX.Element => (
  <PanelHeader>
    <PanelHeaderText>{props.header}</PanelHeaderText>
    <CollapseHeaderArrow name="angle" rotate={props.isActive} size={ICON_SIZES.normal} />
  </PanelHeader>
)

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

  return (
    <div {...restProps}>
      <div onClick={onClick} onKeyDown={onClick}>
        {renderHeader({ header, isActive: isOpen })}
      </div>
      {isOpen && (
        <>
          {children}
        </>
      )}
    </div>
  )
}

export default CollapsePanel
