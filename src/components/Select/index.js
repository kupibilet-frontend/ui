import React from 'react'
import styled from 'styled-components'
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

class Select extends React.Component {
  static defaultProps = {
    forceSuggesedValue: false,
    focusInputOnSuggestionClick: false,
    renderInputComponent: InputComponent,
    shouldRenderSuggestions: () => true,
    getSuggestionValue: (suggestion) => suggestion.value,
    getSuggestionKey: (suggestion) => suggestion.key,
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

  handleBlur = () => {
    const { onBlur } = this.props.inputProps
    if (onBlur) {
      onBlur()
    }
  }

  renderSuggestion = (suggestion: {}, { isHighlighted }) => {
    const { inputProps, getSuggestionKey, getSuggestionValue } = this.props
    return (
      <Suggestion
        suggestion={suggestion}
        isHighlighted={isHighlighted}
        getSuggestionKey={getSuggestionKey}
        getSuggestionValue={getSuggestionValue}
        selectedKey={getSuggestionKey(inputProps.value)}
      />
    )
  }

  render() {
    const { isOpen } = this.state
    const { inputProps, suggestions, getSuggestionValue } = this.props

    return (
      <Autocomplete
        {...this.props}
        suggestions={isOpen ? suggestions : emptySuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          ...inputProps,
          readOnly: true,
          value: getSuggestionValue(inputProps.value) || '',
          isOpen,
          onChange: () => {},
          onBlur: this.handleBlur,
        }}
      />
    )
  }
}

export default styled(Select)`
  .react-autosuggest__suggestions-list {
    min-width: 180px;
  }
`
