import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Autosuggest, { GetSectionSuggestions, RenderSectionTitle } from 'react-autosuggest'
import createSectionIterator from 'section-iterator'
import _get from 'lodash/get'

import style, { SuggestionsContainer } from './styled'


// Includes cyrylic unicode range
// http://jrgraphix.net/r/Unicode/0400-04FF
const NON_LETTERS_REGEXP = /[^\w\u0400-\u04FF]/g

const isValuesEqual = (a: string, b: string) => {
  const _a = (a ? String(a) : '').toLowerCase().replace(NON_LETTERS_REGEXP, '')
  const _b = (b ? String(b) : '').toLowerCase().replace(NON_LETTERS_REGEXP, '')

  // Not empty and same
  return Boolean(_a && _a === _b)
}

export const AUTOSUGGEST_METHODS = {
  SELECT_RIGHT_ARROW: 'AUTOSUGGEST_SELECT_RIGHT_ARROW',
  SELECT_LAST_EQUAL_SUGGEST: 'AUTOSUGGEST_SELECT_LAST_EQUAL_SUGGEST',
}

type TSuggestion = Record<string, unknown>
type TSection = TSuggestion[] | {
  values: TSuggestion[]
}

type TProps = Autosuggest.AutosuggestProps<TSuggestion, TSection> & {
  forceSuggestedValue: boolean;
  getSectionSuggestions?: GetSectionSuggestions<TSuggestion, TSection>;
  renderSectionTitle?: RenderSectionTitle;
  isSuggestAlreadySelected: (props: TProps) => boolean;
  isValueEqualWithFirstSuggest: (
    value: string,
    suggestions: ReadonlyArray<TSuggestion> | ReadonlyArray<TSection>
  ) => boolean;
  inputProps: Autosuggest.InputProps<TSuggestion> & {
    meta: { active: boolean } | null;
    IATACode: string;
  };
  size?: number;
  className: string;
}

type State = {
  suggestions: ReadonlyArray<TSuggestion> | ReadonlyArray<TSection>,
}

interface TAutosuggestInstance extends Autosuggest {
  justSelectedSuggestion: boolean;
  willRenderSuggestions: (psops: TProps) => boolean;
  closeSuggestions: () => void;
  maybeCallOnChange: (
    event: React.FocusEvent<HTMLElement>,
    newValue: string,
    method: string,
  ) => void;
  onSuggestionSelected: Autosuggest.OnSuggestionSelected<TSuggestion>
}

const getFirstSuggestion = ({ suggestions, multiSection }: TProps) => {
  let [suggestion] = suggestions
  if (multiSection && suggestion && Array.isArray(suggestion)) {
    // destructuring dosn't work for assignment in babel
    // eslint-disable-next-line prefer-destructuring
    suggestion = suggestion[0]
  }

  return suggestion || null
}

const getSectionIterator = ({ multiSection, suggestions, getSectionSuggestions }: TProps) => {
  return (
    createSectionIterator({
      multiSection,
      data: multiSection
        ? suggestions.map((section: unknown) => {
          if (!getSectionSuggestions) {
            throw new Error(
              '"getSectionSuggestions" must be implemented',
            )
          }
          return getSectionSuggestions(section as TSection).length
        })
        : suggestions.length,
    })
  )
}

class Autocomplete extends PureComponent<TProps, State> {
  state = {
    suggestions: this.props.suggestions || [],
  }

  sectionIterator = getSectionIterator(this.props)
  autosuggestInstance: TAutosuggestInstance | null = null
  userAreTyping = true

  static defaultProps = {
    // @ts-ignore
    ...Autosuggest.defaultProps,
    highlightFirstSuggestion: true,
    getSuggestionValue: (suggestion: TSuggestion) => suggestion.value,
    getSectionSuggestions: (section: TSection) => section.values,
    forceSuggestedValue: true,
    renderSuggestionsContainer: (
      {
        containerProps,
        children,
      }: Autosuggest.RenderSuggestionsContainerParams,
    ) => (
      <SuggestionsContainer {...containerProps}>
        {children}
      </SuggestionsContainer>
    ),
    isSuggestAlreadySelected: (props: TProps) => Boolean(props.inputProps.IATACode),
    isValueEqualWithFirstSuggest: (
      value: string,
      suggestions: ReadonlyArray<TSuggestion> | ReadonlyArray<TSection>,
    ) => (
      isValuesEqual(value, _get(suggestions, '0.value')) || isValuesEqual(value, _get(suggestions, '0.IATACode'))
    ),
  }

