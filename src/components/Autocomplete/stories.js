import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'
import 'whatwg-fetch'
import _throttle from 'lodash/throttle'

import Autocomplete from 'components/Autocomplete'
import AirportInput from 'components/AirportInput'
import AirportSuggest from 'components/AirportSuggest'

import updateKnob from 'storybook/updateKnob'

class AutocompleteStatefulWrapper extends PureComponent {
  static propTypes = Autocomplete.propTypes
  static defaultProps = Autocomplete.defaultProps

  state = {
    value: '',
    suggest: null,
    suggestions: [],
  }

  // eslint-disable-next-line camelcase, react/sort-comp, class-methods-use-this
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    const { value, suggest, suggestions } = nextState

    updateKnob('suggest', 'object', suggest || {})
    updateKnob('suggestions', 'object', suggestions || [])
    updateKnob('value', 'text', value || '')
  }

  // TODO airbnb config for `react/sort-comp` are missing UNSAFE_ lifecycles
  // eslint-disable-next-line react/sort-comp
  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    this.setState({
      suggest: suggestion,
      value: suggestionValue,
    })
  }

  onChange = (event, { newValue, suggestion, method }) => {
    const { suggest } = this.state

    if (method !== 'blur' || !suggest) {
      this.setState({
        suggest: newValue && suggestion || null,
        value: newValue || '',
      })
    }
  }

  fetchSuggestions = _throttle(({ value }) => {
    fetch(`https://suggest.kupibilet.ru/suggest.json?term=${value}`)
      .then((data) => data.json())
      .then(({ data }) => data.map((suggest) => {
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
      }))
      .then((suggestions) => {
        if (value === this.state.value) {
          this.setState({ suggestions })
        }
      })
  }, 300)

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

storiesOf('Controls/Autocomplete', module)
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
        <div style={{ width: 244 }}>
          <AutocompleteStatefulWrapper {...STORY_DOC_PROPS} />
        </div>
      )
    },
  )
