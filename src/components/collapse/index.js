/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React, { PropTypes } from 'react'
import RcCollapse from 'rc-collapse'

import { PanelHeader, PanelContent, RcCollapseWrapper, IconWrap } from './styled'

const RcPanel = RcCollapse.Panel

const CollapsePropTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  showArrow: PropTypes.bool,
}

const HeaderComp = (props) => (
  <PanelHeader>
    {props.children}
    <IconWrap
      className="icon"
      name="arrow-down"
      stroke="primaryDarkest"
      fill="primaryDarkest"
      size="xxsmall"
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

export const Panel = RcPanelWrapper


function Collapse(props) {
  return (
    <RcCollapseWrapper {...props} />
  )
}

Collapse.defaultProps = {
  prefixCls: 'kb-collapse',
}

Collapse.propTypes = CollapsePropTypes

export default Collapse
