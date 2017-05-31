import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'

const Label = styled.label`
  position: relative;
  display: inline-flex;
  flex-direction: ${(props) => (props.horizonal ? 'row' : 'column')};
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

const LabelComponent = ({ children, horizonal, className, title, ...props }) => (
  <Label
    {...props}
    horizonal={horizonal}
    className={className}
  >
    <LabelText>
      {title}
    </LabelText>

    {children}
  </Label>
)

LabelComponent.defaultProps = {
  horizonal: false,
  title: '',
  className: 'label',
  children: undefined,
}

LabelComponent.propTypes = {
  title: PropTypes.string,
  horizonal: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element,
}

export default LabelComponent
