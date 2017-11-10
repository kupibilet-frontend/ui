/* eslint-disable consistent-return */

import React from 'react'
import RcCollapse from 'rc-collapse'
import styled from 'styled-components'

import { switchTransition, time } from 'utils/transitions'

const PanelStyled = styled(RcCollapse.Panel)`
  overflow: hidden;

  &.rc-collapse-item-active {
    overflow: visible;
    animation: ${time * 4}s overflowDelay;
  }

  .rc-collapse-content {
    ${switchTransition}
  }

  .rc-collapse-content.rc-collapse-content-inactive {
    display: none;
  }

  @keyframes overflowDelay {
    from { overflow: hidden; }
  }
`

const Panel = (props) => {
  const { header } = props
  let wrappedHeader = header

  if (React.isValidElement(header)) {
    wrappedHeader = React.cloneElement(header, {
      isActive: props.isActive,
    })
  }

  return (
    <PanelStyled
      {...props}
      header={wrappedHeader}
    />
  )
}

Panel.propTypes = RcCollapse.Panel.propTypes
Panel.defaultProps = {
  showArrow: false,
}

export default Panel
