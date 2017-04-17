/* eslint-disable consistent-return */

import React from 'react'
import RcCollapse from 'rc-collapse'
import styled from 'styled-components'

import { switchTransition } from '../../utils/transitions'

const PanelStyled = styled(RcCollapse.Panel)`
  overflow: hidden;

  .kb-collapse-content {
    ${switchTransition}
  }

  .kb-collapse-content.kb-collapse-content-inactive {
    display: none;
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
