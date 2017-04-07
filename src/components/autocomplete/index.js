import React from 'react'

import Autosuggest from 'react-autosuggest'
import createSectionIterator from 'section-iterator'

import AutocompleteStyled from './styled'

export default class Autocomplete extends React.PureComponent {
  static propTypes = {
    ...Autosuggest.propTypes,
  }

  static defaultProps = {
    ...Autosuggest.defaultProps,
    highlightFirstSuggestion: true,
    getSuggestionValue: (suggestion) => suggestion.title,
    getSectionSuggestions: (section) => section.values,
  }

  constructor(props) {
    const { suggestions = [] } = props
    super()
    this.state = { suggestions }

    this.setSectionIterator(props)
  }

  componentWillReceiveProps(nextProps) {
    const { suggestions, onSuggestionSelected, multiSection } = nextProps

    if (suggestions.length === 1 && onSuggestionSelected) {
      this.selectSingleSuggest(nextProps)
      this.setState({ suggestions: [] })
    } else {
      this.setState({ suggestions })
    }

    if (suggestions !== this.props.suggestions || multiSection !== this.props.multiSection) {
      this.setSectionIterator(nextProps)
    }
  }

  onChange = (event, payload) => {
    const { highlightedSectionIndex, highlightedSuggestionIndex } = this.autosuggestInstance.state

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
  }

  setSectionIterator({ multiSection, suggestions, getSectionSuggestions }) {
    this.sectionIterator = createSectionIterator({
      multiSection,
      data: multiSection ?
        suggestions.map((section) => getSectionSuggestions(section).length)
      :
        suggestions.length,
    })
  }

  selectSingleSuggest(props) {
    const {
      suggestions, getSuggestionValue, alwaysRenderSuggestions, multiSection,
    } = props
    let [suggestion] = suggestions
    if (multiSection && suggestion) {
      suggestion = suggestion[0]
    }

    const { isFocused, isCollapsed } = this.autosuggestInstance.state

    const willRenderSuggestions = this.autosuggestInstance.willRenderSuggestions(this.props)
    const isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions

    if (isOpen && !alwaysRenderSuggestions) {
      this.autosuggestInstance.closeSuggestions()
    }

    if (suggestion) {
      const newValue = getSuggestionValue(suggestion)

      this.autosuggestInstance.maybeCallOnChange(event, newValue, 'autoSuggest')

      this.autosuggestInstance.onSuggestionSelected(event, {
        suggestion,
        suggestionValue: newValue,
        suggestionIndex: 0,
        sectionIndex: multiSection ? 0 : null,
        method: 'autoSuggest',
      })

      this.autosuggestInstance.justSelectedSuggestion = true

      setTimeout(() => {
        this.autosuggestInstance.justSelectedSuggestion = false
      }, 0)
    }
  }

  render() {
    const { suggestions } = this.state
    // Pass neighboringInGroup prop to input
    const { neighboringInGroup, inputProps, ...props } = this.props

    return (
      <AutocompleteStyled>
        <Autosuggest
          {...props}
          inputProps={{ neighboringInGroup, ...inputProps, onChange: this.onChange }}
          suggestions={suggestions}
          ref={(ref) => { this.autosuggestInstance = ref }}
        />
      </AutocompleteStyled>
    )
  }
}
