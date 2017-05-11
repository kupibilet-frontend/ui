import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Icon from '../icons'
import { color } from '../theme-provider/theme'
import { switchTransition } from '../../utils/transitions'

const InputWrapper = styled.div`
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
  ${switchTransition};
  transition-property: border-color, box-shadow;
`

const Label = styled.label`
  display: inline-flex;

  & + & {
    margin-left: 10px;
  }

  &:hover .input-check {
    border-color: ${color.primary};
    box-shadow: 0 0 0 1px ${color.primary};
  }
`

const HiddenInput = styled.input`
  display: none;

  &:checked + .input-check {
    border-color: ${color.primary};
    box-shadow: 0 0 0 1px ${color.primary};
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.bottomLine ? 'center' : 'flex-start')};
  margin-top: ${(props) => (props.bottomLine && 6)}px;

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

const BlockChecked = ({ htmlFor, name, title, price, iconsPosition, icons, ...props }) => (
  <Label
    htmlFor={htmlFor}
    {...props}
  >
    <HiddenInput
      type="radio"
      id={htmlFor}
      name={name}
      value={props.value}
    />
    <InputWrapper className="input-check">
      <ContentWrapper>
        <Title>{title}</Title>
        { (icons.length > 0 && iconsPosition === 'top') && <ContentWrapper>
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
        </ContentWrapper>
        }
      </ContentWrapper>
      <ContentWrapper bottomLine>
        <Price>{price}</Price>
        { (icons.length > 0 && iconsPosition === 'bottom') && <ContentWrapper>
          { icons.map((item) => (
            <Icon
              className="block-icon"
              key={item}
              name={item}
              stroke="background"
              fill="miscDark"
            />
            ))
          }
        </ContentWrapper>
        }
      </ContentWrapper>
    </InputWrapper>
  </Label>
)

BlockChecked.defaultProps = {
  title: '',
  price: '',
  icons: [],
  iconsPosition: 'bottom',
  value: '',
}

BlockChecked.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  price: PropTypes.string,
  icons: PropTypes.array,
  iconsPosition: PropTypes.string,
  value: PropTypes.string,
}

export default BlockChecked
