import React, { PureComponent } from 'react'
import 'whatwg-fetch'
import _throttle from 'lodash/throttle'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'

import Autocomplete from 'components/Autocomplete'
import Suggestion from 'components/Suggestion'
import { Input } from 'components/Input'

const getMultiSectionSuggestions = (suggestions) => {
  const suggestsGroupByCountry = Object.entries(
    groupBy(suggestions,
      (suggest) => get(suggest, 'country', 'Нет страны')),
  )

  return suggestsGroupByCountry.map(([country, cities]) => ({
    title: country,
    values: cities,
  }))
}

class AutocompleteStateful extends PureComponent {
  static propTypes = Autocomplete.propTypes
  static defaultProps = Autocomplete.defaultProps

  state = {
    value: '',
    suggest: null,
    suggestions: [],
  }

  fetchSuggestions = _throttle(async ({ value }) => {
    try {
      const { multiSection } = this.props
      const result = await fetch(`https://hinter.kupibilet.ru/hinter.json?limit=10&str=${value}`)
      const { data } = await result.json()
      const formattedSuggestions = data.map((suggest) => {
        return {
          key: suggest.city.code,
          value: suggest.city.name.ru,
          country: suggest.country.ru,
        }
      })
      const suggestions = multiSection
        ? getMultiSectionSuggestions(formattedSuggestions) : formattedSuggestions

      if (value === this.state.value) {
        this.setState({ suggestions })
      }
    } catch (e) {
      console.error(e)
    }
  }, 300)

  onChange = (event, { newValue, suggestion, method }) => {
    const { suggest } = this.state

    if (method !== 'blur' || !suggest) {
      this.setState({
        suggest: newValue && suggestion || null,
        value: newValue || '',
      })
    }
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    this.setState({
      suggest: suggestion,
      value: suggestionValue,
    })
  }

  clearSuggestions = () => {
    this.setState({
      suggestions: [],
    })
  }

  shouldRenderSuggestions = (value) => {
    const { suggest } = this.state

    return !suggest && value.trim().length > 1
  }

  render() {
    const { value, suggest, suggestions } = this.state
    const { inputProps, ...restProps } = this.props

    return (
      <Autocomplete
        inputProps={{
          value,
          placeholder: 'Туда',
          onChange: this.onChange,
          type: 'text',
          autoFocus: true,
          ...suggest,
          ...inputProps,
        }}
        highlightFirstSuggestion
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.fetchSuggestions}
        onSuggestionsClearRequested={this.clearSuggestions}
        onSuggestionSelected={this.onSuggestionSelected}
        renderInputComponent={({ ref, ...props }) => <Input ref={ref} {...props} />}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        renderSuggestion={(suggestion) => {
          return <Suggestion suggestion={suggestion} />
        }}
        {...restProps}
      />
    )
  }
}

export default AutocompleteStateful
