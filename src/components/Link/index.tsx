import React from 'react'
import { IconPaddingWrap, LinkAComponent, LinkSpanComponent } from './styled'

const cloneIconWithSize = (iconNode: React.ReactElement): JSX.Element => (
  React.cloneElement(iconNode, {
    size: iconNode.props.size || 'normal',
  })
)

interface TProps {
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
    ...rest
  } = props

  const LinkComponent = href ? LinkAComponent : LinkSpanComponent

  return (
    <LinkComponent href={href} {...rest}>
      {renderIcon(leftIcon, true)}
      {children}
      {renderIcon(rightIcon)}
    </LinkComponent>
  )
}

export { renderIcon }

export default Link
