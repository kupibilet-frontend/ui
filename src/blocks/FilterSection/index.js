/* eslint-disable consistent-return, arrow-body-style */

import React from 'react'
import PropTypes from 'prop-types'
import Collapse from 'components/Collapse'
import Icon from 'components/Icon'
import Link from 'components/Link'

import {
  Section,
  Header,
  Content,
  PanelContent,
  PanelHeader,
  PanelWrapper,
} from './styled'

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

const PanelHeaderWrapper = ({ children, isActive }) => (
  <PanelHeader>
    <Link
      rightIcon={
        <Icon
          size="xxsmall"
          name="angle"
          rotate={isActive}
          inheritColor
        />
      }
    >
      {children}
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

const FilterSection = ({
  content,
  collapse,
  headerLeft,
  headerRight,
  className,
}) => (
  <Section className={className}>
    <Header>
      {headerLeft}
      {headerRight}
    </Header>
    {content ? (
      <Content>
        {content}
      </Content>
    ) : null}
    {collapse}
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
