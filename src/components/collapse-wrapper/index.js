import React, { PropTypes } from 'react'
import styled from 'styled-components'

export const StyledCollapseWrapper = styled.div`
  background: ${({ theme }) => (theme.color.background)};
  border: 1px solid ${({ theme }) => (theme.color.miscLighter)};
  border-radius: 6px;
  width: 252px;
`

function CollapseWrapper(props) {
  return (
    <StyledCollapseWrapper>{props.children}</StyledCollapseWrapper>
  )
}

CollapseWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CollapseWrapper
