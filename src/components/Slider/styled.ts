import styled from 'styled-components'
import { HandleProps, Handle } from 'rc-slider'
import { TColor } from 'components/ThemeProvider/types'
import { switchTransition } from 'utils/transitions'


interface TStyledRangeWrapperProps {
  disabled: boolean,
}

const StyledRangeWrapper = styled.div<TStyledRangeWrapperProps>`
  .rc-slider-track {
    background-color: ${({ theme, disabled }) => (
    disabled ? theme.color.colorBgSecondaryDisabled : theme.color.colorBgContrast
  )} !important;
    
    display: flex;
    margin-left: 1px;
    position: absolute;
    height: 6px;
    top: 3px;
    z-index: 4;
  }

  .rc-slider-step {
    background-color: ${({ theme }) => theme.color.colorBgSecondary};
    height: 6px;
    top: 3px;
    border-radius: 3px;
  }

  .rc-slider-disabled {
    background-color: inherit;
  }
`

interface StyledHandlerProps extends HandleProps {
  theme: {
    color: TColor,
  },
  disabled: boolean,
}

function getHandlerColor(props: StyledHandlerProps): string {
  const { theme, disabled } = props

  if (disabled) return theme.color.colorBgSecondaryDisabled

  return theme.color.colorBgContrast
}

const StyledHandleWrapper = styled(Handle)`
  z-index: 4;
  box-shadow: none;
`

const StyledHandle = styled.div<StyledHandlerProps>`
  position: absolute;
  ${switchTransition}
  background-color: ${getHandlerColor};
  transition-property: background-color, box-shadow;
  border-radius: 50%;
  cursor: pointer;
  height: 18px;
  width: 18px;
  top: -5px;
  left: 5px;
  z-index: 4;
  transform: translateX(-50%);
  border: none;

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.color.colorBgContrastHover};
    box-shadow: 0px 2px 4px rgba(98, 112, 139, 0.6);
  }
  &:focus,
  &:active {
    background-color: ${({ theme, disabled }) => !disabled && theme.color.colorBgContrastFocus};
    box-shadow: 0px 2px 4px rgba(98, 112, 139, 0.6);
  }
`

export { StyledRangeWrapper, StyledHandleWrapper, StyledHandle }
