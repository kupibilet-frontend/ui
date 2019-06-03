import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { color } from './theme'

const ColorBox = styled.div`
  width: 100px;
  height: 50px;
  background-color: ${({ theme, pickedColor }) => theme.color[pickedColor]};
  padding: 10px;
  margin: 5px;
`
const ColorCard = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ColorPanel = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
`
const colors = Object.keys(color)

storiesOf('COLORS', module)
  .add('Theme colors', () => (
    <ColorPanel>
      {colors.map((pickedColor) => (
        <ColorCard>
          <span>{pickedColor} - {color[pickedColor]}</span>
          <ColorBox pickedColor={pickedColor} />
        </ColorCard>
      ))}
    </ColorPanel>
  ))
