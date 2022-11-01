import styled, { css } from 'styled-components'

import { switchTransition } from 'utils/transitions'
import { floatFromTop } from 'utils/animations'
import { borderRadiusSmall } from 'utils/borderRadius'
import Typography from 'components/Typography'
import {
  getBackgroundColor,
  getHoverBackgroundColor,
  getShadowColor,
  getHoverShadowColor,
  getLabelColor,
} from './helpers'
import { TProps } from './index'

export type TLabelPlacement = 'start' | 'end'

export const CheckboxInput = styled.input`
  display: none;
`

export const fadeInDown = floatFromTop

interface TIconWrapProps {
  checked: boolean,
}

export const IconWrap = styled.span<TIconWrapProps>`
  animation: ${(props) => (props.checked ? css`${fadeInDown} 0.15s` : 'none')};
  display: block;
  padding: 2px;
  height: 20px;
  width: 20px;
`

interface TStyledCheckboxProps {
  checked: boolean,
  disabled: boolean,
  classname: string,
}

export const StyledCheckbox = styled.span<TStyledCheckboxProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  height: 20px;
  width: 20px;
  line-height: 16px;
  box-shadow: ${({ disabled, checked, theme }) => css`inset 0 0 0 1px ${getShadowColor(disabled, checked, theme)}`};

  ${switchTransition};
  transition-property: background, border;
  background: ${({ disabled, checked, theme }) => getBackgroundColor(disabled, checked, theme)};
  ${borderRadiusSmall.all}

  &:hover {
    box-shadow: ${({ disabled, checked, theme }) => css`inset 0 0 0 1px ${getHoverShadowColor(disabled, checked, theme)}`};
    background: ${({ disabled, checked, theme }) => getHoverBackgroundColor(disabled, checked, theme)};
  }
`

interface TLabelTextProps {
  disabled: boolean,
  labelPlacement: TLabelPlacement,
}

export const LabelText = styled(Typography)<TLabelTextProps>`
  ${switchTransition};
  transition-property: color;
  width: 100%;
  
  ${({ disabled, theme }) => (disabled
    && css`color: ${theme.color.text300};`
  )}


`

type TCheckboxLabelProps = {
  checked: boolean,
  disabled: boolean,
  labelPlacement: TLabelPlacement
} & Pick<TProps, 'labelVariant'>

export const CheckboxLabel = styled.label<TCheckboxLabelProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  user-select: none;
  width: 100%;
  gap: ${({ labelVariant }) => (labelVariant === 'large' ? '12px' : '8px')};


  ${({ labelPlacement }) => labelPlacement === 'start' && css`
    flex-direction: row-reverse;
  `}

  color: ${({ theme, disabled, checked }) => getLabelColor(theme, disabled, checked)};

  &:hover {
    color: ${({ theme }) => theme.checkbox.check_box_default_medium_color_text_hover};
  }

  &:hover ${StyledCheckbox} {
    box-shadow: ${({ disabled, checked, theme }) => css`inset 0 0 0 1px ${getHoverShadowColor(disabled, checked, theme)}`};
    background: ${({ disabled, checked, theme }) => getHoverBackgroundColor(disabled, checked, theme)};
  }
`