  // TODO airbnb config for `react/sort-comp` are missing UNSAFE_ lifecycles
  // eslint-disable-next-line camelcase, react/sort-comp
  UNSAFE_componentWillReceiveProps(nextProps: TProps) {
    const {
      suggestions,
      multiSection,
      inputProps,
      forceSuggestedValue,
      isSuggestAlreadySelected,
      isValueEqualWithFirstSuggest,
    } = nextProps
    const { value, meta } = inputProps

    const valueIsEqualWithFirstSuggest = isValueEqualWithFirstSuggest(value, suggestions)
    const suggestIsAlreadySelected = isSuggestAlreadySelected(nextProps)

    if (valueIsEqualWithFirstSuggest && !suggestIsAlreadySelected && suggestions.length === 1) {
      this.selectFirstSuggest(null, nextProps, AUTOSUGGEST_METHODS.SELECT_LAST_EQUAL_SUGGEST)
      this.setState({ suggestions: [] })
    } else if (forceSuggestedValue && suggestions.length && meta && !meta.active) {
      this.selectFirstSuggest(null, nextProps, 'autoFill')
      this.setState({ suggestions: [] })
    } else {
      this.setState({ suggestions })
    }

    if (suggestions !== this.props.suggestions || multiSection !== this.props.multiSection) {
      this.sectionIterator = getSectionIterator(nextProps)
    }
  }

  onChange: Autosuggest.InputProps<TSuggestion>['onChange'] = (event, params) => {
    const userAreTyping = params.newValue.length >= this.props.inputProps.value.length

    this.props.inputProps.onChange(event, {
      ...params,
    })

    this.userAreTyping = userAreTyping
  }

  onBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (this.props.inputProps.onBlur) {
      this.props.inputProps.onBlur(event)
    }

    if (!this.autosuggestInstance || !this.autosuggestInstance.justSelectedSuggestion) {
      if (this.props.forceSuggestedValue) {
        this.selectFirstSuggest(event, this.props, 'blur')
      }
    }
  }

  onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const { suggestions, inputProps } = this.props

    if (inputProps.onKeyDown) {
      inputProps.onKeyDown(event)
    }

    if (event.key === 'ArrowRight' && suggestions.length) {
      this.selectFirstSuggest(null, this.props, AUTOSUGGEST_METHODS.SELECT_RIGHT_ARROW)
    }
  }

  selectFirstSuggest(event: React.FocusEvent<HTMLElement> | null, props: TProps, method: string) {
    if (this.autosuggestInstance === null) return

    const { getSuggestionValue, alwaysRenderSuggestions, multiSection } = props
    const suggestion = getFirstSuggestion(props)

    const { isFocused, isCollapsed } = this.autosuggestInstance.state

    const willRenderSuggestions = this.autosuggestInstance.willRenderSuggestions(this.props)
    const isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions

    if (isOpen && !alwaysRenderSuggestions) {
      this.autosuggestInstance.closeSuggestions()
    }

    const ALLOWED_METHODS = [
      'blur',
      AUTOSUGGEST_METHODS.SELECT_RIGHT_ARROW,
      AUTOSUGGEST_METHODS.SELECT_LAST_EQUAL_SUGGEST,
      'autoFill',
    ]

    if (suggestion && (this.userAreTyping || ALLOWED_METHODS.includes(method))) {
      const newValue = getSuggestionValue(suggestion as TSuggestion)

      this.autosuggestInstance.maybeCallOnChange(
        event as React.FocusEvent<HTMLElement>,
        newValue,
        method,
      )

      this.autosuggestInstance.onSuggestionSelected(event as React.FormEvent<HTMLElement>, {
        suggestion: suggestion as TSuggestion,
        suggestionValue: newValue,
        suggestionIndex: 0,
        sectionIndex: multiSection ? 0 : null,
        method: method as 'click' | 'enter',
      })

      this.autosuggestInstance.justSelectedSuggestion = true

      // Autosuggest differentiates props updates
      // caused by arrow-keys navigation from other updates
      // https://github.com/moroshko/react-autosuggest/blob/master/src/Autosuggest.js#L366
      setTimeout(() => {
        if (this.autosuggestInstance) {
          this.autosuggestInstance.justSelectedSuggestion = false
        }
      }, 0)
    } else if (!suggestion) {
      this.autosuggestInstance.maybeCallOnChange(event as React.FocusEvent<HTMLElement>, '', method)
    }
  }

  render() {
    const { suggestions = [] } = this.state
    const { inputProps, size, className, ...props } = this.props
    const spell = suggestions.length && this.props.getSuggestionValue(suggestions[0] as TSuggestion) || ''

    return (
      <Autosuggest
        {...props}
        inputProps={{
          ...inputProps,
          onChange: this.onChange,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          // @ts-ignore
          spell,
          size,
        }}
        suggestions={suggestions}
        ref={
          (ref) => {
            this.autosuggestInstance = ref as TAutosuggestInstance
          }
        }
        theme={{

          // @ts-ignore Pass `className` into Autosuggest theme.
          // The `container` is className for root block
          ...Autosuggest.defaultProps.theme,
          container: className,
        }}
      />
    )
  }
}

const StyledAutocomplete = styled(Autocomplete)`
  ${style}
`

export default StyledAutocomplete
