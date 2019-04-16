/* eslint-disable consistent-return, arrow-body-style */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { styles as boxStyles } from 'components/Box'
import Collapse from 'components/Collapse'
import Icon from 'components/Icon'
import Link from 'components/Link'


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
  ${horizontalPadding}
  align-items: center;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
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
    <Link
      rightIcon={
        <Icon name="angle" rotate={props.isActive} inheritColor />
      }
    >
      {props.children}
    </Link>
  </PanelHeader>
)

PanelHeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
}

PanelHeaderWrapper.defaultProps = {
  isActive: false,
}


const FilterSection = (props) => (
  <Section className={props.className}>
    <Header>
      {props.headerLeft}
      {props.headerRight}
    </Header>
    {Boolean(props.content) &&
      <Content>
        {props.content}
      </Content>
    }
    {props.collapse}
  </Section>
)

FilterSection.propTypes = {
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  content: PropTypes.node,
  collapse: PropTypes.node,
  className: PropTypes.string,
}

FilterSection.defaultProps = {
  collapse: null,
  className: '',
  headerLeft: undefined,
  headerRight: undefined,
  content: undefined,
}

FilterSection.Collapse = Collapse
FilterSection.Panel = Panel

export default FilterSection
