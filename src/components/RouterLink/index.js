// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import type { Element } from 'react'
import styled from 'styled-components'

import style from 'utils/link'

const PaddingWrap = styled.span`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  padding-top: .1em;
  ${({ left }) => (
    left ? 'padding-right: 3px;' : 'padding-left: 3px;'
  )}
`

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

const StyledLink = styled(Link)`
  ${style}
  display: inline-flex;
  align-items: center;
`

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
