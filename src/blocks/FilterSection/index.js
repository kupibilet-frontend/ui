/* eslint-disable consistent-return, arrow-body-style */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { styles as boxStyles } from '../../components/box'
import Collapse from '../../components/collapse'
import Icon from '../../components/icons'
import Link from '../../utils/link'


const Section = styled.section`
  ${boxStyles}
`

const horizontalPadding = css`
  padding-left: 18px;
  padding-right: 18px;
`

const Header = styled.header`
  ${horizontalPadding}
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const Content = styled.div`
  ${horizontalPadding}
  padding-bottom: 24px;
`

const PanelContent = styled(Content)`
  padding-left: 19px;
`

const PanelHeader = styled.div`
  ${Link}
  ${horizontalPadding}
  align-items: center;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
`

const IconWrapper = styled(Icon)`
  margin: 3px 0 0 3px;
  transition-property: transform;

  ${({ isActive }) => {
    if (isActive) {
      return `
        transform: rotate(-180deg);
      `
    }
  }}
`

const PanelWrapper = styled(Collapse.Panel)`
  margin: 0 -1px;
  border-top: 1px solid ${({ theme }) => (theme.color.miscLighter)};
`

const Panel = (props) => {
  return (
    <PanelWrapper
      {...props}
      header={<PanelHeaderWrapper>{props.title}</PanelHeaderWrapper>}
    >
      <PanelContent>
        {props.children}
      </PanelContent>
    </PanelWrapper>
  )
}

Panel.propTypes = {
  ...Collapse.Panel.PropTypes,
  title: PropTypes.node.isRequired,
}


const PanelHeaderWrapper = (props) => (
  <PanelHeader>
    {props.children}
    <IconWrapper
      name="arrow-down"
      size="xxsmall"
      isActive={props.isActive}
      inheritColor
    />
  </PanelHeader>
)

PanelHeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
}

PanelHeaderWrapper.defaultProps = {
  isActive: false,
}


const FilterBox = (props) => (
  <Section>
    <Header>
      {props.headerLeft}
      {props.headerRight}
    </Header>
    <Content>
      {props.content}
    </Content>
    {props.collapse}
  </Section>
)

FilterBox.propTypes = {
  headerLeft: PropTypes.node.isRequired,
  headerRight: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  collapse: PropTypes.node,
}

FilterBox.defaultProps = {
  collapse: null,
}

FilterBox.Collapse = Collapse
FilterBox.Panel = Panel

export default FilterBox
