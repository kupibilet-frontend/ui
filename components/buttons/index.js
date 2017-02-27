import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { button } from '../../utils/reset'

const ButtonText = styled.button`
  ${button}
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 2rem;
  border: none;
  color: white;
  font-size: 18px;
  height: 30px;
  display: flex;
  text-align: center;
  padding: 0 15px;
`

const Button = ({ children }) => (
  <ButtonText>
    { children }
  </ButtonText>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Button
