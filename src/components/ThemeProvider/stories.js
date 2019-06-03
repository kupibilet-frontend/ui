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
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 6px;
`
const ColorPanel = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(7, 140px);
  width: 1000px;
`
const colors = Object.keys(color)

storiesOf('COLORS', module)
  .add('Theme colors', () => (
    <ColorPanel>
      {colors.map((pickedColor) => (
        <ColorCard>
          <span>{pickedColor}</span>
          <span>{color[pickedColor]}</span>
          <ColorBox pickedColor={pickedColor} />
        </ColorCard>
      ))}
    </ColorPanel>
  ))
