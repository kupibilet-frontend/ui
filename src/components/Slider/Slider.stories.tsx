import React from 'react'
import { useArgs } from '@storybook/client-api'
import Slider from 'components/Slider'
import styled from 'styled-components'


interface TArgs {
  min: number,
  max: number,
  values: [number, number],
}

const StyledContainer = styled.div`
  width: 500px;
  padding: 50px;
`

const DEFAULT_SLIDER_PROPS: TArgs = {
  min: 1,
  max: 100,
  values: [20, 60],
}

export const UncontrolledSliderStory = (args: TArgs): JSX.Element => (
  <StyledContainer>
    <Slider min={args.min} max={args.max} values={args.values} />
  </StyledContainer>
)

UncontrolledSliderStory.args = {
  ...DEFAULT_SLIDER_PROPS,
}

export const ControlledSliderStory = (args: TArgs): JSX.Element => {
  const [, updateArgs] = useArgs()

  function onAfterChange(changedValues: number[]): void {
    updateArgs({ values: changedValues })
  }

  return (
    <StyledContainer>
      <Slider min={args.min} max={args.max} values={args.values} onAfterChange={onAfterChange} />
    </StyledContainer>
  )
}

ControlledSliderStory.args = {
  ...DEFAULT_SLIDER_PROPS,
}

export default {
  title: 'Slider',
  component: Slider,
}
