import React, { PureComponent } from 'react'
import 'whatwg-fetch'

import Autocomplete from 'components/Autocomplete'
import Suggestion from 'components/Suggestion'
import { Input } from 'components/Input'

const normalizeSuggestions = (suggestions) => (
  suggestions.map((agentCode) => ({ key: agentCode, value: agentCode }))
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

  fetchSuggestions = ({ value }) => {
    const { citiesListFilter } = this.state
    const { citiesList } = this.props
    const normalizedValue = value.trim().toLowerCase()

    const filteredCities = citiesList.filter((city) => {
      if (citiesListFilter.includes(city)) return false
      return city.toLowerCase().startsWith(normalizedValue)
    })
    const selectedCities = citiesListFilter
      .filter((city) => city.toLowerCase().startsWith(normalizedValue))

    this.setState({
      filterValue: value,
      suggestions: [...selectedCities, ...filteredCities],
    })
  }

  onChange = (event, { newValue }) => {
    this.setState({
      filterValue: newValue || '',
    })
  }

  onSuggestionSelected = (event, { suggestion: { value } }) => {
    const { citiesListFilter } = this.state
    const nextSuggestionsFilter = getNextCitiesFilter({ citiesListFilter, value })

    this.setState({
      citiesListFilter: nextSuggestionsFilter,
      filterValue: '',
    })
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
        forceSuggestedValue={false}
        focusInputOnSuggestionClick={false}
        onSuggestionSelected={this.onSuggestionSelected}
        suggestions={normalizeSuggestions(suggestions)}
        onSuggestionsFetchRequested={this.fetchSuggestions}
        onSuggestionsClearRequested={() => {}}
        renderInputComponent={(props) => <Input {...props} />}
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
