/* eslint-disable no-confusing-arrow, no-nested-ternary */

import styled from 'styled-components'
import { rgba } from 'polished'
import { switchTransition } from '../../utils/transitions'


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
  ${switchTransition};
  transition-property: opacity;
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
  display: flex;
  align-items: center;
  position: absolute;

  ${switchTransition};
  transition-property: opacity;

  border-radius: 12px;
  color: ${({ theme }) => theme.color.background};
  opacity: ${({ isShowing }) => +isShowing};
  font-size: 14px;
  line-height: 18px;

  height: 24px;
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;
  visibility: ${({ isShowing }) => isShowing ? 'visible' : 'hidden'};
  white-space: nowrap;

  transform: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? 'translate(-50%, 0%)' : ''};

  top: ${({ position }) => position === 'top' ? '-36px' : ''};
  bottom: ${({ position }) => position === 'bottom' ? '-28px' : ''};
  left: ${({ position }) => position === 'right' ? 'calc(100% + 12px)' : ''};
  right: ${({ position }) => position === 'left' ? 'calc(100% + 6px)' : ''};

  cursor: pointer;
  background: ${({ color, theme }) => theme.color[color] || color || ''};

  ${({ iconPosition }) => iconPosition && `padding-${iconPosition}: ${paddings[iconPosition]}px;`}

  &::before {
    background: ${({ theme }) => rgba(theme.color.textDarkest, 0.9)};
    border-radius: 50%;
    content: '';
    width: 7px;
    height: 7px;
    position: absolute;

    top: ${({ position: pos }) => pos === 'bottom' ? '-9px' : pos === 'left' || pos === 'right' ? '9px' : ''};
    bottom: ${({ position: pos }) => pos === 'top' ? '-9px' : pos === 'bottom' ? 'auto' : ''};
    left: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? '0' : pos === 'right' ? '-9px' : ''};
    right: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? '0' : pos === 'left' ? '-9px' : ''};
    margin-left: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? 'auto' : ''};
    margin-right: ${({ position: pos }) => pos === 'top' || pos === 'bottom' ? 'auto' : ''};

    background: ${({ color, theme }) => theme.color[color] || color || ''};
  }
`
