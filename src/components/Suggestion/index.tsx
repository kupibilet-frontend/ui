import React from 'react'
import Icon from 'components/Icon'
import { TSuggestion } from 'components/Autocomplete'
import { COLOR_NAMES } from 'components/ThemeProvider/types'

import {
  SuggestionContainer,
  SuggestionIcon,
  SuggestionText,
} from './styled'

interface TProps {
  suggestion: TSuggestion,
  selectedKey?: string | any,
  isHighlighted?: boolean,
  getSuggestionValue: (suggestion: TSuggestion) => string | any,
  getSuggestionKey: (suggestion: TSuggestion) => string | any,
}

const Suggestion = (props: TProps) => {
  const {
    suggestion,
    selectedKey,
    isHighlighted,
    getSuggestionKey,
    getSuggestionValue,
  } = props
  return (
    <SuggestionContainer isHighlighted={isHighlighted} title={getSuggestionValue(suggestion)}>
      <SuggestionIcon>
        {selectedKey === getSuggestionKey(suggestion)
          && <Icon name="checkmark" fill={COLOR_NAMES.colorTextPrimary} />
        }
      </SuggestionIcon>
      <SuggestionText>
        {getSuggestionValue(suggestion)}
      </SuggestionText>
    </SuggestionContainer>
  )
}

Suggestion.defaultProps = {
  selectedKey: '',
  isHighlighted: false,
  getSuggestionValue: (suggestion: TSuggestion) => suggestion.value,
  getSuggestionKey: (suggestion: TSuggestion) => suggestion.key,
}

export default Suggestion
