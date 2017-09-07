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
  selectedValue: any,
  isHighlighted?: boolean,
}
const Suggestion = (props : Props) => {
  const { suggestion, selectedValue, isHighlighted } = props
  return (
    <SuggestionContainer isHighlighted={isHighlighted}>
      <SuggestionIcon>
        {selectedValue === suggestion.value &&
          <Icon name="checkbox" fill="primaryLight" />
        }
      </SuggestionIcon>
      <SuggestionText>
        {suggestion.value}
      </SuggestionText>
    </SuggestionContainer>
  )
}

Suggestion.defaultProps = {
  isHighlighted: false,
}

export default Suggestion
