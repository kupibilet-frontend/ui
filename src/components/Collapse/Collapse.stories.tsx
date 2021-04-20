import React from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react'

import { Collapse, CollapsePanel, TProps } from 'components/Collapse'
import { useArgs } from '@storybook/client-api'
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

const CollapseTemplate = (args: TProps): JSX.Element => {
  const [{ defaultActiveKey, activeKey, disabled, isAccordion }] = useArgs()

  return (
    <StyledCollapseContainer>
      <Collapse
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        disabled={disabled}
        isAccordion={isAccordion}
      >
        <CollapsePanel header="Item one">{text}</CollapsePanel>
        <CollapsePanel header="Item two">{text}</CollapsePanel>
        <CollapsePanel header="Item three">{text}</CollapsePanel>
      </Collapse>
    </StyledCollapseContainer>
  )
}

export const WithDefaultActiveKey: Story<TProps> = CollapseTemplate.bind({})
WithDefaultActiveKey.args = {
  defaultActiveKey: ['1'],
}

export const WithoutDefaultActiveKey: Story<TProps> = CollapseTemplate.bind({})

export const WithActiveKey: Story<TProps> = CollapseTemplate.bind({})
WithActiveKey.args = {
  activeKey: ['2'],
}

export const WithRenderHeader = () => {
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
}

export default {
  title: 'Collapse',
  component: Collapse,
}
