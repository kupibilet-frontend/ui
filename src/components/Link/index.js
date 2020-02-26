// @flow
import * as React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'
import style from 'utils/link'

import { PaddingWrap } from './styled'

const cloneIconWithSize = (iconNode) => (
  React.cloneElement(iconNode, {
    size: iconNode.props.size || 'normal',
  })
)

type Props = {
  /**
    Чаще всего текст ссылки
  */
  children: React.Node,
  /**
    Иконка слева от текста
  */
  leftIcon?: Element<*>,
  /**
    Иконка справа от текста
  */
  rightIcon?: Element<*>,
  /**
    Адрес ссылки. Если не передан, рендерится <span>
  */
  href?: string,
}

export const renderIcon = (icon: Element<*> | null = null, isLeft: boolean = false) => {
  if (!icon) return null
  return (
    <PaddingWrap isLeft={isLeft}>
      {cloneIconWithSize(icon)}
    </PaddingWrap>
  )
}

/**
 * Ссылки могут содержать текст и иконку рядом с текстом. Если вам нужно использовать Link
 * из React Router, возьмите компонент RouterLink
 */

const Link = ({ children, href, leftIcon, rightIcon, ...props }: Props) => {
  const LinkComponent = href ? 'a' : 'span'

  return (
    <LinkComponent href={href} {...props}>
      {renderIcon(leftIcon, true)}
      {children}
      {renderIcon(rightIcon)}
    </LinkComponent>
  )
}

Link.defaultProps = {
  href: null,
  leftIcon: null,
  rightIcon: null,
}

const StyledLink = styled(Link)`
  ${style}
  display: inline-flex;
  align-items: center;
`

export default StyledLink
