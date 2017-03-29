import React, { PropTypes } from 'react'
import Rheostat from 'rheostat'
import styled from 'styled-components'

export const RheostatWrapper = styled(Rheostat)`
  width: 252px;

  .rheostat-background {
    background-color: ${({ theme }) => theme.color.miscLight};
    height: 6px;
    border-radius: 3px;
    width: 100%;
  }
`

export const StyledHandle = styled.span`
  background-color: ${({ theme }) => theme.color.miscDark};
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  height: 18px;
  top: -6px;
  width: 18px;
  z-index: 1;

  &:hover, &:active {
    background-color: ${({ theme }) => theme.color.primary};
  }
`

export const StyledProgressBar = styled.span`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  border-radius: 3px;
  display: flex;
  position: absolute;
  height: 6px;
  top: 0;
  z-index: 0;
`

export const StyledPitComponent = styled.div`
  background: ${({ theme }) => theme.color.miscLighter};
  width: 12px;
  height: ${(props) => (props.children % 10 === 0 ? 12 : 8)}px;
  top: 20px;
`

function PitComponent({ style, children }) {
  return (
    <div
      style={{
        ...style,
        background: '#dde3eb',
        width: 12,
        height: children % 10 === 0 ? 12 : 8,
        top: `-${children % 10 === 0 ? 12 : 8}`,
      }}
    />
  )
}

PitComponent.propTypes = {
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.number,
}

PitComponent.defaultProps = {
  style: null,
  children: null,
}

export default class Slider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
  }

  render() {
    return (
      <RheostatWrapper
        min={0}
        max={100}
        handle={StyledHandle}
        progressBar={StyledProgressBar}
        pitComponent={PitComponent}
        pitPoints={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]} // eslint-disable-line max-len
        values={[0, 100]}
      />
    )
  }
}
