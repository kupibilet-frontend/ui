import styled from 'styled-components'

export const StyledIconButton = styled.button`
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  outline: none;
  cursor: pointer;
  border: ${({ theme, color }) => `1px solid ${theme.color[color]}`};
  border-radius: 50px;
`
