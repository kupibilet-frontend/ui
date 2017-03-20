import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'

import Checkbox from './index'

/* eslint-disable react/prop-types */

class CheckboxParent extends React.PureComponent {
  state = {
    checked: this.props.defaultChecked || false,
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    const { checked } = this.state
    const props = this.props

    return (
      <Checkbox
        onChange={this.handleChange}
        checked={checked}
        disabled={props.disabled}
      >
        {text('text', 'Авиабилеты')}
      </Checkbox>
    )
  }
}

storiesOf('Checkbox', module)
  .addWithInfo('Checkbox', () => (
    <CheckboxParent />
  ))
  .addWithInfo('Checkbox checked by default', () => (
    <CheckboxParent defaultChecked />
  ))
  .addWithInfo('Disabled Checkbox', () => (
    <CheckboxParent disabled />
  ))
