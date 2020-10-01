import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes, css } from 'styled-components'
import cn from 'classnames'

import { switchTransition } from 'utils/transitions'
import { getThemeColor, ThemingPropTypes } from 'utils/theme'

export const sizes = {
  normal: 18,
  xxsmall: 15,
  xsmall: 24,
  small: 30,
  medium: 36,
  large: 42,
  xlarge: 54,
  xxlarge: 60,
}

const preloader = keyframes`
  0% { transform: rotate(0deg); }

  6.6%  { transform: rotate(50deg);   }
  16.6% { transform: rotate(300deg);  }
  23.4% { transform: rotate(350deg);  }
  33.4% { transform: rotate(600deg);  }
  40%   { transform: rotate(650deg);  }

  50%   { transform: rotate(900deg);  }

  56.6% { transform: rotate(950deg);  }
  66.6% { transform: rotate(1200deg); }
  73.4% { transform: rotate(1250deg); }
  83.4% { transform: rotate(1500deg); }
  90%   { transform: rotate(1550deg); }

  100%  { transform: rotate(1800deg); }
`

const IconSvg = styled.svg`
  ${switchTransition};
  transition-property: fill, transform;
  height: ${({ size }) => sizes[size]}px;
  width: ${({ size }) => sizes[size]}px;
  fill: ${({ theme, fill }) => getThemeColor(theme, fill)};
  opacity: ${({ striked }) => (striked ? 0.6 : 1)};

  ${({ rotate }) => {
    if (rotate) {
      return `
        transform: rotate(180deg);
      `
    }
  }}

  animation: ${({ name }) => (name === 'spinner' ? css`${preloader} 3s infinite ease-in-out;` : '')}
`

export const IconWrapper = styled.span`
  display: inline-flex;
  ${({ paid }) => paid && `
    position: relative;
  `}
  
  ${({ striked, theme }) => {
    if (striked) {
      return `
        position: relative;

        &:after {
          content: '';
          position: absolute;
          border-left: 2px solid ${theme.color.secondaryDarkest};
          width: 2px;
          border-radius: 50px;
          height: 150%;
          transform: rotate(-45deg);
          top: -25%;
          left: 50%;
        }
      `
    }
  }}
  `

function getPaidIconImage(currency) {
  switch (currency) {
    case 'EUR':
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAyMEMxNS41MjI4IDIwIDIwIDE1LjUyMjggMjAgMTBDMjAgNC40NzcxNSAxNS41MjI4IDAgMTAgMEM0LjQ3NzE1IDAgMCA0LjQ3NzE1IDAgMTBDMCAxNS41MjI4IDQuNDc3MTUgMjAgMTAgMjBaIiBmaWxsPSIjRkEzQTAwIi8+CjxwYXRoIGQ9Ik0xMC41NTM3IDE2LjYxNzZDMTIuMDMzNyAxNi42MTc2IDEzLjExMzcgMTUuODU3NiAxMy44MTM3IDE0LjU5NzZMMTIuODkzNyAxMy45Nzc2QzEyLjMxMzcgMTQuODc3NiAxMS42MTM3IDE1LjMxNzYgMTAuNjMzNyAxNS4zMTc2QzguOTczNzEgMTUuMzE3NiA3Ljg5MzcxIDEzLjk3NzYgNy41MzM3MSAxMS43NTc2SDExLjgxMzdWMTAuNzE3Nkg3LjQxMzcxQzcuMzkzNzEgMTAuNDc3NiA3LjM5MzcxIDEwLjIxNzYgNy4zOTM3MSA5Ljk1NzYyQzcuMzkzNzEgOS43NTc2MiA3LjM5MzcxIDkuNTU3NjIgNy40MTM3MSA5LjM1NzYySDEyLjYxMzdWOC4zMTc2Mkg3LjUxMzcxQzcuODUzNzEgNi4wNTc2MiA4Ljk1MzcxIDQuNjk3NjIgMTAuNjkzNyA0LjY5NzYyQzExLjU5MzcgNC42OTc2MiAxMi4yMzM3IDUuMDU3NjIgMTIuNzczNyA1Ljc3NzYyTDEzLjY3MzcgNS4wMzc2MkMxMy4wNzM3IDQuMDU3NjIgMTIuMDEzNyAzLjM3NzYyIDEwLjYzMzcgMy4zNzc2MkM4LjE3MzcxIDMuMzc3NjIgNi4zMzM3MSA1LjIxNzYyIDUuODMzNzEgOC4zMTc2Mkw0LjU1MzcxIDguNDE3NjJWOS4zNTc2Mkg1LjczMzcxQzUuNzEzNzEgOS41Nzc2MiA1LjcxMzcxIDkuNzk3NjIgNS43MTM3MSAxMC4wMTc2QzUuNzEzNzEgMTAuMjU3NiA1LjcxMzcxIDEwLjQ5NzYgNS43MzM3MSAxMC43Mzc2TDQuNTUzNzEgMTAuODE3NlYxMS43NTc2SDUuODMzNzFDNi4zMTM3MSAxNC44MTc2IDguMTEzNzEgMTYuNjE3NiAxMC41NTM3IDE2LjYxNzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'
    case 'RUB':
    default:
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEyQTYgNiAwIDEwNiAwYTYgNiAwIDAwMCAxMnoiIGZpbGw9IiNGQTNBMDAiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjU1IDMuMDE1bDEuMTYuMDAzYzEuMjc3LjAyMiAxLjU0NS44ODIgMS41NDUgMS42IDAgLjcxOS0uMjY4IDEuNTgtMS41MzMgMS42MDFsLTEuMTcyLjAwNFYzLjAxNXpNNi40MjggNy4wNWMxLjU2Ni0uMDI4IDIuMy0xLjEwMyAyLjMtMi40MzIgMC0xLjMyOC0uNzM0LTIuNDAzLTIuMy0yLjQzbC0xLjk0LS4wMDZ2NC4wNDJIMy4yNzJ2LjgzaDEuMjE0di45ODFIMy4yNzN2LjgzaDEuMjE0di45NTNoLjc2OHYtLjk1MmgyLjU3NHYtLjgzSDUuMjU1di0uOTgybDEuMTczLS4wMDR6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo='
  }
}

const PaidIcon = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 12px;
  height: 12px;
  ${({ currency }) => `
    background-image: url(${getPaidIconImage(currency)});
  `}
  background-size: cover;
`

// Scoped inside `colorKeys` because `fill` are valid HTML attrs
const Icon = ({
  prefix,
  name,
  striked,
  className,
  inheritColor,
  rotate,
  paid,
  currency,
  ...props
}) => (
  <IconWrapper striked={striked} paid={paid}>
    <IconSvg
      {...props}
      name={name}
      rotate={rotate ? 'true' : ''}
      striked={striked}
      className={cn(className, { 'icon-inherit-color': inheritColor })}
    >
      <use xlinkHref={`#${prefix}_${name}`} />
    </IconSvg>
    {!striked && paid && <PaidIcon currency={currency} />}
  </IconWrapper>
)

Icon.defaultProps = {
  prefix: 'kb',
  size: 'normal',
  fill: null,
  className: null,
  inheritColor: false,
  striked: false,
  rotate: false,
  paid: false,
  currency: 'RUB',
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  prefix: PropTypes.string,
  fill: ThemingPropTypes.themeColor,
  className: PropTypes.string,
  inheritColor: PropTypes.bool,
  striked: PropTypes.bool,
  paid: PropTypes.bool,
  rotate: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  currency: PropTypes.string,
}


export default withTheme(Icon)
