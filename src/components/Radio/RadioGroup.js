// @flow

import React, { Component } from 'react'
import type { Element } from 'react'
import PropTypes from 'prop-types'

type Props = {
  selectedValue?: string;
  onChange: Function;
  children: Element<*>;
}

class RadioGroup extends Component<Props, void> {
  getChildContext() {
    const { selectedValue, onChange } = this.props

    return {
      selectedValue,
      onChange,
    }
  }

  render() {
    const { selectedValue, onChange, children, ...rest } = this.props

    return (
      <div {...rest}>
        {children}
      </div>
    )
  }
}

RadioGroup.childContextTypes = {
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
}

export default RadioGroup
