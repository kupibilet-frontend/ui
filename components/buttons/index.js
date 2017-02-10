import React, { PropTypes } from 'react'

import styled from 'styled-components'

const ButtonText = styled.button`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background: ${(props) => props.theme.primary};
  border-radius: 2rem;
  border: none;
  color: white;
  font-size: 18px;
  height: 30px;
  display: flex;
  text-align: center;
  padding: 0 15px;
`

function Button(props) {
  return (
    <ButtonText>{props.children}</ButtonText>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}


export default Button
