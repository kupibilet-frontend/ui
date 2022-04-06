import React from 'react'
import { Wrapper, IconBox, MessageBox } from './styled'


export type TVariant = 'warning' | 'success' | 'danger' | 'normal' | 'info' | 'primary'

export interface IProps {
  message: React.ReactElement;
  icon?: React.ReactElement;
  variant: TVariant;
  className?: string;
}

export const Tag = ({
  message,
  icon,
  variant,
  className,
}: IProps): JSX.Element => (
  <Wrapper variant={variant} className={className}>
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
