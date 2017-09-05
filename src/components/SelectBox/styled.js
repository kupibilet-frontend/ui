import styled from 'styled-components'
import { shadowSmall } from 'utils/shadows'
import { borderRadiusSmall } from 'utils/borderRadius'
import mq from 'utils/media-queries'

const StyledContainer = styled.div`
  position: relative;

.react-autosuggest__container {}
.react-autosuggest__container--open {}
.react-autosuggest__input {
  appearance: none;
  &::-ms-clear,
  &::-webkit-search-cancel-button {
    display: none;
  }
}
.react-autosuggest__input--open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.react-autosuggest__input--focused {
  outline: none;
}
.react-autosuggest__suggestions-container {
  display: none;
}
.react-autosuggest__suggestions-container--open {
  z-index: 15;
  display: block;
  ${mq.mobile`
    position: static;
  `}
}
.react-autosuggest__suggestions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.react-autosuggest__suggestion--first {}
.react-autosuggest__suggestion--highlighted {}
.react-autosuggest__section-container {}
.react-autosuggest__section-container--first {}
.react-autosuggest__section-title {}
`

const RelativeWrapper = styled.div`
  position: relative;
`

const SuggestionsContainer = styled.div`
  margin: 3px 0 0;
  padding: 0;
  background-color: #fff;
  list-style-type: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 540px;
  ${shadowSmall}
  ${borderRadiusSmall}
  overflow: hidden;
  ${mq.mobile`
    top: initial;
    left: 0;
    right: 0;
`}
`

export {
  StyledContainer,
  RelativeWrapper,
  SuggestionsContainer,
}
