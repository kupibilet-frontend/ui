import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import StyledCollapse, { StyledPanel } from 'blocks/Collapse'

const text = `
  Here you can add your styled React component
`

const CollapseContainer = styled.div`
  width: 400px;
`

const LargeCollapseContainer = styled.div`
  width: 900px;
`

const CustomHeader = styled.div`
  color: crimson;
  font-style: italic;
  font-weight: normal;
  padding: 4px;
  border: crimson 1px dashed;
  margin-bottom: 5px;
`

const CustomStyledCollapse = styled(StyledCollapse)`
  display: flex;
  margin-left: -10px;

  & > * {
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 10px;
  }
`

storiesOf('Blocks/Collapse', module)
  .addWithInfo('Default', () => (
    <CollapseContainer>
      <StyledCollapse defaultActiveKey={['0']}>
        <StyledPanel header="Close me">{text}</StyledPanel>
        <StyledPanel header="Open me">{text}</StyledPanel>
        <StyledPanel header="Open me">{text}</StyledPanel>
      </StyledCollapse>
    </CollapseContainer>
  ))
  .addWithInfo('Accordion', () => (
    <CollapseContainer>
      <StyledCollapse accordion defaultActiveKey={['0']}>
        <StyledPanel header="Close me">{text}</StyledPanel>
        <StyledPanel header="Open me">{text}</StyledPanel>
        <StyledPanel header="Open me">{text}</StyledPanel>
      </StyledCollapse>
    </CollapseContainer>
  ))
  .addWithInfo('With paddings', () => (
    <CollapseContainer>
      <StyledCollapse accordion defaultActiveKey={['0']}>
        <StyledPanel withPadding header="Close me">{text}</StyledPanel>
        <StyledPanel withPadding header="Open me">{text}</StyledPanel>
        <StyledPanel withPadding header="Open me">{text}</StyledPanel>
      </StyledCollapse>
    </CollapseContainer>
  ))
  .addWithInfo('Always open', () => (
    <CollapseContainer>
      <StyledCollapse defaultActiveKey={['0', '1', '2']}>
        <StyledPanel disabled header="Close me">{text}</StyledPanel>
        <StyledPanel disabled header="Open me">{text}</StyledPanel>
        <StyledPanel disabled header="Open me">{text}</StyledPanel>
      </StyledCollapse>
    </CollapseContainer>
  ))
  .addWithInfo('Render custom header and layout', () => (
    <LargeCollapseContainer>
      <CustomStyledCollapse defaultActiveKey={['0']}>
        <StyledPanel
          renderHeader={() => (<CustomHeader>I am a <b>stylish</b> header 1</CustomHeader>)}
        >
          {text}
        </StyledPanel>
        <StyledPanel
          renderHeader={() => (<CustomHeader>I am a <code>stylish</code> header 2</CustomHeader>)}
        >
          {text}
        </StyledPanel>
      </CustomStyledCollapse>
    </LargeCollapseContainer>
  ))
