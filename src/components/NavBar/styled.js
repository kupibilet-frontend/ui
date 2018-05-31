import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.textLighter};
  max-width: 100vw;
  overflow: hidden;
`

const Inner = styled.div`
  margin-bottom: -30px;
  padding-bottom: 30px;
  overflow-x: auto;
  white-space: nowrap;
`

export const NavItem = styled.span`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.color.primaryDarkest};
  font-size: 18px;
  padding: 11px 0;
  line-height: 26px;
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

const MobileHorizontalScroll = (props) => (
  <Wrap className={props.className}>
    <Inner>
      {props.children}
    </Inner>
  </Wrap>
)

MobileHorizontalScroll.defaultProps = {
  className: '',
}

MobileHorizontalScroll.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default MobileHorizontalScroll
