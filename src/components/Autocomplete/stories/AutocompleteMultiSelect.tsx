import React, { PureComponent } from 'react'
import 'whatwg-fetch'

import Autocomplete, { TSuggestion } from 'components/Autocomplete'
import Suggestion from 'components/Suggestion'
import { Input } from 'components/Input'

export interface TProps {
  citiesList: string[],
}

interface TState {
  filterValue: string,
  suggestions: string[],
  citiesListFilter: string[],
}

interface TGetNextCitiesFilter {
  value: string;
  citiesListFilter: string[];
}

interface TFetchSuggestions {
  value: string;
  reason: 'input-changed' | 'suggestion-selected';
}

const normalizeSuggestions = (suggestions: TSuggestion[]) => (
  suggestions.map((suggestion) => ({ key: suggestion, value: suggestion }))
)

const getNextCitiesFilter = ({ value, citiesListFilter }: TGetNextCitiesFilter) => (
  citiesListFilter.includes(value)
    ? citiesListFilter.filter((item) => item !== value)
    : [...citiesListFilter, value]
)

class AutocompleteMultiSelect extends PureComponent<TProps, TState> {
  state: TState = {
    filterValue: '',
    suggestions: [],
    citiesListFilter: [],
  }

  fetchSuggestions = ({ value, reason }: TFetchSuggestions) => {
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

  onChange = (event: React.FormEvent<HTMLElement>, { newValue }: Record<'newValue', string>) => {
    this.setState({
      filterValue: newValue || '',
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }


  render() {
    const { filterValue, suggestions, citiesListFilter } = this.state
    return (
      <Autocomplete
        inputProps={{
          value: filterValue,
          placeholder: `${citiesListFilter.length} cities selected`,
          onChange: this.onChange,
          type: 'text',
          autoFocus: true,
        }}
        focusInputOnSuggestionClick={false}
        alwaysRenderSuggestions
        forceSuggestedValue={false}
        suggestions={normalizeSuggestions(suggestions as unknown as TSuggestion[])}
        onSuggestionsFetchRequested={this.fetchSuggestions}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderInputComponent={({ ref, ...props }: any) => <Input ref={ref} {...props} />}
        renderSuggestion={(suggestion: TSuggestion) => {
          if (citiesListFilter.includes(suggestion.value as string)) {
            // Suggestion was not designed to support multi selections,
            // so just pass selectedKey equal to current suggestion key
            return <Suggestion suggestion={suggestion} selectedKey={suggestion.key} />
          }

          return <Suggestion suggestion={suggestion} />
        }}
        shouldRenderSuggestions={() => true}
      />
    )
  }
}

export default AutocompleteMultiSelect
