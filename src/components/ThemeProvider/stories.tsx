import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { color } from './theme'

interface TColorBoxProps {
  pickedColor: string
}

const ColorBox = styled.div<TColorBoxProps>`
  width: 100px;
  height: 50px;
  background-color: ${({ theme, pickedColor }) => theme.color[pickedColor]};
  padding: 10px;
  margin: 5px;
`

const ColorCard = styled.div`
  flex: 1;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 6px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.125s ease-in-out;
  &:hover {
    box-shadow: 0 0 2px rgba(0,0,0, 0.10);
  }
`
const Text = styled.div`
  width: 300px;
  padding-top: 20px;
  margin: 0 auto;
`
const ColorPanel = styled.div`
  display: grid;
  grid-gap: 12px;
  padding: 20px;
  grid-template-columns: repeat(7, 140px);
  width: 1000px;
`

const colors = Object.keys(color)

const copyToClipboard = (str: string): void => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected = (document?.getSelection()?.rangeCount ?? 0) > 0
    ? document?.getSelection()?.getRangeAt(0)
    : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  const card = document.getElementById(str)
  if (card) {
    card.style.backgroundColor = color[str]
  }
  setTimeout(() => {
    if (card) {
      card.style.backgroundColor = 'white'
    }
  }, 3000)
  if (selected) {
    /* eslint-disable no-unused-expressions */
    document?.getSelection()?.removeAllRanges()
    document?.getSelection()?.addRange(selected)
    /* eslint-enable no-unused-expressions */
  }
}

storiesOf('COLORS', module)
  .add('Theme colors', () => (
    <>
      <Text>click to copy</Text>
      <ColorPanel>
        {colors.map((pickedColor) => (
          <ColorCard
            id={pickedColor}
            onClick={() => copyToClipboard(pickedColor)}
            key={pickedColor}
          >
            <span>{pickedColor}</span>
            <span>{color[pickedColor]}</span>
            <ColorBox pickedColor={pickedColor} />
          </ColorCard>
        ))}
      </ColorPanel>
    </>
  ))
