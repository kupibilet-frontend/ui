// @flow

import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'

import Input from 'components/Input'
import Icon from 'components/Icon'
import Suggestion from 'components/Suggestion'

import {
  StyledContainer,
  RelativeWrapper,
  SuggestionsContainer,
} from './styled'


type Section = {}
type SuggestionType = {}
type onChange = (Event, { newValue: string, method: string }) => void | any
type onBlur = (Event) => void | any
type onFocus = (Event) => void | any

type State = {}

type Props = {
  suggestions: SuggestionType[] | Section[],
  onSuggestionsFetchRequested: ({ value: string }) => any,
  onSuggestionsClearRequested: () => void,
  onSuggestionSelected?: (Event, {
    suggestion: Object,
    suggestionValue: string,
    suggestionIndex: number,
    sectionIndex: ?number,
    method: 'click' | 'enter' | 'blur' | 'autoSuggest'
  }) => void,
  renderInputComponent: ?({}) => React.Element<*>,
  getSuggestionValue: (Suggestion) => string,
  renderSuggestion?: (Suggestion, {query: string}) => React.Element<*>,
  inputProps: {
    value: string | number,
    onChange?: onChange,
    onBlur?: onBlur,
    onFocus?: onFocus,
    meta?: {
      error: string,
    }
  },
  shouldRenderSuggestions?: ?string => boolean,
  alwaysRenderSuggestions?: ?boolean,
  multiSection: ?boolean,
  renderSectionTitle?: ?(Object) => React.Element<*>,
  getSectionSuggestions?: Object => Suggestion[],
  highlightFirstSuggestion?: boolean,
  theme: ?Object,
  id: ?string,
  innerRef?: ?Function,
  renderSuggestionsContainer?: ?Function,
  success?: boolean,
  error?: boolean,
  defaultValue: any,
}

class SelectBox extends Component <Props, State> {
  static defaultProps = {
    highlightFirstSuggestion: true,
    getSuggestionValue: (suggestion) => suggestion.value,
    getSectionSuggestions: (section) => section.suggestions,
    onSuggestionsFetchRequested: () => {},
    onSuggestionsClearRequested: () => {},
    defaultValue: '',
  }

  constructor(props : Props) {
    super(props)
    this.state = {
      isOpen: false,
      displayedValue: props.defaultValue || '',
      selectedSuggestion: { value: '' },
    }
  }

  getReturnValue = () => {
    const { onSuggestionSelected } = this.props
    return onSuggestionSelected
      ? this.state.selectedSuggestion
      : this.state.selectedSuggestion.value
  }

  handleSuggestionSelect = (e, { suggestion }) => {
    const { onChange } = this.props.inputProps
    this.setState({
      displayedValue: suggestion.label,
      selectedSuggestion: suggestion,
    }, () => { onChange(suggestion.value) })
  }

  handleCustomSuggestionSelect = (event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    const { onSuggestionSelected } = this.props
    this.setState({
      displayedValue: suggestion.label,
      selectedSuggestion: suggestion,
    }, () => {
      onSuggestionSelected(event,
        { suggestion, suggestionValue, suggestionIndex, sectionIndex, method },
      )
    })
  }

  handleFocus = (e) => {
    const { onFocus } = this.props.inputProps
    this.setState({
      isOpen: true
    }, () => { if (onFocus) { onFocus(e) } })

  }
  handleBlur = () => {
    const { onBlur } = this.props.inputProps
    const returningValue = this.getReturnValue()
    this.setState({
      isOpen: false,
    })
    if (onBlur) {
      onBlur(returningValue)
    }
  }

  handleChange = (e) => {
    e.preventDefault()
  }

  innerRef(node) {
    const { innerRef } = this.props
    this.innerInput = node
    if (innerRef) {
      this.props.innerRef(node)
    }
  }

  renderSuggestion = (suggestion : Object, { query, isHighlighted }) => {
    const { inputProps } = this.props
    return (
      <Suggestion
        suggestion={suggestion}
        isHighlighted={isHighlighted}
        selectedValue={inputProps.value}
      />
    )
  }

  renderIfFocused = () => true

  renderDefaultInput = (inputProps : Object) => {
    return (
      <Input
        {...inputProps}
        rightIcon={
          <Icon name="angle" rotate={this.state.isOpen} fill="miscDark" />
        }
        readOnly
      />
    )
  }

  renderSuggestionsContainer = ({ containerProps , children, query }) => {
    const { renderSuggestionsContainer } = this.props
    return (
      <RelativeWrapper>
        {renderSuggestionsContainer
          ? renderSuggestionsContainer({ containerProps, children, query })
          : <SuggestionsContainer {... containerProps}>
            {children}
          </SuggestionsContainer>
        }
      </RelativeWrapper>
    )
  }

  render() {
    const {
      inputProps,
      shouldRenderSuggestions,
      renderInputComponent,
      onSuggestionSelected,
      success,
      error,
      ...props } = this.props
    return (
      <StyledContainer>
        <Autosuggest
          {...props}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderSuggestion={this.renderSuggestion}
          shouldRenderSuggestions={(shouldRenderSuggestions || this.renderIfFocused)}
          onSuggestionSelected={onSuggestionSelected
            ? this.handleCustomSuggestionSelect
            : this.handleSuggestionSelect
          }
          renderInputComponent={(renderInputComponent || this.renderDefaultInput)}
          focusInputOnSuggestionClick={false}
          inputProps={{
            ...inputProps,
            success,
            error,
            value: this.state.displayedValue,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            innerRef: (node) => this.innerRef(node),
          }}
        />
      </StyledContainer>
    )
  }
}

export default SelectBox
