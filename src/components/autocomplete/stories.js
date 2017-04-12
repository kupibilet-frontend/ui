import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, object } from '@kadira/storybook-addon-knobs'
import 'whatwg-fetch'
import _debounce from 'lodash/debounce'

import Autocomplete from './index'
import AirportInput from '../airport-input'
import AirportSuggest from '../airport-suggest'

import updateKnob from '../../utils/updateKnob'

class AutocompleteStatefulWrapper extends React.PureComponent {
  static propTypes = Autocomplete.propTypes
  static defaultProps = Autocomplete.defaultProps

  state = {
    value: '',
    suggest: null,
    suggestions: [],
  }

  componentWillUpdate() {
    const { value, suggest, suggestions } = this.state

    updateKnob('suggest', 'object', suggest || {})
    updateKnob('suggestions', 'object', suggestions || [])
    updateKnob('value', 'text', value || '')
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    this.setState({
      suggest: suggestion,
      value: suggestionValue,
    })
  }

  onChange = (event, { newValue, suggestion }) => {
    this.setState({
      suggest: newValue && suggestion || null,
      value: newValue || '',
    })
  }

  fetchSuggestions = _debounce(({ value }) => {
    fetch(`https://suggest.kupibilet.ru/suggest.json?term=${value}`)
      .then((data) => data.json())
      .then(({ data }) => data.map((suggest) => {
        const isCity = !suggest.city_code
        const city = (suggest.city_name || suggest.name).ru
        const country = suggest.country_name && suggest.country_name.ru

        return {
          value: suggest.name.ru,
          isCity,
          area: isCity ? country : city,
          IATACode: suggest.code,
          isGeoSuggest: false,
        }
      }))
      .then((suggestions) => {
        this.setState({ suggestions })
      })
  }, 1000)

  clearSuggestions = () => {
    this.setState({
      suggestions: [],
    })
  }

  render() {
    const { value, suggest, suggestions } = this.state

    return (
      <Autocomplete
        inputProps={{
          value,
          placeholder: 'Туда',
          onChange: this.onChange,
          type: 'text',
          autoFocus: true,
          ...suggest,
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
      />
    )
  }
}

storiesOf('Autocomplete', module)
  .addWithInfo(
    'Airport',
    `Uses <AirportInput /> and <AirportSuggest />.
    Can be used inside <ControlsGroup />`,
    () => {
      // Trigger fake knobs
      object('suggest', {})
      object('suggestions', [])
      text('value', '')

      return (
        <AutocompleteStatefulWrapper />
      )
    },
  )
