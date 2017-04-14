import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'
import { switchTransition } from '../../utils/transitions'

const Icon = styled.span`
  position: absolute;
  top: calc(50% - 9px);
  right: 10px;
  width: 18px;
  height: 18px;
  font-size: 14px;
  line-height: 16px;
  color: ${color.miscDark};
  border-radius: 50%;
  border: 1px solid ${color.misc};
  background-color: #FFFFFF;
  text-align: center;
  cursor: pointer;
  ${switchTransition}
  transition-property: color, border-color;

  &:hover {
    color: ${color.primary};
    border-color: ${color.primary};
  }

  &.attention {
    &:hover {
      color: ${color.secondaryDarker};
      border-color: ${color.secondaryDarker};
    }
  }
`

const Sign = ({ name, text }) => (
  <Icon
    className={`sign ${name}`}
    name={name}
    text={text}
  >
    {text}
  </Icon>
)

Sign.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Sign
