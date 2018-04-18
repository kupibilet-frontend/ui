// @flow
import React from 'react'
import styled from 'styled-components'

export const LabelWrapper = styled.div`
  user-select: none;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.textDarker};
  user-select: none;
`

type Props = {
  label: string,
  children: React.Element<*>,
  htmlFor: string,
}

const FormItem = ({ children, label, htmlFor, ...props }: Props) => (
  <LabelWrapper {...props}>
    <Label htmlFor={htmlFor}>{label}</Label>

    {children}
  </LabelWrapper>
)

export default FormItem
