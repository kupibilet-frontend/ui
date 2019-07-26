import React, { Component } from 'react'
import PropTypes from 'prop-types'
// The output of "babel-plugin-flow-react-proptypes" is unpredictable
// when flow and prop-types used together

class RadioGroup extends Component {
  static propTypes = {
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
  }

  static childContextTypes = {
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    selectedValue: '',
  }

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

export default RadioGroup
