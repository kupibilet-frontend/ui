import styled, { css, DefaultTheme } from 'styled-components'
import { switchTransition } from 'utils/transitions'


interface TStyledRadioProps {
  disabled: boolean,
  checked: boolean,
  theme: DefaultTheme,
}

const getBorderColor = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (checked) {
    return theme.color.primaryDark
  } else if (disabled) {
    return theme.color.textLighter
  }

  return theme.color.misc
}

const getBoxShadow = (props: TStyledRadioProps) => `box-shadow: inset 0 0 0 1px ${getBorderColor(props)}`

const getRadioBackground = ({ theme, checked, disabled }: TStyledRadioProps) => {
  if (checked) {
    return theme.color.primaryDark
  } else if (disabled) {
    return theme.color.textLightest
  }

  return theme.color.background
}

export const RadioInput = styled.input`
  display: none;
`

export const StyledRadio = styled.div<TStyledRadioProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  user-select: none;

  ${getBoxShadow};

  ${switchTransition};
  transition-property: background, border;
  background: ${getRadioBackground};

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.color.background};
    display: inline-flex;
    border-radius: 50%;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  };
`


interface TLabelTextProps {
  disabled: boolean,
}

export const LabelText = styled.span<TLabelTextProps>`
  ${switchTransition};
  transition-property: color;
  margin-left: 6px;
  width: 100%;
  ${({ disabled, theme }) => (disabled
    && css`color: ${theme.color.textLight};`
  )}
`

interface TRadioLabelProps {
  disabled: boolean,
}

export const RadioLabel = styled.label<TRadioLabelProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  position: relative;
  user-select: none;
  width: 100%;

  ${StyledRadio}:hover {
    border-color: ${({ theme, disabled }) => (disabled ? theme.color.textLighter : theme.color.primary)};
  };

  ${LabelText}:hover {
    color: ${({ theme, disabled }) => (disabled ? theme.color.textLight : theme.color.primaryDarkest)};
  };
`
