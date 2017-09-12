// @flow
import * as React from 'react'
import styled from 'styled-components'
import Autocomplete from 'components/Autocomplete'
import Input from 'components/Input'
import Icon from 'components/Icon'
import Suggestion from 'components/Suggestion'
import { SuggestionsContainer } from 'components/Autocomplete/styled'


const StyledContainer = styled(SuggestionsContainer)`
  min-width: 180px;
`

const SectionHeader = styled.div`
  height: 30px;
  line-height: 30px;
  padding-left: 9px;
  color: ${({ theme }) => theme.color.miscDark};
`

type SectionObject = {
  title? : string,
}
type SuggestionObject = {
  key? : any,
  value? : any,
}
type OnChange = (Event, { newValue: string, method: string }) => void
type OnBlur = () => void
type Meta = {
  error?: string,
  touched?: boolean,
}
type InputProps = {
  value: SuggestionObject | Object | string,
  onChange?: OnChange,
  onBlur?: OnBlur,
  meta?: Meta,
}

/* eslint-disable react/prop-types */
const defaultInput = ({ isOpen, ...props }) => (
  <Input
    {...props}
    rightIcon={
      <Icon name="angle" rotate={isOpen} fill="miscDark" />
    }
  />
)

const defaultContainer = ({ containerProps, children }) => (
  <StyledContainer {... containerProps}>
    {children}
  </StyledContainer>
)

const defaultSectionTitle = (section : SectionObject) => (
  <SectionHeader>
    {section.title}
  </SectionHeader>
)

const emptySuggestions = []

type Props = {
  suggestions: SuggestionObject[] | SectionObject[],
  forceSuggestedValue: boolean,
  focusInputOnSuggestionClick: boolean,
  renderInputComponent: (Object) => React.Element<*>,
  renderSuggestionsContainer: (Object) => React.Element<*>,
  renderSectionTitle: (Object) => React.Element<*>,
  shouldRenderSuggestions: () => boolean,
  getSuggestionValue: (Object) => any,
  getSuggestionKey: (Object) => string,
  onSuggestionSelected? : (Event, {
    suggestion: Object,
    suggestionValue: string,
    suggestionIndex: number,
    sectionIndex: ?number,
    method: 'click' | 'enter' | 'blur' | 'autoSuggest'
  }) => void,
  inputProps: InputProps,
}

type State = {
  isOpen: boolean,
}

export class Select extends React.Component <Props, State> {
  static defaultProps = {
    forceSuggestedValue: false,
    focusInputOnSuggestionClick: false,
    renderInputComponent: defaultInput,
    renderSuggestionsContainer: defaultContainer,
    renderSectionTitle: defaultSectionTitle,
    shouldRenderSuggestions: () => true,
    getSuggestionValue: (suggestion : SuggestionObject) => suggestion.value,
    getSuggestionKey: (suggestion : SuggestionObject) => suggestion.key,
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
      suggestions,
      getSuggestionValue,
      renderInputComponent,
      renderSuggestionsContainer,
    } = this.props
    return (
      <Autocomplete
        {...this.props}
        suggestions={isOpen ? suggestions : emptySuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        renderInputComponent={renderInputComponent}
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

type RFProps = {
  input: InputProps,
  meta: Meta,
}
// Disable eslint error: "Declare only one React component per file"
// eslint-disable-next-line react/no-multi-comp
class RFSelect extends React.Component <RFProps, void> {
  onSuggestionSelected = (e, { suggestion } : SuggestionObject) => {
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

export default RFSelect
