// @flow
// https://github.com/brigand/babel-plugin-flow-react-proptypes/issues/71#issuecomment-295771268

'no babel-plugin-flow-react-proptypes'

import React from 'react'
import PropTypes from 'prop-types'

import Autosuggest from 'react-autosuggest'
import createSectionIterator from 'section-iterator'

import AutocompleteStyled from './styled'

import type { controlsGroupProps } from '../controls-group'

type Section = {}
type Suggestion = {}
type onChange = (Event, { newValue: string, method: string }) => void

type Props = controlsGroupProps & {
  forceSuggesedValue: boolean,
  suggestions: Suggestion[] | Section[],

  onSuggestionsFetchRequested: ({ value: string }) => any,
  onSuggestionsClearRequested: () => void,
  onSuggestionSelected: (Event, {
    suggestion: Object,
    suggestionValue: string,
    suggestionIndex: number,
    sectionIndex: ?number,
    method: 'click' | 'enter' | 'blur' | 'autoSuggest'
  }) => void,
  renderInputComponent: ?({}) => React.Element<*>,
  getSuggestionValue: (Suggestion) => string,
  renderSuggestion: ?(Suggestion, {query: string}) => React.Element<*>,
  inputProps: {
    value: string,
    onChange: onChange,
    // can be proxied from redux-form
    meta?: {
      error: string,
    }
  },
  shouldRenderSuggestions: ?string => boolean,
  alwaysRenderSuggestions: ?boolean,
  multiSection: ?boolean,
  renderSectionTitle: ?(Object) => React.Element<*>,
  getSectionSuggestions: Object => Suggestion[],
  focusInputOnSuggestionClick: ?boolean,
  highlightFirstSuggestion: boolean,
  theme: ?Object,
  id: ?string,
}

type State = {
  suggestions: Suggestion[],
}

const getFirstSuggestion = ({ suggestions, multiSection }: Props) => {
  let [suggestion] = suggestions
  if (multiSection && suggestion) {
    suggestion = suggestion[0]
  }

  return suggestion || null
}

const getSectionIterator = ({ multiSection, suggestions, getSectionSuggestions }: Props) => (
  createSectionIterator({
    multiSection,
    data: multiSection ?
      suggestions.map((section) => getSectionSuggestions(section).length)
    :
      suggestions.length,
  })
)

export default class Autocomplete extends React.PureComponent<{}, Props, State> {
  /* eslint-disable react/sort-comp */
  state = {
    suggestions: this.props.suggestions || [],
  }

  sectionIterator: createSectionIterator = getSectionIterator(this.props)
  autosuggestInstance: Autosuggest = null
  userAreTyping: ?boolean = true
  autofilled: ?boolean = false

  static propTypes = {
    ...Autosuggest.propTypes,
    forceSuggesedValue: PropTypes.bool,
  }

  static defaultProps = {
    ...Autosuggest.defaultProps,
    highlightFirstSuggestion: true,
    getSuggestionValue: (suggestion) => suggestion.value,
    getSectionSuggestions: (section) => section.values,
    forceSuggesedValue: true,
  }

  componentWillReceiveProps(nextProps: Props) {
    const { suggestions, onSuggestionSelected, multiSection } = nextProps

    if (suggestions.length === 1 && onSuggestionSelected && this.userAreTyping) {
      this.autofilled = true
      this.selectFirstSuggest(null, nextProps, 'autoSuggest')
      this.setState({ suggestions: [] })
    } else {
      this.setState({ suggestions })
    }

    if (suggestions !== this.props.suggestions || multiSection !== this.props.multiSection) {
      this.sectionIterator = getSectionIterator(nextProps)
    }
  }

  onChange: onChange = (event, payload) => {
    const { highlightedSectionIndex, highlightedSuggestionIndex } = this.autosuggestInstance.state
    const userAreTyping = payload.newValue.length >= this.props.inputProps.value.length

    if (this.autofilled && userAreTyping) {
      return
    }

    let suggestion = null
    if (['down', 'up'].includes(payload.method)) {
      const iterate = this.sectionIterator[payload.method === 'down' ? 'next' : 'prev']
      const [sectionIndex, suggestIndex] =
        iterate([highlightedSectionIndex, highlightedSuggestionIndex])
      suggestion = this.autosuggestInstance.getSuggestion(sectionIndex, suggestIndex)
    }

    this.props.inputProps.onChange(event, {
      ...payload,
      suggestion,
    })

    this.userAreTyping = userAreTyping
    this.autofilled = false
  }

  onBlur = (event: Event) => {
    if (this.props.forceSuggesedValue) {
      this.selectFirstSuggest(event, this.props, 'blur')
    }
  }

  selectFirstSuggest(event: ?Event, props: Props, method: string) {
    const { getSuggestionValue, alwaysRenderSuggestions, multiSection } = props
    const suggestion = getFirstSuggestion(props)

    const { isFocused, isCollapsed } = this.autosuggestInstance.state

    const willRenderSuggestions = this.autosuggestInstance.willRenderSuggestions(this.props)
    const isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions

    if (isOpen && !alwaysRenderSuggestions) {
      this.autosuggestInstance.closeSuggestions()
    }

    if (suggestion && (this.userAreTyping || method === 'blur')) {
      const newValue = getSuggestionValue(suggestion)

      this.autosuggestInstance.maybeCallOnChange(event, newValue, method)

      this.autosuggestInstance.onSuggestionSelected(event, {
        suggestion,
        suggestionValue: newValue,
        suggestionIndex: 0,
        sectionIndex: multiSection ? 0 : null,
        method,
      })

      this.autosuggestInstance.justSelectedSuggestion = true

      setTimeout(() => {
        if (this.autosuggestInstance) {
          this.autosuggestInstance.justSelectedSuggestion = false
        }
      }, 0)
    } else if (!suggestion) {
      this.autosuggestInstance.maybeCallOnChange(event, '', method)
    }
  }

  render() {
    const { suggestions } = this.state
    // Pass neighboringInGroup prop to input
    const { neighboringInGroup, inputProps, ...props } = this.props
    const spell = suggestions.length && this.props.getSuggestionValue(suggestions[0]) || ''

    return (
      <AutocompleteStyled>
        <Autosuggest
          {...props}
          inputProps={{
            neighboringInGroup,
            ...inputProps,
            onChange: this.onChange,
            onBlur: this.onBlur,
            spell,
          }}
          suggestions={suggestions}
          ref={(ref) => { this.autosuggestInstance = ref }}
        />
      </AutocompleteStyled>
    )
  }
}
