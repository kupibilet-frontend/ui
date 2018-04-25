/* eslint-disable consistent-return */

import React from 'react'
import RcCollapse from 'rc-collapse'
import styled from 'styled-components'

import { switchTransition } from 'utils/transitions'

const PanelStyled = styled(RcCollapse.Panel)`
  .rc-collapse-anim {
    overflow: hidden;
  }

  .rc-collapse-content {
    ${switchTransition}
  }

  .rc-collapse-content.rc-collapse-content-inactive {
    display: none;
  }

  .rc-collapse-header:focus {
    outline: none;
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
