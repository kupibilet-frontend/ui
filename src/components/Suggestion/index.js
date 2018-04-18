// @flow
import React from 'react'
import Icon from 'components/Icon'

import { SuggestionContainer, SuggestionIcon, SuggestionText } from './styled'

type SuggestionObject = {
  key?: any,
  value?: any,
}

type Props = {
  suggestion: Object,
  selectedKey?: string | any,
  isHighlighted?: boolean,
  getSuggestionValue: (Object: SuggestionObject) => string | any,
  getSuggestionKey: (Object: SuggestionObject) => string | any,
}
const Suggestion = (props: Props) => {
  const {
    suggestion,
    selectedKey,
    isHighlighted,
    getSuggestionKey,
    getSuggestionValue,
  } = props
  return (
    <SuggestionContainer isHighlighted={isHighlighted}>
      <SuggestionIcon>
        {selectedKey === getSuggestionKey(suggestion) && (
          <Icon name="checkmark" fill="primaryLight" />
        )}
      </SuggestionIcon>
      <SuggestionText>{getSuggestionValue(suggestion)}</SuggestionText>
    </SuggestionContainer>
  )
}

Suggestion.defaultProps = {
  selectedKey: '',
  isHighlighted: false,
  getSuggestionValue: (suggestion: SuggestionObject) => suggestion.value,
  getSuggestionKey: (suggestion: SuggestionObject) => suggestion.key,
}

export default Suggestion
