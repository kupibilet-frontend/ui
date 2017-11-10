/* eslint-disable consistent-return */

import React from 'react'
import RcCollapse from 'rc-collapse'
import styled from 'styled-components'

import { switchTransition, time } from 'utils/transitions'

const PanelStyled = styled(RcCollapse.Panel)`
  overflow: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  animation: overflowDelay ${time}s forwards;

  .rc-collapse-content {
    ${switchTransition}
  }

  .rc-collapse-content.rc-collapse-content-inactive {
    display: none;
  }

  @keyframes overflowDelay {
    100% { overflow: ${({ isActive }) => (isActive ? 'visible' : 'hidden')} };
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
