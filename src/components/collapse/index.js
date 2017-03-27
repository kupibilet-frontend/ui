import React, { PropTypes } from 'react'
import RcCollapse from 'rc-collapse'

import Icon from '../icons'
import { PanelHeader, IconWrap, PanelContent, RcCollapseWrapper } from './styled'

const RcPanel = RcCollapse.Panel

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

export default class Collapse extends React.Component {
  static Panel = RcPanelWrapper

  static defaultProps = {
    prefixCls: 'kb-collapse',
    bordered: true,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    showArrow: PropTypes.bool,
  }

  render() {
    return (
      <RcCollapseWrapper {...this.props} />
    )
  }
}
