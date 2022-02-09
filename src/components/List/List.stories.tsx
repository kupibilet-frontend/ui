import React from 'react'
import { List, ListItem } from './List'

export function DefaultList():JSX.Element {
  return (
    <List>
      <ListItem>Мы рады всем карточкам и банкам</ListItem>
      <ListItem>Гарантируем быстрый возврат средств</ListItem>
      <ListItem>Не будет проблем с двойным списанием авиакомпании</ListItem>
      <ListItem>Цена билета</ListItem>
    </List>
  )
}

export default {
  title: 'List',
  component: List,
}
