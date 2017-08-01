// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from '../icons'
import { switchTransition } from '../../utils/transitions'
import { borderSmall } from '../../utils/borders'

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;

  & + & {
    margin-left: 10px;
  }
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
  ${borderSmall}
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

const StyledIcon = styled(Icon)``

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  & ${StyledIcon} {
    margin-left: 6px;
  }
`

const Title = styled.span`
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  color: ${({ theme }) => theme.color.textDarker};
  text-shadow: 0 1px 0 ${({ active, theme }) => (active ? theme.color.textDarker : 'transparent')};
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.color.secondaryDarker};
`

type Props = {
  active: boolean,
  onClick: () => void,
  title: string,
  price: string,
  icons: string[],
  iconsPosition?: string,
  description?: string,
}

const getIcons = (icons) => (
  icons.map((item) => (
    <StyledIcon
      className="block-icon"
      key={item}
      name={item}
      fill="miscDark"
    />
  ))
)

const Tail = (props: Props) => {
  const {
    active,
    title,
    price,
    iconsPosition,
    icons,
    description,
  } = props

  const onChange = (event: Event) => {
    event.preventDefault()
    props.onClick(active)
  }

  const hasIcons = icons.length > 0

  return (
    <Root>
      <Button
        {...props}
        active={active}
        onClick={onChange}
      >
        <Content>
          <Title active={active}>{title}</Title>
          {hasIcons && iconsPosition === 'top' &&
            <div>
              {getIcons(icons)}
            </div>
          }
        </Content>
        <Content>
          <Price>{price}</Price>
          {(hasIcons && iconsPosition === 'bottom') &&
            <div>
              {getIcons(icons)}
            </div>
          }
        </Content>
      </Button>
      <Description>{description}</Description>
    </Root>
  )
}

Tail.defaultProps = {
  title: '',
  price: '',
  icons: [],
  iconsPosition: 'bottom',
  description: '',
}

export default Tail
