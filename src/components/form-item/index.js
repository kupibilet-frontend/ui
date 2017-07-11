import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'

const LabelWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
`

const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: ${color.textDarker};
  user-select: none;
`

const FormItem = ({ children, title, htmlFor, ...props }) => (
  <LabelWrapper
    {...props}
  >
    <Label htmlFor={htmlFor}>
      {title}
    </Label>

    {children}
  </LabelWrapper>
)

FormItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  htmlFor: PropTypes.string.isRequired,
}

export default FormItem
