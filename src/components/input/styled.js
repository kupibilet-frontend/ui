import styled from 'styled-components'
// import Icon from '../icons'

const PADDING = {
  large: 15,
  normal: 12,
  small: 9,
}

const HEIGHT = {
  large: 42,
  normal: 36,
  small: 30,
}

const TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16,
}

// const MARGIN_RIGHT = {
//   large: 10,
//   normal: 7,
//   small: 7,
// }

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
`

export const StyledSpan = styled.span`
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  user-select: none;
`

export const StyledInputSpan = styled.span`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => ((props.success || props.error) ? 'block' : 'none')}
    height: 100%;
    width: 2px;
    border-radius: 3px 0 0 3px;
    background-color: ${(props) => (props.error ? '#E64926' : '#23C256')}
  }
`

export const StyledInputSpanError = styled.span`
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    display: ${(props) => (props.error ? 'block' : 'none')}
    padding-top: 3px;
    padding-bottom: 5px;
    padding-left: ${PADDING.normal}px;
    width: ${({ size }) => ((size === 'small') ? '100%' : '181px')};
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 3px;
    background-color: #E64926;
    opacity: 0.97;
    z-index: 2;
`

export const StyledInput = styled.input`
  padding-left: ${({ size }) => PADDING[size]}px;
  padding-right: ${({ size }) => PADDING[size]}px;
  height: ${({ size }) => HEIGHT[size]}px;
  width: 280px;
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  color: #333333;
  border: 1px solid #B1BDCC;
  border-radius: 3px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  cursor: text;

  &::placeholder {
    color: #96A0B3;
  }

  &:hover {
    border-color: #38AFFF;
  }

  &:active {
    margin: -1px 0;
    height: ${({ size }) => HEIGHT[size] + 2}px;
    border: 2px solid #38AFFF;
  }

  &:disabled {
    background-color: #F0F5FA;
    border: 1px solid #F0F5FA;

    &:hover {
      border-color: #F0F5FA;
    }

    &::placeholder {
      color: #B1BDCC;
    }
  }
`

export const IconQuestion = styled.span`
  position: absolute;
  top: calc(50% - 9px);
  right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #B1BDCC;
  background-color: #FFFFFF;
`
