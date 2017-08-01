// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from '../icons'
import { switchTransition } from '../../utils/transitions'
import { borderSmall } from '../../utils/borders'

const InputDescription = styled.span`
  display: block;
  padding: 6px 0;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: #7f7f7f;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 13px;
  min-height: 66px;
  width: 180px;
  border: 1px solid ${({ theme }) => theme.color.misc};
  ${borderSmall}
  background-color: #FFFFFF;
  cursor: pointer;
  ${switchTransition};
  transition-property: border-color, box-shadow;
`

const Label = styled.label`
  display: inline-flex;
  flex-direction: column;

  & + & {
    margin-left: 10px;
  }

  &:hover .input-check {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
  }
`

const HiddenInput = styled.input`
  display: none;

  &:checked + .input-check {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
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
  color: ${({ theme }) => theme.color.textDarker};
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.color.secondaryDarker};
`

type Props = {
  htmlFor: String,
  name: String,
  title?: String,
  price?: String,
  icons?: Array<string>,
  iconsPosition?: String,
  value?: String,
  description?: String,
}

/* eslint-disable react/prop-types */
const BlockChecked = ({ htmlFor, name, title, price, iconsPosition, icons, ...props }: Props) => (
  <Label
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
        { (icons.length > 0 && iconsPosition === 'top') && <div>
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
        </div>
        }
      </ContentWrapper>
      <ContentWrapper bottomLine>
        <Price>{price}</Price>
        { (icons.length > 0 && iconsPosition === 'bottom') && <div>
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
        </div>
        }
      </ContentWrapper>
    </InputWrapper>
    <InputDescription>{props.description}</InputDescription>
  </Label>
)

BlockChecked.defaultProps = {
  title: '',
  price: '',
  icons: [],
  iconsPosition: 'bottom',
  value: '',
  description: '',
}

export default BlockChecked
