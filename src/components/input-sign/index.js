import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'
import { switchTransition } from '../../utils/transitions'
import { RIGHT } from '../../utils/input-sign'

const Icon = styled.span`
  position: absolute;
  top: calc(50% - 9px);
  right: ${({ size }) => RIGHT[size]}px;
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
    color: ${(props) => ((props.name === 'attention') ? color.fail : color.primaryDarkest)};
    border-color: ${(props) => ((props.name === 'attention') ? color.secondaryDarker : color.primary)};
  }
`

const InputSign = ({ name, text, size }) => (
  <Icon
    className={`sign ${name}`}
    name={name}
    text={text}
    size={size}
  >
    {text}
  </Icon>
)

InputSign.defaultProps = {
  size: '',
}

InputSign.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default InputSign
