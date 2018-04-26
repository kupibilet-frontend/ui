// @flow
import React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'
import { switchTransition } from 'utils/transitions'
import { borderRadiusSmall } from 'utils/borderRadius'

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px 12px 3px;
  min-height: 66px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ active, theme }) => (active ? theme.color.primary : theme.color.misc)};
  box-shadow: 0 0 0 1px ${({ active, theme }) => (active ? theme.color.primary : 'transparent')};
  ${borderRadiusSmall.all}
  background-color: #FFFFFF;
  cursor: pointer;
  ${switchTransition};
  transition-property: border-color, box-shadow;
  width: 180px;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }
`

const Description = styled.span`
  display: block;
  padding: 6px 0;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textLightest};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`

const Icons = styled.span`
  display: flex;
  align-items: start;
`

const Title = styled.span`
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  color: ${({ theme }) => theme.color.textDarker};
  font-weight: ${({ active }) => (active ? 600 : 400)};
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.color.secondaryDarker};
`

type Props = {
  active: boolean,
  onChange?: (Event) => void,
  title: string,
  price: string | Element<*>,
  icons: Array<Element<*>>,
  iconsPosition?: string,
  description?: string,
}

const PriceVariantsButton = (props: Props) => {
  const {
    active,
    title,
    price,
    iconsPosition,
    icons,
    description,
    onChange,
  } = props

  const onClick = (event: Event) => {
    if (onChange) {
      onChange(event)
    }
  }

  const hasIcons = icons.length > 0

  return (
    <Root>
      <Button
        {...props}
        active={active}
        onClick={onClick}
      >
        <Content>
          <Title active={active}>{title}</Title>
          {hasIcons && iconsPosition === 'top' &&
            <Icons>
              {icons}
            </Icons>
          }
        </Content>
        <Content>
          <Price>{price}</Price>
          {hasIcons && iconsPosition === 'bottom' &&
            <Icons>
              {icons}
            </Icons>
          }
        </Content>
      </Button>
      {description && <Description>{description}</Description>}
    </Root>
  )
}

PriceVariantsButton.defaultProps = {
  title: '',
  price: '',
  icons: [],
  iconsPosition: 'bottom',
  description: '',
  onChange: () => undefined,
}

export default PriceVariantsButton
