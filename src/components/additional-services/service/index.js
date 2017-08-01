// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import media, { withMedia } from '../../../utils/media-queries'

import Free from './free'
import Add from './add'
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

  ${media.mobile`
    align-items: start;
    flex-direction: column;
    width: auto;
    height: auto;
    padding-bottom: 16px;
    justify-content: start;
  `}
`

const Price = styled.span`
  color: #7d89a1;
  size: 18px;
  font-weight: 600;
  margin-left: 2px;
`

const LastDiv = styled.div`
  display: flex;
  flex-direction: row;
`

type Props = {
  name: string,
  price: number | undefined,
  isMobile: boolean,
}

type State = {
  added: boolean,
}

class Service extends PureComponent<Props, State> {

  state = {
    added: false,
  }

  onAddClick = () => {
    this.setState({
      added: true,
    })
    this.props.onClick()
  }

  getAdditionalEl = (props) => {
    const { price, isMobile } = this.props
    const { added } = this.state
    const Component = added ? Included : price ? Add : Free
    return (
      <Component
        {...props}
        symbolIsOnTheLeft={isMobile}
      />
    )
  }

  render() {
    const { name, price, isMobile } = this.props
    const { added } = this.state
    const priceEl = <Price>{price}₽</Price>
    return (
      <Root
        selectable={added || !price}
        onClick={!added && price && this.onAddClick}
      >
        <div>
          {name} {!isMobile && !added && !!price && priceEl}
        </div>
        <LastDiv>
          {this.getAdditionalEl()}
          {isMobile && !added && !!price && priceEl}
        </LastDiv>
      </Root>
    )
  }
}

export default withMedia(Service)
