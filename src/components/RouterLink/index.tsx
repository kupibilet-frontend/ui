import React from 'react'
import { renderIcon } from 'components/Link'
import { StyledLink } from './styled'

interface TProps {
  /**
    Чаще всего текст ссылки
  */
  children: React.ReactElement | string,
  /**
    Иконка слева от текста
  */
  leftIcon?: React.ReactElement | null,
  /**
    Иконка справа от текста
  */
  rightIcon?: React.ReactElement | null,
  /**
    Адрес ссылки. Обязательный параметр
  */
  to: string,
  onClick?: () => void,
}

/**
 * Стилизованный компонент Link из React Router, может содержать текст и иконки рядом с текстом
 */
const RouterLink = React.memo((props: TProps) => {
  const {
    children,
    to,
    leftIcon = null,
    rightIcon = null,
    ...rest
  } = props

  return (
    <StyledLink to={to} {...rest}>
      {renderIcon(leftIcon, true)}
      {children}
      {renderIcon(rightIcon)}
    </StyledLink>
  )
})

export default RouterLink
