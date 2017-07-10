// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #7d89a1;
`

const Added = (props) => (
  <Root>
    Добавлено ✓
  </Root>
)

export default Added
