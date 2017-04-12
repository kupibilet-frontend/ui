import React, { PropTypes } from 'react'

import Autosuggest from 'react-autosuggest'
import createSectionIterator from 'section-iterator'

import AutocompleteStyled from './styled'

const getFirstSuggestion = ({ suggestions, multiSection }) => {
  let [suggestion] = suggestions
  if (multiSection && suggestion) {
    suggestion = suggestion[0]
  }

  return suggestion || null
}


export default class Autocomplete extends React.PureComponent {
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

  constructor(props) {
    const { suggestions = [] } = props
    super()
    this.state = { suggestions }

    this.setSectionIterator(props)
  }

  componentWillReceiveProps(nextProps) {
    const { suggestions, onSuggestionSelected, multiSection } = nextProps

    if (suggestions.length === 1 && onSuggestionSelected) {
      this.selectFirstSuggest(nextProps, 'autoSuggest')
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

  onBlur = () => {
    if (this.props.forceSuggesedValue) {
      this.selectFirstSuggest(this.props, 'blur')
    }
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

  selectFirstSuggest(props, method) {
    const { getSuggestionValue, alwaysRenderSuggestions, multiSection } = props
    const suggestion = getFirstSuggestion(props)

    const { isFocused, isCollapsed } = this.autosuggestInstance.state

    const willRenderSuggestions = this.autosuggestInstance.willRenderSuggestions(this.props)
    const isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions

    if (isOpen && !alwaysRenderSuggestions) {
      this.autosuggestInstance.closeSuggestions()
    }

    if (suggestion) {
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
        this.autosuggestInstance.justSelectedSuggestion = false
      }, 0)
    } else {
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
