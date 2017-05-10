import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'

const Passenger = styled.div`
  display: flex;
  width: 100%;
  min-width: 216px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  color: ${color.textDarker};
`

const Description = styled.p`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  color: ${color.text};
`

const Current = styled.span`
  margin-right: 6px;
  font-size: 24px;
  line-height: 28px;
  color: ${color.textDarker};
`

const Spinner = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 6px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${color.primary};
  opacity: ${(props) => (props.disabled === true ? 0.2 : 1)};
  cursor: ${(props) => (props.disabled === true ? 'default' : 'pointer')};

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 6px);
    display: inline-block;
    height: 2px;
    width: 12px;
    border-radius: 2px;
    background-color: #fff;
  }

  &.plus {
    &:after {
      content: '';
      position: absolute;
      top: calc(50% - 1px);
      left: calc(50% - 6px);
      display: inline-block;
      height: 2px;
      width: 12px;
      border-radius: 2px;
      background-color: #fff;
      transform: rotate(90deg);
    }
  }
`

const PassengerCurrent = styled.div`
  display: flex;
`

const PassengerSpinner = styled.div`
  display: inline-flex;
  align-items: center;
`

const PassengerComponent = ({ title, description, current, disabled, decrement, increment }) => (
  <Passenger>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <PassengerCurrent>
      <Current>{current}</Current>
      <PassengerSpinner>
        <Spinner disabled={(disabled === 'disabled-min' || disabled === 'disabled') && true} onClick={decrement} />
        <Spinner className="plus" disabled={(disabled === 'disabled-max' || disabled === 'disabled') && true} onClick={increment} />
      </PassengerSpinner>
    </PassengerCurrent>
  </Passenger>
)

PassengerComponent.defaultProps = {
  title: '',
  description: '',
  current: 0,
  disabled: '',
  decrement: null,
  increment: null,
}

PassengerComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  current: PropTypes.number,
  disabled: PropTypes.string,
  decrement: PropTypes.func,
  increment: PropTypes.func,
}

export default PassengerComponent
