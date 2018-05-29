import React from 'react'
import { storiesOf } from '@storybook/react'
import Navbar from 'components/Navbar'
import { Item } from 'components/Navbar/styled'

const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class Wrap extends React.Component {
  state = {
    isActive: 0,
  }

  onClick = (i) => { this.setState({ isActive: i }) }

  render() {
    return (
      <Navbar>
        {itemList.map((item, i) => (
          <Item isActive={this.state.isActive === i} onClick={() => this.onClick(i)}>{item}</Item>
        ))}
      </Navbar>
    )
  }
}

storiesOf('Blocks', module)
  .addWithInfo('Navbar', () => <Wrap />)
