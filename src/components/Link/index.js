// @flow
import React from 'react'
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
  children: Element<*> | string,
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

const StyledSpanLink = styled.span`
  ${style}
  display: inline-flex;
  align-items: center;
`

const StyledALink = StyledSpanLink.withComponent('a')

/**
 * Ссылки могут содержать текст и иконку рядом с текстом
 */

const Link = ({ children, href, leftIcon, rightIcon, ...props }: Props) => {
  const LinkComponent = href ? StyledALink : StyledSpanLink

  return (
    <LinkComponent href={href} {...props}>
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
    </LinkComponent>
  )
}

Link.defaultProps = {
  href: null,
  leftIcon: null,
  rightIcon: null,
}

export default Link
