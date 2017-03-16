import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'

import Checkbox from './index'

/* eslint-disable react/prop-types */

class CheckboxParent extends React.PureComponent {
  state = {
    checked: this.props.checked || false,
  }
  handleChange = (e) => {
    const { props } = this
    if (props.disabled) {
      return
    }
    this.setState({
      checked: e.target.checked,
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

storiesOf('Checkbox', module).addWithInfo(
  'Checkbox',
  `
    description
  `,
  () => (
    <CheckboxParent />
  ),
).addWithInfo(
  'Checked Checkbox',
  `
    description
  `,
  () => (
    <CheckboxParent checked />
  ),
).addWithInfo(
  'Disabled Checkbox',
  `
    description
  `,
  () => (
    <CheckboxParent disabled />
  ),
)

export default CheckboxParent
