// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Autocomplete from 'components/Autocomplete'
import Input from 'components/Input'
import Icon from 'components/Icon'
import Suggestion from 'components/Suggestion'

/*
const StyledAutocomplete = styled.Autocomplete`
  .react-autosuggest__suggestions-list {
    min-width: 180px;
  }
`
*/

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

class Select extends Component {
  static defaultProps = {
    forceSuggestedValue: false,
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
    const {
      inputProps,
      additionalInputProps,
      suggestions,
      getSuggestionValue,
    } = this.props
    return (
      <Autocomplete
        {...this.props}
        suggestions={isOpen ? suggestions : emptySuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          ...inputProps,
          ...additionalInputProps,
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

// Disable eslint error: "Declare only one React component per file"
// eslint-disable-next-line react/no-multi-comp
class RFSelect extends Component {
  onSuggestionSelected = (e, { suggestion }) => {
    const { input } = this.props
    input.onChange(suggestion)
  }
  render() {
    const { input, meta } = this.props
    return (
      <Select
        {...this.props}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={{
          ...input,
          meta,
        }}
      />
    )
  }
}

const Comp = styled(Select)`
  .react-autosuggest__suggestions-list {
    min-width: 180px;
  }
`

export {
  Comp as Select,
}

export default styled(RFSelect)`
  .react-autosuggest__suggestions-list {
    min-width: 180px;
  }
`
