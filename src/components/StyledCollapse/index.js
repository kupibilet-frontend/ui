/*
 * StyledCollapse is just a simple wrapper of Collapse component
 * It is used to unify collapse elements in the company
 * */
import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Collapse from 'components/Collapse'

const StyledCollapse = Collapse

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px ${({ withPadding }) => (withPadding ? '18px' : '0')};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter}
`

const PanelHeaderText = styled.div`
  font-weight: bold;
  user-select: none;
`

export const CollapseHeaderArrow = styled(Icon)`
  fill: ${({ theme }) => theme.color.miscDarker};
  display: block;
`

const PanelContentWrapper = styled.div`
  padding: 0 ${({ withPadding }) => (withPadding ? '18px' : '0')};
`

export const StyledPanel = (props) => (
  <Collapse.Panel
    {...props}
    header={props.renderHeader ? props.renderHeader() : (
      <PanelHeader withPadding={props.withPadding}>
        <PanelHeaderText>{props.header}</PanelHeaderText>
        <CollapseHeaderArrow name="angle" rotate={props.isActive} size="normal" />
      </PanelHeader>
    )}
  >
    <PanelContentWrapper withPadding={props.withPadding}>
      {props.children}
    </PanelContentWrapper>
  </Collapse.Panel>
)

export default StyledCollapse
