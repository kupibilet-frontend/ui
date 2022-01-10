import React from 'react'
import styled from 'styled-components'
import { IconPaddingWrap, linkStyles } from './styled'

const cloneIconWithSize = (iconNode: React.ReactElement): JSX.Element => (
  React.cloneElement(iconNode, {
    size: iconNode.props.size || 'normal',
  })
)

export interface TProps {
  /**
    Чаще всего текст ссылки
  */
  children: React.ReactElement | string,
  /**
    Иконка слева от текста
  */
  leftIcon?: React.ReactElement,
  /**
    Иконка справа от текста
  */
  rightIcon?: React.ReactElement,
  /**
    Адрес ссылки. Если не передан, рендерится <span>
  */
  href?: string,

  withUnderline?: boolean,

  onClick?: () => void,
}

function renderIcon(icon: React.ReactElement | null = null, isLeft = false): JSX.Element | null {
  if (!icon) return null

  return (
    <IconPaddingWrap isLeft={isLeft}>
      {cloneIconWithSize(icon)}
    </IconPaddingWrap>
  )
}

const Link = (props: TProps): JSX.Element => {
  const {
    children,
    href = '',
    leftIcon = null,
    rightIcon = null,
    withUnderline = false,
    ...rest
  } = props

  const LinkComponent = href ? 'a' : 'span'

  return (
    // @ts-ignore
    <LinkComponent href={href} withUnderline={withUnderline} {...rest}>
      {renderIcon(leftIcon, true)}
      {children}
      {renderIcon(rightIcon)}
    </LinkComponent>
  )
}

const StyledLink = styled(Link)`${linkStyles}`

export default StyledLink
