import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, object } from '@kadira/storybook-addon-knobs'
import 'whatwg-fetch'

import Autocomplete from './index'
import AirportInput from '../airport-input'
import AirportSuggest from '../airport-suggest'

import updateKnob from '../../utils/updateKnob'

const fetchSuggestions = ({ value }) => {
  fetch(`https://suggest.kupibilet.ru/suggest.json?term=${value}`)
    .then((data) => data.json())
    .then(({ data }) => data.map((suggest) => ({
      title: suggest.name.ru,
      IATACode: suggest.code,
      city: (suggest.city_name || suggest.name).ru,
      country: suggest.country_name && suggest.country_name.ru,
      isCity: suggest.city_name || suggest.city_code,
    })))
    .then((suggestions) => {
      updateKnob('suggestions', 'object', suggestions)
      updateKnob('spell', 'text', suggestions[0] ? suggestions[0].title : '')
    })
}

const clearSuggestions = () => {
  updateKnob('suggestions', 'object', [])
  updateKnob('spell', 'text', '')
}

const onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
  updateKnob('suggest', 'object', suggestion)
  updateKnob('value', 'text', suggestionValue)
}

const onChange = (event, { newValue, suggestion }) => {
  updateKnob('value', 'text', newValue)
  updateKnob('suggest', 'object', suggestion || {})

  if (!newValue) {
    updateKnob('suggest', 'object', {})
  }
}

storiesOf('Autocomplete', module)
  .addWithInfo('Small Icon with stroke', () => {
    const suggest = object('suggest', {})

    return (
      <Autocomplete
        inputProps={{
          value: text('value', ''),
          spell: text('spell', ''),
          placeholder: 'Туда',
          onChange,
          type: 'text',
          city: suggest.city,
          country: suggest.country,
          IATACode: suggest.IATACode,
        }}
        highlightFirstSuggestion
        suggestions={object('suggestions', [])}
        onSuggestionsFetchRequested={fetchSuggestions}
        onSuggestionsClearRequested={clearSuggestions}
        onSuggestionSelected={onSuggestionSelected}
        renderSuggestion={(suggestion) => (
          <AirportSuggest
            {...suggestion}
            value={suggestion.title}
            location={suggestion.isCity ? suggestion.country : suggestion.city}
          />
        )}
        renderInputComponent={(props) => (
          <AirportInput {...props} />
        )}
      />
    )
  })
