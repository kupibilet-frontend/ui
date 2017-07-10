// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  color: #007acc;
  font-size: 16px;
`

type Props = {
  onClick: () => void,
}

const Add = ({
  onClick,
}: Props) => (
  <Root onClick={onClick}>
    Добавить ＋
  </Root>
)

export default Add
