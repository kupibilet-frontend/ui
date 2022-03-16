import React from 'react'
import { Wrapper, MessageBox } from './styled'


export type TVariant = 'warning' | 'success' | 'danger' | 'normal'

export interface IProps {
  message: string;
  icon?: React.ReactElement;
  variant: TVariant;
}

export const Tag = ({
  message,
  icon,
  variant,
}: IProps): JSX.Element => {
  return (
    <Wrapper variant={variant}>
      {icon}
      <MessageBox withLeftIcon={Boolean(icon)} variant={variant}>
        {message}
      </MessageBox>
    </Wrapper>
  )
}
