/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React, { PropTypes } from 'react'
import RcCollapse from 'rc-collapse'

import Icon from '../icons'
import { PanelHeader, PanelContent, RcCollapseWrapper } from './styled'

const RcPanel = RcCollapse.Panel

const CollapsePropTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  showArrow: PropTypes.bool,
}

const HeaderComp = (props) => (
  <PanelHeader>
    {props.children}
    <Icon
      className="icon"
      name="arrow-down"
      stroke="primaryDarkest"
      fill="primaryDarkest"
      size="xxsmall"
      style={{ margin: '3px 0 0 3px', transitionProperty: 'transform' }}
    />
  </PanelHeader>
)

HeaderComp.propTypes = {
  children: PropTypes.node,
}

const RcPanelWrapper = (props) => {
  const { header, showArrow } = props

  return (
    <RcPanel
      {...props}
      showArrow={false}
      header={
        <HeaderComp showArrow={showArrow}>{header}</HeaderComp>
      }
    >
      <PanelContent>{props.children}</PanelContent>
    </RcPanel>
  )
}

RcPanelWrapper.propTypes = CollapsePropTypes

function Collapse(props) {
  return (
    <RcCollapseWrapper {...props} />
  )
}

export const Panel = RcPanelWrapper

Collapse.defaultProps = {
  prefixCls: 'kb-collapse',
}

Collapse.propTypes = CollapsePropTypes

export default Collapse
