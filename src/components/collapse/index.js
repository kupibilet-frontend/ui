import React, { PropTypes } from 'react'
import RcCollapse from 'rc-collapse'

import Icon from '../icons'
import { PanelHeader, IconWrap, PanelContent, RcCollapseWrapper } from './styled'

const RcPanel = RcCollapse.Panel

/* eslint-disable react/require-default-props, react/no-unused-prop-types */

const CollapsePropTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  showArrow: PropTypes.bool,
}

const HeaderComp = (props) => (
  <PanelHeader>
    {props.children}
    <IconWrap className="icon-wrap">
      <Icon
        name="arrow-down"
        stroke="primaryDarkest"
        fill="primaryDarkest"
        size="xxsmall"
      />
    </IconWrap>
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

export default class Collapse extends React.Component {
  static Panel = RcPanelWrapper

  static defaultProps = {
    prefixCls: 'kb-collapse',
    bordered: true,
  }

  static propTypes = CollapsePropTypes

  render() {
    return (
      <RcCollapseWrapper {...this.props} />
    )
  }
}
