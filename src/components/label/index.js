import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'

const Label = styled.label`
  position: relative;
  display: inline-flex;
  flex-direction: ${({ horizonal }) => (horizonal ? 'row' : 'column')};
  align-items: flex-start;
  user-select: none;
`

const LabelText = styled.span`
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: ${color.textDarker};
  user-select: none;
`

const LabelComponent = ({ children, title, ...props }) => (
  <Label {...props} >
    <LabelText>
      {title}
    </LabelText>

    {children}
  </Label>
)

LabelComponent.defaultProps = {
  horizonal: false,
  title: '',
  children: undefined,
}

LabelComponent.propTypes = {
  title: PropTypes.string,
  horizonal: PropTypes.bool,
  children: PropTypes.element,
}

export default LabelComponent
