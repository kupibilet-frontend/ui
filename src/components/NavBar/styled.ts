import styled, { css } from 'styled-components'
import { queries } from 'utils/media-queries'


const fadeStyles = css`
  content: '';
  position: absolute;
  height: calc(100% - 2px);
  width: 18px;
  top: 0;
`
const rightGradient = 'linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%)'
const leftGradient = 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%)'

export const Wrap = styled.div`
  max-width: 100vw;
  margin: 0 -18px;
  overflow: hidden;
  position: relative;
  &:after {
    ${fadeStyles};
    right: 0;
    background: ${rightGradient};
  }
  &:before{
    content: '';
    height: 1px;
    bottom: 0;
    left: 18px;
    position: absolute;
    display: block;
    width: calc(100% - 36px);
    background: ${({ theme }) => theme.color.text200};
  }
`

export const Inner = styled.div`
  margin-bottom: -30px;
  overflow-x: auto;
  padding: 0 18px 30px;
  white-space: nowrap;
  &:after {
    ${fadeStyles};
    left: 0;
    background: ${leftGradient};
  }
`

interface TNavItemProps {
  isActive: boolean,
}

export const NavItem = styled.span<TNavItemProps>`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.color.colorTextSecondary};
  font-size: 18px;
  padding: 11px 15px;
  line-height: 26px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.text200};

  @media ${queries.isMobile} {
    padding: 11px 9px;
  }

  &:first-child {
    padding-left: 0;
    &:after{
      width: calc(100% - 15px);
      left: 0;
    }
  }
  &:last-child {
    padding-right: 0;
    &:after{
      width: calc(100% - 15px);
    }
  }

  /* for custom support */
  ${({ isActive, theme }) => isActive && css`
    background: transparent;
    color: ${theme.color.colorTextPrimary};

    &:after {
      position: absolute;
      bottom: -1px;
      width: calc(100% - 30px);
      height: 2px;
      left: 15px;
      content: '';
      background-color: ${theme.color.secondary300};
    }
  `}

  /* for support NavLink */
  &.active {
    background: transparent;
    color: ${({ theme }) => theme.color.text600};

    &:after {
      position: absolute;
      bottom: -1px;
      width: 100%;
      height: 2px;
      left: 0;
      content: '';
      background-color: ${({ theme }) => theme.color.secondary300};
    }
  }
`
