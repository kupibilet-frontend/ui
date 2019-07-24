import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const StyledTooltip = styled.span`
  transform: translate(-0%);
  animation: 0.3s ease-in-out ${fadeIn};
  position: absolute;
  display: none;
  bottom: 28px;
  white-space: nowrap;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.color.textDark};
  font-size: 16px;
  color: ${({ theme }) => theme.color.background};
  border-radius: 6px;
`

export const StyledIconButton = styled.button`
  position: relative;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  outline: none;
  cursor: pointer;
  border: ${({ theme, color }) => `1px solid ${theme.color[color]}`};
  border-radius: 50px;
  transition: .3s;

  &:hover {
    box-shadow: 0px 2px 16px rgba(98, 112, 139, 0.5);

    ${StyledTooltip} {
      display: ${({ withTooltip }) => (withTooltip ? 'inline' : 'none')};
    }
  }

  &:active {
    box-shadow: ${({ theme, color }) => `0px 2px 16px rgba(98, 112, 139, 0.5), inset 0px 0px 0px 1px ${theme.color[color]}`};
  }
`
