import React from 'react'
import { storiesOf } from '@storybook/react'
import { NavBar, NavItem } from 'components/NavBar'
import { number } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'

const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const onClick = (i) => updateKnob('activeKey', 'number', i)

storiesOf('COMPONENTS|Controls/NavBar', module)
  .add('Default', () => {
    const activeKey = number('activeKey', 0)

    return (
      <NavBar>
        {itemList.map((item, i) => (
          <NavItem isActive={activeKey === i} onClick={() => onClick(i)}>{item}</NavItem>
        ))}
      </NavBar>
    )
  })
