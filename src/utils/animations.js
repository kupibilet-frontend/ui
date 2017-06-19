import { keyframes } from 'styled-components'

/* eslint-disable import/prefer-default-export */
export const floatFromTop = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`
