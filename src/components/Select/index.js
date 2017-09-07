import React from 'react'
import Autocomplete from 'components/Autocomplete'
import Input from 'components/Input'
import Icon from 'components/Icon'
import Suggestion from 'components/Suggestion'

/* eslint-disable react/prop-types */
const InputComponent = ({ isOpen, ...props }) => (
  <Input
    {...props}
    rightIcon={
      <Icon name="angle" rotate={isOpen} fill="miscDark" />
    }
  />
)

const emptySuggestions = []

export default class Select extends React.Component {
  static defaultProps = {
    forceSuggesedValue: false,
    focusInputOnSuggestionClick: false,
    renderInputComponent: InputComponent,
    shouldRenderSuggestions: () => true,
  }

  state = {
    isOpen: false,
  }

  onSuggestionsFetchRequested = () => {
    this.setState({ isOpen: true })
  }

  onSuggestionsClearRequested = () => {
    this.setState({ isOpen: false })
  }

  renderSuggestion = (suggestion: {}, { isHighlighted }) => {
    const { inputProps } = this.props
    return (
      <Suggestion
        suggestion={suggestion}
        isHighlighted={isHighlighted}
        selectedValue={inputProps.value}
      />
    )
  }

  render() {
    const { isOpen } = this.state
    const { inputProps, suggestions } = this.props

    return (
      <Autocomplete
        {...this.props}
        suggestions={isOpen ? suggestions : emptySuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          readOnly: true,
          ...inputProps,
          value: inputProps.value || '',
          isOpen,
          onChange: () => {},
        }}
      />
    )
  }
}
