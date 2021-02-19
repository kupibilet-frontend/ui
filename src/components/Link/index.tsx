import React from 'react'
import styled from 'styled-components'
import style from 'utils/link'

import { PaddingWrap } from './styled'

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
    <PaddingWrap isLeft={isLeft}>
      {cloneIconWithSize(icon)}
    </PaddingWrap>
  )
}

/**
 * Ссылки могут содержать текст и иконку рядом с текстом. Если вам нужно использовать Link
 * из React Router, возьмите компонент RouterLink
 */
const Link = React.memo((props: TProps) => {
  const {
    children,
    href = '',
    leftIcon = null,
    rightIcon = null,
    ...rest
  } = props

  const LinkComponent = href ? 'a' : 'span'

  return (
    <LinkComponent href={href} {...rest}>
      {renderIcon(leftIcon, true)}
      {children}
      {renderIcon(rightIcon)}
    </LinkComponent>
  )
})

const StyledLink = styled(Link)`
  ${style}
  display: inline-flex;
  align-items: center;
`

export { renderIcon }

export default StyledLink