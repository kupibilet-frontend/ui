import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Icon from '../icons'

const Label = styled.label`
  display: inline-flex;
  &:not(:last-of-type) {
    margin-right: 11px;
  }
}
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 13px;
  min-height: 66px;
  width: 180px;
  border: 1px solid #B1BDCC;
  border-radius: 3px;
  background-color: #FFFFFF;
  cursor: pointer;
`

const Input = styled.input`
  display: none;

  &:checked + div {
    margin: -1px;
    width: 182px;
    min-height: 68px;
    border: 2px solid #38AFFF;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.block_inline ? 'center' : 'flex-start')};
  margin-top: ${(props) => (props.block_inline && 6)}px;

  &>svg {
    &:not(:last-of-type) {
      margin-right: 6px;
    }
  }
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #333333;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #FC6100;
`

const BlockChecked = ({ forName, nameInput, title, price, topIcon, bottomIcon, ...props }) => (
  <Label
    htmlFor={forName}
    {...props}
  >
    <Input
      type="radio"
      id={forName}
      name={nameInput}
    />
    <Column>
      <Flex>
        <Title>{title}</Title>
        <Flex>
          { topIcon && topIcon.map((item, index) => (
            <Icon
              key={item.concat(index)}
              name={item}
              stroke="background"
              fill="miscDark"
            />
            ))
          }
        </Flex>
      </Flex>
      <Flex block_inline>
        <Price>{price}</Price>
        <Flex>
          { bottomIcon && bottomIcon.map((item, index) => (
            <Icon
              key={item.concat(index)}
              name={item}
              stroke="background"
              fill="miscDark"
            />
            ))
          }
        </Flex>
      </Flex>
    </Column>
  </Label>
)

BlockChecked.propTypes = {
  forName: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  bottomIcon: PropTypes.array.isRequired,
  topIcon: PropTypes.array.isRequired,
}

export default BlockChecked
