// @flow

/*
 * StyledCollapse is just a simple wrapper of Collapse component
 * It is used to unify collapse elements in the company
 * */
import React from 'react'
import type { Node } from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import StyledCollapse from 'components/Collapse'

type HeaderProps = {
  withPadding: boolean,
  isActive: boolean,
  header: Node,
}

type StyledCollapseProps = {
  renderHeader?: (props: HeaderProps) => Node,
  children: React.Element<*>,
} & HeaderProps

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px ${({ withPadding }) => (withPadding ? '18px' : '0')};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter}
`

const PanelHeaderText = styled.div`
  font-weight: 700;
  user-select: none;
`

export const CollapseHeaderArrow = styled(Icon)`
  fill: ${({ theme }) => theme.color.miscDarker};
  display: block;
`

const PanelContentWrapper = styled.div`
  padding: 0 ${({ withPadding }) => (withPadding ? '18px' : '0')};
`

export const renderDefaultHeader = (props: HeaderProps) => (
  <PanelHeader withPadding={props.withPadding}>
    <PanelHeaderText>{props.header}</PanelHeaderText>
    <CollapseHeaderArrow name="angle" rotate={props.isActive} size="normal" />
  </PanelHeader>
)

export const StyledPanel = (props: StyledCollapseProps) => (
  <StyledCollapse.Panel
    {...props}
    header={props.renderHeader(props)}
  >
    <PanelContentWrapper withPadding={props.withPadding}>
      {props.children}
    </PanelContentWrapper>
  </StyledCollapse.Panel>
)

StyledPanel.defaultProps = {
  renderHeader: renderDefaultHeader,
}

export const Panel = StyledPanel

export default StyledCollapse
