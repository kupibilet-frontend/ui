import React from 'react'
import { NavBar, NavItem } from 'components/NavBar'
import styled from 'styled-components'
import { useArgs } from '@storybook/client-api'


const PageImitator = styled.div`
  padding: 0 18px;
`

const ITEMS_LIST = ['Main page', 'Orders', 'Notebook', 'Settings']
  .map((itemName, index) => ({ itemName, index }))

export const NavBarStory = (): JSX.Element => {
  const [{ activeKey }, updateArgs] = useArgs()
  const onNavItemClick = (key: number) => updateArgs({ activeKey: key })

  return (
    <PageImitator>
      <NavBar>
        {ITEMS_LIST.map(({ itemName, index }) => (
          <NavItem isActive={activeKey === index} onClick={() => onNavItemClick(index)} key={index}>
            {itemName}
          </NavItem>
        ))}
      </NavBar>
    </PageImitator>
  )
}

NavBarStory.args = {
  activeKey: 0,
}

NavBarStory.argTypes = {
  activeKey: 'number',
}

export default {
  title: 'NavBar',
  parameters: {
    component: NavBar,
    componentSubtitle: `
      You can use NavBar with Router by passing router link to NavItem component
    `,
  },
}
