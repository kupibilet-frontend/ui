import React, { PureComponent } from 'react'
import 'whatwg-fetch'
import _throttle from 'lodash/throttle'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'

import Autocomplete from 'components/Autocomplete'
import AirportInput from 'components/AirportInput'
import AirportSuggest from 'components/AirportSuggest'

const getMultiSectionSuggestions = (suggestions) => {
  let multiSectionSuggestion = []
  const suggestsGroupByCountry = Object.entries(
    groupBy(suggestions,
      (suggest) => get(suggest, 'country', 'Нет страны')),
  )

  for (const [country, cities] of suggestsGroupByCountry) {
    multiSectionSuggestion = [
      ...multiSectionSuggestion,
      {
        title: country,
        values: cities,
      },
    ]
  }

  return multiSectionSuggestion
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
      const result = await fetch(`https://suggest.kupibilet.ru/suggest.json?term=${value}`)
      const { data } = await result.json()
      const formatSuggestions = data.map((suggest) => {
        const isCity = !suggest.city_code
        const city = (suggest.city_name || suggest.name).ru
        const country = suggest.country_name && suggest.country_name.ru

        return {
          value: suggest.name.ru,
          isCity,
          city,
          country,
          IATACode: suggest.code,
          isGeoSuggest: false,
        }
      })

      if (value === this.state.value) {
        if (multiSection) {
          const multiSectionSuggestion = getMultiSectionSuggestions(formatSuggestions)

          this.setState({ suggestions: multiSectionSuggestion })
        } else {
          this.setState({ suggestions: formatSuggestions })
        }
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
        renderSuggestion={(suggestion) => (
          <AirportSuggest {...suggestion} />
        )}
        renderInputComponent={(props) => (
          <AirportInput {...props} />
        )}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        {...restProps}
      />
    )
  }
}

export default AutocompleteStateful
