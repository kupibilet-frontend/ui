import React from 'react'
import { NavBar, NavItem } from 'components/NavBar'
import { number } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import styled from 'styled-components'

const PageImitator = styled.div`
  padding: 0 18px;
`
const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const onClick = (i) => updateKnob('activeKey', 'number', i)


export const navBar = () => {
  const activeKey = number('activeKey', 0)

  return (
    <PageImitator>
      <NavBar>
        {itemList.map((item, i) => (
          <NavItem isActive={activeKey === i} onClick={() => onClick(i)}>{item}</NavItem>
        ))}
      </NavBar>
    </PageImitator>
  )
}

navBar.story = {
  name: 'NavBar',
}

export default {
  title: 'COMPONENTS|Controls/NavBar',
  parameters: {
    component: NavBar,
    componentSubtitle: `import { NavBar, NavItem } from '@kupibilet/ui/components/NavBar`,
  },
}
