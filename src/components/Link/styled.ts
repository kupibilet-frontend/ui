import styled, { css, DefaultTheme } from 'styled-components'
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
  withUnderline?: boolean,
}

function getLinkColor(props: TLinkProps): string {
  return props.theme.color.colorTextLinkNormal
}

function getLinkHoverColor(props: TLinkProps): string {
  return props.theme.color.colorTextLinkHover
}

const linkStyles = css`
  ${switchTransition}
  display: inline-flex;
  align-items: center;
  color: ${getLinkColor};
  cursor: pointer;
  text-decoration: ${({ withUnderline }) => (withUnderline ? 'underline' : 'none')};
  text-decoration-skip-ink: none;
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

export {
  IconPaddingWrap,
  getLinkColor,
  getLinkHoverColor,
  linkStyles,
  TLinkProps,
}
