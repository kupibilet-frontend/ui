// @flow
import * as React from 'react'
import type { Element } from 'react'
import { renderIcon } from 'components/Link'
import { StyledLink } from './styled'

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
 * Стилизованный компонент Link из React Router, может содержать текст и иконки рядом с текстом
 */

const RouterLink = ({ children, to, leftIcon, rightIcon, ...props }: Props) => (
  <StyledLink to={to} {...props}>
    {renderIcon(leftIcon, true)}
    {children}
    {renderIcon(rightIcon)}
  </StyledLink>
)

RouterLink.defaultProps = {
  leftIcon: null,
  rightIcon: null,
}

export default RouterLink
