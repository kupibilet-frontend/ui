// @flow
import * as React from 'react'
import type { Element } from 'react'
import { PaddingWrap, StyledLink } from './styled'

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
    Адрес ссылки. Обязательный параметр
  */
  to: string,
}

/**
 * Стилизованный компонент Link из React Router, может содержать текст и иконку рядом с текстом
 */

const RouterLink = ({ children, to, leftIcon, rightIcon, ...props }: Props) => (
  <StyledLink to={to} {...props}>
    {leftIcon && (
      <PaddingWrap left>
        {cloneIconWithSize(leftIcon)}
      </PaddingWrap>
    )}

    {children}

    {rightIcon && (
      <PaddingWrap>
        {cloneIconWithSize(rightIcon)}
      </PaddingWrap>
    )}
  </StyledLink>
)

RouterLink.defaultProps = {
  leftIcon: null,
  rightIcon: null,
}

export default RouterLink
