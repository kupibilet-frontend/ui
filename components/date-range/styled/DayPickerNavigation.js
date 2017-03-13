import { css } from 'styled-components'
import { switchTransition } from '../../../utils/transitions'

export default css`
  .DayPickerNavigation__prev,
  .DayPickerNavigation__next {
    cursor: pointer;
    user-select: none;
    text-align: center;

    background: ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;

    ${switchTransition}
    transition-property: opacity;

    &:focus,
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.primary};
    }

    svg {
      display: inline-block;
      height: 30px;
    }
  }

  .DayPickerNavigation__prev--disabled,
  .DayPickerNavigation__next--disabled {
    cursor: default;
    opacity: .2;
  }

  .DayPickerNavigation__prev--default,
  .DayPickerNavigation__next--default {}

  .DayPickerNavigation--horizontal {
    position: relative;

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
      top: 18px;
      z-index: 2;
      position: absolute;
    }

    .DayPickerNavigation__prev {
      left: 22px;
    }

    .DayPickerNavigation__next {
      right: 22px;
    }

    .DayPickerNavigation__prev--default,
    .DayPickerNavigation__next--default {
      svg {
        height: 19px;
        width: 19px;
        fill: ${({ theme }) => theme.color.background};
      }
    }
  }

  .DayPickerNavigation--vertical {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 52px;
    width: 100%;
    z-index: 2;

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 50%;
    }

    .DayPickerNavigation__next--default {
      border-left: 0;
    }

    .DayPickerNavigation__prev--default,
    .DayPickerNavigation__next--default {
      text-align: center;
      font-size: 2.5em;
      padding: 5px;

      svg {
        height: 42px;
        width: 42px;
        fill: $react-dates-color-text
      }
    }
  }

  .DayPickerNavigation--vertical-scrollable {
    position: relative;

    .DayPickerNavigation__next {
      width: 100%;
    }
  }
`
