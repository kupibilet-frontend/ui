import React from 'react'
import { Wrapper, IconBox, MessageBox } from './styled'


export type TVariant = 'warning' | 'success' | 'danger' | 'normal' | 'info' | 'primary'

export interface IProps {
  message: React.ReactElement;
  icon?: React.ReactElement;
  variant: TVariant;
}

export const Tag = ({
  message,
  icon,
  variant,
}: IProps): JSX.Element => (
  <Wrapper variant={variant}>
    {icon && (
      <IconBox>
        {icon}
      </IconBox>
    )}
    <MessageBox variant={variant}>
      {message}
    </MessageBox>
  </Wrapper>
)
