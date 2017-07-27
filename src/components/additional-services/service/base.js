// @flow
import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  font-size: 16px;
`

type Props = {
  text: string,
  symbol: any,
  symbolIsOnTheLeft: boolean,
}

const Free = ({
  text,
  symbol,
  symbolIsOnTheLeft,
}: Props) => (
  <Root>
    {symbolIsOnTheLeft && symbol}
    &nbsp;
    {text}
    &nbsp;
    {!symbolIsOnTheLeft && symbol}
  </Root>
)

export default Free
