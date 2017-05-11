import React from 'react'
import PropTypes from 'prop-types'
import {Passenger, Title, Description, Current, CountControl, PassangerCount, CountControls} from './styled'
import Icon from '../icons'
import Button from '../button/index'

const PassangerPicker = ({ title, description, value, decrement, increment, ...props }) => (
  <Passenger
    {...props}
  >
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <PassangerCount>
      <Current>{value}</Current>
      <CountControls>
        <CountControl className="control-min" isMax={props.isMax} isMin={props.isMin} onClick={decrement}>
          <Button size="normal" icon={
            <Icon 
              name="minus"
              stroke="background"
            />
          } />
        </CountControl>
        <CountControl className="control-max" isMax={props.isMax} isMin={props.isMin} onClick={increment}>
          <Button size="normal" icon={
            <Icon 
              name="plus"
              stroke="background"
            />
          } />
        </CountControl>
      </CountControls>
    </PassangerCount>
  </Passenger>
)

PassangerPicker.defaultProps = {
  title: '',
  description: '',
  current: 0,
  disabled: '',
  decrement: null,
  increment: null,
  isMax: false,
  isMin: true,
}

PassangerPicker.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  current: PropTypes.number,
  disabled: PropTypes.string,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  isMin: PropTypes.bool,
  isMax: PropTypes.bool,
}

export default PassangerPicker
