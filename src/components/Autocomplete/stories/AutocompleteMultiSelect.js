import React, { PureComponent } from 'react'
import 'whatwg-fetch'

import Autocomplete from 'components/Autocomplete'
import Suggestion from 'components/Suggestion'
import { Input } from 'components/Input'

const normalizeSuggestions = (suggestions) => (
  suggestions.map((suggestion) => ({ key: suggestion, value: suggestion }))
)

const getNextCitiesFilter = ({ value, citiesListFilter }) => (
  citiesListFilter.includes(value)
    ? citiesListFilter.filter((item) => item !== value)
    : [...citiesListFilter, value]
)

class AutocompleteMultiSelect extends PureComponent {
  static propTypes = Autocomplete.propTypes
  static defaultProps = Autocomplete.defaultProps

  state = {
    filterValue: '',
    suggestions: [],
    citiesListFilter: [],
  }

  fetchSuggestions = ({ value, reason }) => {
    const { citiesListFilter } = this.state
    const { citiesList } = this.props

    const normalizedValue = value.trim().toLowerCase()
    const isSuggestSelection = reason === 'suggestion-selected'

    const nextFilteredCities = isSuggestSelection
      ? getNextCitiesFilter({ citiesListFilter, value })
      : citiesListFilter

    const filteredAgentCodes = citiesList
      .filter((city) => {
        if (nextFilteredCities.includes(city)) return false
        if (isSuggestSelection) return true

        return city.toLowerCase().startsWith(normalizedValue)
      })


    const selectedCities = nextFilteredCities
      .filter((city) => {
        if (isSuggestSelection) return true
        return city.toLowerCase().startsWith(normalizedValue)
      })

    this.setState({
      filterValue: isSuggestSelection ? '' : value,
      citiesListFilter: nextFilteredCities,
      suggestions: [...selectedCities, ...filteredAgentCodes],
    })
  }

  onChange = (event, { newValue }) => {
    this.setState({
      filterValue: newValue || '',
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }


  render() {
    const { filterValue, suggestions, citiesListFilter } = this.state
    const { inputProps, ...restProps } = this.props
    return (
      <Autocomplete
        inputProps={{
          value: filterValue,
          placeholder: `${citiesListFilter.length} cities selected`,
          onChange: this.onChange,
          type: 'text',
          autoFocus: true,
          ...inputProps,
        }}
        alwaysRenderSuggestions
        forceSuggestedValue={false}
        suggestions={normalizeSuggestions(suggestions)}
        onSuggestionsFetchRequested={this.fetchSuggestions}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderInputComponent={({ ref, ...props }) => <Input innerRef={ref} {...props} />}
        renderSuggestion={(suggestion) => {
          if (citiesListFilter.includes(suggestion.value)) {
            // Suggestion was not designed to support multi selections,
            // so just pass selectedKey equal to current suggestion key
            return <Suggestion suggestion={suggestion} selectedKey={suggestion.key} />
          }

          return <Suggestion suggestion={suggestion} />
        }}
        shouldRenderSuggestions={() => true}
        {...restProps}
      />
    )
  }
}

export default AutocompleteMultiSelect
