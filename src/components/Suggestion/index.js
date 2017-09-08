// @flow
import React from 'react'
import Icon from 'components/Icon'

import {
  SuggestionContainer,
  SuggestionIcon,
  SuggestionText,
} from './styled'

type Props = {
  suggestion: Object,
  selectedKey: any,
  isHighlighted?: boolean,
  getSuggestionKey: Function,
  getSuggestionValue: Function,
}
const Suggestion = (props : Props) => {
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
        {selectedKey === getSuggestionKey(suggestion) &&
          <Icon name="checkbox" fill="primaryLight" />
        }
      </SuggestionIcon>
      <SuggestionText>
        {getSuggestionValue(suggestion)}
      </SuggestionText>
    </SuggestionContainer>
  )
}

Suggestion.defaultProps = {
  isHighlighted: false,
  getSuggestionValue: (suggestion) => suggestion.value,
  getSuggestionKey: (suggestion) => suggestion.key,
}

export default Suggestion
