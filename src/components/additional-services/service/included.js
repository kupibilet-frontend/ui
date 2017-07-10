// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #23c256;
`

const Included = (props) => (
  <Root>
    Включено ✓
  </Root>
)

export default Included
