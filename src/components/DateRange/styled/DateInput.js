import { css } from 'styled-components'
import { switchTransition } from 'utils/transitions'

// $caretTop: 62px

export default css`
  .DateInput {
    margin: 0;

    position: relative;
    display: inline-block;
    width: 50%;
    vertical-align: middle;

    .screen-reader-only {
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  .DateInput--with-caret::before,
  .DateInput--with-caret::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: auto;
    border: 10px solid transparent;
    border-top: 0;
    left: 22px;
  }

  // We dont use caret
  // .DateInput--with-caret::before {}
  //
  // .DateInput--with-caret::after {}

  // Are this state pertinently?
  // .DateInput--disabled {}

  .DateInput__input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;

    // Anymore overlays inputs text blocks
    z-index: 3;
  }

  // Placeholder state
  .DateInput__display-text {
    color: ${({ theme }) => theme.color.miscDark};
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.11px;
    white-space: nowrap;

    padding: 10px 10px 10px 16px;
    ${switchTransition} border: 2px solid ${({ theme }) =>
  theme.color.primaryLight};
    border-radius: 100px 0 0 100px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.background};
    // Input borders overlaying
    position: relative;
    margin-right: 0;
    z-index: 1;
  }

  .DateInput ~ .DateInput .DateInput__display-text {
    border-radius: 0 100px 100px 0;
    margin-left: -2px;
    padding: 10px 16px 10px 10px;
  }

  // Not a placeholder state
  .DateInput__display-text--has-input {
    color: ${({ theme }) => theme.color.textDarker};
    font-weight: 600;
  }

  .DateInput--startDate--placeholder #startDate ~ .DateInput__display-text,
  .DateInput--endDate--placeholder #endDate ~ .DateInput__display-text {
    color: ${({ theme }) => theme.color.miscDark};
    font-weight: normal;
  }

  .DateInput--startDate--error [id='startDate'] ~ .DateInput__display-text {
    border-color: ${({ theme }) => theme.color.fail};
    z-index: 2;
  }

  .DateInput {
    & .DateInput__display-text.DateInput__display-text--focused,
    &:hover .DateInput__display-text {
      border-color: ${({ theme }) => theme.color.secondary};
      z-index: 2;
    }
  }
`
