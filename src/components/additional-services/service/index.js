// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Free from './free'
import Add from './add'
import Added from './added'
import Included from './included'

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 696px;
  height: 32px;
  padding: 0px 12px 0px 12px;
  cursor: ${(props) => !props.selectable && 'pointer'};
  &:hover {
    background-color: #f0f5fa;
  }
`

const Price = styled.span`
  color: #7d89a1;
  size: 18px;
  font-weight: 600;
  margin-left: 2px;
`

type Props = {
  name: string,
  price: number | undefined,
}

class Service extends PureComponent<Props> {

  state = {
    added: false,
  }

  onAddClick = () => {
    this.setState({
      added: true,
    })
  }

  render() {
    const { name, price } = this.props
    const { added } = this.state
    const onClick = !added && price && this.onAddClick
    return (
      <Root selectable={added || !price} onClick={onClick}>
        <div>
          {name} {price && <Price>{price}₽</Price>}
        </div>
        <div>
          {
            added ? <Added /> :
            price ? <Add /> :
            price === 0 ? <Free /> : <Included />
          }
        </div>
      </Root>
    )
  }
}

export default Service
