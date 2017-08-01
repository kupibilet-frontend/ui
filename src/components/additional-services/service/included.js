// @flow
import React from 'react'
import styled from 'styled-components'

import Base from './base'

const Root = styled.div`
  font-weight: 600;
  color: #23c256;
`

const Included = (props) => (
  <Root>
    <Base
      {...props}
      text="Включено"
      symbol="✓"
    />
  </Root>
)

export default Included
