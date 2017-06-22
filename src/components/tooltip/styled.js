/* eslint-disable no-confusing-arrow, no-nested-ternary */

import styled from 'styled-components'

const TRANSITION_BASE = 'transition: 0.15s ease-out; transition-property: opacity;'

function hexToRgba(hex, opacity) {
  const arr = hex.match(/[0-9a-f]{2}/ig).map((s) => parseInt(s, 16))
  return `rgba(${arr.join(', ')}, ${opacity})`
}

const margins = {
  left: 5,
  right: 7,
}

const paddings = {
  left: 4,
  right: 4,
}


export const ToolTipWrap = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  ${({ hasHandle }) => hasHandle ? 'transform: translateY(-12px)' : ''}
`

export const Icon = styled.span`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.text};
  ${TRANSITION_BASE};
  display: inline-block;
  height: 18px;
  line-height: 16px;
  text-align: center;
  width: 18px;
  vertical-align: top;
  ${({ isHovering }) => isHovering && `border: 1px solid ${({ theme }) => theme.color.textLighter}`};
`

export const SpanWithMargin = styled.span`
  ${({ iconPosition }) => iconPosition && `margin-${iconPosition}: ${margins[iconPosition]}px`}
`

export const Root = styled.span`
  background: ${({ theme }) => hexToRgba(theme.color.textDarkest, 0.97)};
  border-radius: 12px;
  color: ${({ theme }) => theme.color.background};
  font-size: 14px;
  line-height: 18px;
  ${TRANSITION_BASE};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 24px;
  padding-left: 12px;
  padding-right: 12px;
  position: absolute;
  text-align: center;
  visibility: ${({ isShowing }) => isShowing ? 'visible' : 'hidden'};
  opacity: ${({ isShowing }) => +isShowing};
  white-space: nowrap;

  left: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? '50%' : ''};
  transform: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? 'translate(-50%, 0%)' : ''};
  top: ${({ position }) => position === 'top' ? '-36px' : ''};
  bottom: ${({ position }) => position === 'bottom' ? '-28px' : ''};
  left: ${({ position }) => position === 'right' ? 'calc(100% + 12px)' : ''};
  right: ${({ position }) => position === 'left' ? 'calc(100% + 6px)' : ''};

  background: ${({ color, theme }) => theme.color[color] || color || ''};

  ${({ iconPosition }) => iconPosition && `padding-${iconPosition}: ${paddings[iconPosition]}px;`}

  &::before {
    background: ${({ theme }) => hexToRgba(theme.color.textDarkest, 0.9)};
    border-radius: 50%;
    content: '';
    height: 7px;
    position: absolute;
    width: 7px;

    top: ${({ position: pos }) => pos === 'bottom' ? '-9px' : pos === 'left' || pos === 'right' ? '9px' : ''};
    bottom: ${({ position: pos }) => pos === 'top' ? '-9px' : pos === 'bottom' ? 'auto' : ''};
    left: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? '0' : pos === 'right' ? '-9px' : ''};
    right: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? '0' : pos === 'left' ? '-9px' : ''};
    margin-left: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? 'auto' : ''};
    margin-right: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? 'auto' : ''};

    background: ${({ color, theme }) => theme.color[color] || color || ''};
  }
`
