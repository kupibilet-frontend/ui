import styled from 'styled-components'
import mq from 'utils/media-queries'

export const Wrap = styled.div`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.textLighter};

  ${mq.handheld`
    overflow-x: scroll;
    -moz-appearance: menuimage;
    white-space: nowrap;
    max-width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: mone;
  `}
`

export const Item = styled.span`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.color.primaryDarkest};
  font-size: 18px;
  padding: 10px 0;
  margin-left: 30px;
  text-decoration: none;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  /* for custom support */
  ${({ isActive, theme }) => isActive && `
    background: transparent;
    color: ${theme.color.textDarker};

    &:after {
      position: absolute;
      bottom: -1px;
      width: 100%;
      height: 2px;
      left: 0;
      content: '';
      background-color: ${theme.color.secondaryLight};
    }
  `}

  /* for support NavLink */
  &.active {
    background: transparent;
    color: ${({ theme }) => theme.color.textDarker};

    &:after {
      position: absolute;
      bottom: -1px;
      width: 100%;
      height: 2px;
      left: 0;
      content: '';
      background-color: ${({ theme }) => theme.color.secondaryLight};
    }
  }

`
