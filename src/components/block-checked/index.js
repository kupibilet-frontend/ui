import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Icon from '../icons'
import { color } from '../theme-provider/theme'
import { switchTransition } from '../../utils/transitions'

const Label = styled.label`
  display: inline-flex;

  & + & {
    margin-left: 11px;
  }
}
`
const WrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 13px;
  min-height: 66px;
  width: 180px;
  border: 1px solid ${color.misc};
  border-radius: 3px;
  background-color: #FFFFFF;
  cursor: pointer;
  ${switchTransition}
  transition-property: border-color, box-shadow;
`

const HiddenInput = styled.input`
  display: none;

  &:checked + .input-check {
    border-color: ${color.primary};
    box-shadow: 0 0 0 1px ${color.primary};
  }
`

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.block_inline ? 'center' : 'flex-start')};
  margin-top: ${(props) => (props.block_inline && 6)}px;

  & .input-check-icon {
    & + .block-icon {
      margin-left: 6px;
    }
  }
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${color.textDarker};
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: ${color.secondaryDarker};
`

const BlockChecked = ({ htmlFor, name, title, price, positionIcon, icons, ...props }) => (
  <Label
    htmlFor={htmlFor}
    {...props}
  >
    <HiddenInput
      type="radio"
      id={htmlFor}
      name={name}
    />
    <WrapBlock className="input-check">
      <Block>
        <Title>{title}</Title>
        { (icons.length > 0 && positionIcon === 'top') && <Block>
          { icons.map((item, index) => (
            <Icon
              className="input-check-icon"
              key={item.concat(index)}
              name={item}
              stroke="background"
              fill="miscDark"
            />
            ))
          }
        </Block>
        }
      </Block>
      <Block block_inline>
        <Price>{price}</Price>
        { (icons.length > 0 && positionIcon === 'bottom') && <Block>
          { icons.map((item, index) => (
            <Icon
              className="block-icon"
              key={item.concat(index)}
              name={item}
              stroke="background"
              fill="miscDark"
            />
            ))
          }
        </Block>
        }
      </Block>
    </WrapBlock>
  </Label>
)

BlockChecked.defaultProps = {
  title: '',
  price: '',
  icons: [],
  positionIcon: 'bottom',
}

BlockChecked.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  price: PropTypes.string,
  icons: PropTypes.array,
  positionIcon: PropTypes.string,
}

export default BlockChecked
