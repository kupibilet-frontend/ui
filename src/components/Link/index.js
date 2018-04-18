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

  padding-top: 0.1em;
  ${({ left }) => (left ? 'padding-right: 3px;' : 'padding-left: 3px;')};
`

const cloneIconWithSize = iconNode =>
  React.cloneElement(iconNode, {
    size: iconNode.props.size || 'normal',
  })

type Props = {
  children: Element<*>,
  leftIcon?: Element<*>,
  rightIcon?: Element<*>,
  href?: string,
}

const Link = ({ children, href, leftIcon, rightIcon, ...props }: Props) => {
  const TagName = href ? 'a' : 'span'

  return (
    <TagName href={href} {...props}>
      {leftIcon && (
        <PaddingWrap left>{cloneIconWithSize(leftIcon)}</PaddingWrap>
      )}

      {children}

      {rightIcon && <PaddingWrap>{cloneIconWithSize(rightIcon)}</PaddingWrap>}
    </TagName>
  )
}

Link.defaultProps = {
  href: null,
  leftIcon: null,
  rightIcon: null,
}

const StyledLink = styled(Link)`
  ${style} display: inline-flex;
  align-items: center;
`

export default StyledLink
