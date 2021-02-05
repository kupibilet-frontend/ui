import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { array } from '@storybook/addon-knobs'
// TODO: add it to ts-config (in eslint will be added in !458)
// @ts-ignore
import updateKnob from 'storybook/updateKnob'

import { Collapse, CollapsePanel } from 'components/Collapse'
import { TPanelHeaderProps } from './CollapsePanel'

const text = `
  Here you can add your styled React component
`

const StyledCollapseContainer = styled.div`
  width: 400px;
`


interface TStyledHeaderProps {
  isActive?: boolean,
}

const StyledHeader = styled.div<TStyledHeaderProps>`
  border: 1px solid ${({ isActive }) => (isActive ? 'red' : 'blue')};
  padding: 10px 20px;
`

storiesOf('COMPONENTS|Collapse', module)
  .add('with defaultActiveKey', () => (
    <StyledCollapseContainer>
      <Collapse defaultActiveKey={['0']}>
        <CollapsePanel header="Close me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
      </Collapse>
    </StyledCollapseContainer>
  ))
  .add('without defaultActiveKey', () => (
    <StyledCollapseContainer>
      <Collapse>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
      </Collapse>
    </StyledCollapseContainer>
  ))
  .add('with activeKey & onChange', () => {
    const activeKey = array('activeKey', ['1'])

    const onChange = (updatedActiveKey: string[]) => {
      updateKnob('activeKey', 'array', updatedActiveKey)
    }

    return (
      <StyledCollapseContainer>
        <Collapse activeKey={activeKey} onChange={onChange}>
          <CollapsePanel header="Open me">{text}</CollapsePanel>
          <CollapsePanel header="Close me">{text}</CollapsePanel>
          <CollapsePanel header="Open me">{text}</CollapsePanel>
        </Collapse>
      </StyledCollapseContainer>
    )
  })
  .add('accordion with defaultActiveKey', () => (
    <StyledCollapseContainer>
      <Collapse isAccordion defaultActiveKey={['0']}>
        <CollapsePanel header="Close me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
      </Collapse>
    </StyledCollapseContainer>
  ))
  .add('accordion without defaultActiveKey', () => (
    <StyledCollapseContainer>
      <Collapse isAccordion>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
        <CollapsePanel header="Open me">{text}</CollapsePanel>
      </Collapse>
    </StyledCollapseContainer>
  ))
  .add('accordion with activeKey & onChange', () => {
    const activeKey = array('activeKeyAccordion', ['1'])

    const onChange = (updatedActiveKey: string[]) => {
      updateKnob('activeKeyAccordion', 'array', updatedActiveKey)
    }

    return (
      <StyledCollapseContainer>
        <Collapse isAccordion activeKey={activeKey} onChange={onChange}>
          <CollapsePanel header="Open me">{text}</CollapsePanel>
          <CollapsePanel header="Close me">{text}</CollapsePanel>
          <CollapsePanel header="Open me">{text}</CollapsePanel>
        </Collapse>
      </StyledCollapseContainer>
    )
  })
  .add('default with renderHeader', () => {
    const renderHeader = ({ header, isActive }: TPanelHeaderProps): JSX.Element => (
      <StyledHeader isActive={isActive}>
        {header}
        {' '}
        {isActive ? 'opened!' : 'closed'}
      </StyledHeader>
    )

    return (
      <StyledCollapseContainer>
        <Collapse defaultActiveKey={['0']}>
          <CollapsePanel renderHeader={renderHeader} header="Open me">{text}</CollapsePanel>
          <CollapsePanel renderHeader={renderHeader} header="Open me">{text}</CollapsePanel>
          <CollapsePanel renderHeader={renderHeader} header="Open me">{text}</CollapsePanel>
        </Collapse>
      </StyledCollapseContainer>
    )
  })
