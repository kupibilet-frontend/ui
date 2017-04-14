import React, { PropTypes } from 'react'
import { text } from '@kadira/storybook-addon-knobs'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'

const Label = styled.label`
  position: relative;
  display: flex;
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
const inputDefault = {
  className: 'label',
}

const LabelComponent = ({ horizonal, className }) => (
  <Label
    horizonal={horizonal}
    className={className || inputDefault.className}
  >
    <LabelText>
      { text('text', 'Cake is a lie') }
    </LabelText>
    {
      horizonal && (
        <LabelText>
          { text('text', 'Cake is a lie') }
        </LabelText>
      )
    }
  </Label>
)

LabelComponent.propTypes = {
  horizonal: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
}

export default LabelComponent
