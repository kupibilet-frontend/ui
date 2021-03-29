import styled, { css, DefaultTheme } from 'styled-components'
import { opacify } from 'polished'
import { switchTransition } from 'utils/transitions'

interface TIconPaddingWrapProps {
  isLeft?: boolean,
}

const IconPaddingWrap = styled.span<TIconPaddingWrapProps>`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  padding-top: .1em;
  ${({ isLeft }) => (
    isLeft ? 'padding-right: 3px;' : 'padding-left: 3px;'
  )}
`

interface TLinkProps {
  theme: DefaultTheme,
}

export function getLinkColor(props: TLinkProps): string {
  return props.theme.color.primaryDarkest
}

export function getLinkHoverColor(props: TLinkProps): string {
  return opacify(-0.2, getLinkColor(props))
}

const linkStyles = css`
    ${switchTransition}
    display: inline-flex;
    align-items: center;
    color: ${getLinkColor};
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    transition-property: color;

    .icon-inherit-color {
      fill: ${getLinkColor};
    }

    &:hover {
      color: ${getLinkHoverColor};

      .icon-inherit-color {
        fill: ${getLinkHoverColor};
      }
    }
`

const LinkAComponent = styled.a`${linkStyles}`
const LinkSpanComponent = styled.span`${linkStyles}`

export {
  IconPaddingWrap,
  linkStyles,
  LinkAComponent,
  LinkSpanComponent,
}
