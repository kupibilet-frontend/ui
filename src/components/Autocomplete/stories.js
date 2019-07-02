import React from 'react'
import { storiesOf } from '@storybook/react'
import 'whatwg-fetch'
import _throttle from 'lodash/throttle'

import Autocomplete from 'components/Autocomplete'
import AirportInput from 'components/AirportInput'
import AirportSuggest from 'components/AirportSuggest'

class AutocompleteStatefulWrapper extends React.PureComponent {
  static propTypes = Autocomplete.propTypes
  static defaultProps = Autocomplete.defaultProps

  state = {
    value: '',
    suggest: null,
    suggestions: [],
  }

  fetchSuggestions = _throttle(async ({ value }) => {
    try {
      const result = await fetch(`https://suggest.kupibilet.ru/suggest.json?term=${value}`)
      const { data } = await result.json()
      const suggestions = data.map((suggest) => {
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
        shouldRenderSuggestions={this.shouldRenderSuggestions}
      />
    )
  }
}

// Dummy props for storybook doc
const STORY_DOC_PROPS = {
  inputProps: {
    value: '',
    onChange: () => {},
  },
  highlightFirstSuggestion: true,
  suggestions: [],
  onSuggestionsFetchRequested: () => {},
  onSuggestionsClearRequested: () => {},
  onSuggestionSelected: () => {},
  renderSuggestion: (suggestion) => (
    <AirportSuggest {...suggestion} />
  ),
  renderInputComponent: (props) => (
    <AirportInput {...props} />
  ),
}

storiesOf('COMPONENTS|Controls/Autocomplete', module)
  .add(
    'Airport',
    () => (
      <div style={{ width: 244 }}>
        <AutocompleteStatefulWrapper {...STORY_DOC_PROPS} />
      </div>
    ),
    {
      notes: `
        Uses <AirportInput /> and <AirportSuggest />.
        Can be used inside <ControlsGroup />
      `,
    },
  )
