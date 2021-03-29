import React, { PureComponent } from 'react'
import 'whatwg-fetch'
import _throttle from 'lodash/throttle'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'

import Autocomplete, { TSuggestion, ReactAutosuggest } from 'components/Autocomplete'
import Suggestion from 'components/Suggestion'
import { Input } from 'components/Input'

export interface TProps {
  multiSection?: boolean;
  renderSectionTitle?: ReactAutosuggest.RenderSectionTitle;
  renderInputComponent?: ReactAutosuggest.RenderInputComponent;
}

export interface TState {
  value: string;
  suggest: TSuggestion | string | null;
  suggestions: TSuggestion[];
}

export interface TOnChange {
  newValue: string;
  suggestion: TSuggestion;
  method: string;
}

const getMultiSectionSuggestions = (suggestions: TSuggestion) => {
  const suggestsGroupByCountry = Object.entries(
    groupBy(suggestions,
      (suggest) => get(suggest, 'country', 'Нет страны')),
  )

  return suggestsGroupByCountry.map(([country, cities]) => ({
    title: country,
    values: cities,
  }))
}

class AutocompleteStateful extends PureComponent<TProps, TState> {
  state: TState = {
    value: '',
    suggest: null,
    suggestions: [],
  }

  static defaultProps = {
    renderInputComponent: ({ ref, ...props }: any) => <Input ref={ref} {...props} />,
  }

  fetchSuggestions = _throttle(async ({ value }) => {
    try {
      const { multiSection } = this.props
      const result = await fetch(`https://hinter.kupibilet.ru/hinter.json?limit=10&str=${value}`)
      const { data } = await result.json()
      const formattedSuggestions = data.map((suggest: any) => {
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

  onChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue, suggestion, method }: TOnChange,
  ) => {
    const { suggest } = this.state

    if (method !== 'blur' || !suggest) {
      this.setState({
        suggest: newValue && suggestion || null,
        value: newValue || '',
      })
    }
  }

  onSuggestionSelected: ReactAutosuggest.OnSuggestionSelected<TSuggestion> = (
    event,
    { suggestion, suggestionValue },
  ) => {
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

  shouldRenderSuggestions = (value: string) => {
    const { suggest } = this.state

    return !suggest && value.trim().length > 1
  }

  render() {
    const { value, suggestions } = this.state
    const { renderInputComponent, renderSectionTitle, multiSection } = this.props
    return (
      <Autocomplete
        inputProps={{
          value,
          placeholder: 'Туда',
          onChange: this.onChange,
          type: 'text',
          autoFocus: true,
        }}
        highlightFirstSuggestion
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.fetchSuggestions}
        onSuggestionsClearRequested={this.clearSuggestions}
        onSuggestionSelected={this.onSuggestionSelected}
        renderInputComponent={renderInputComponent}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        renderSuggestion={(suggestion: TSuggestion) => {
          return <Suggestion suggestion={suggestion} />
        }}
        renderSectionTitle={renderSectionTitle}
        multiSection={multiSection}
      />
    )
  }
}

export default AutocompleteStateful
