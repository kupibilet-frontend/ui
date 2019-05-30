import React from 'react'
import { storiesOf } from '@storybook/react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import Text from './Text'
import TextSmall from './TextSmall'
import TextLarge from './TextLarge'
import UppercaseLarge from './UppercaseLarge'
import Uppercase from './Uppercase'
import Caption from './Caption'
import { List, ListItem } from './List'
import Price from './Price'

const headers = (
  <div>
    <H1>H1: Пересадка 22ч 20 мин</H1>
    <H2>H2: Пересадка 22ч 20 мин</H2>
    <H3>H3: Пересадка 22ч 20 мин</H3>
    <H4>H4: Пересадка 22ч 20 мин</H4>
    <H5>H5: Пересадка 22ч 20 мин</H5>
    <H6>H6: Пересадка 22ч 20 мин</H6>
  </div>
)

const texts = (
  <div>
    <div>
      <TextLarge>TextLarge: Пересадка 22ч 20 мин</TextLarge>
    </div>
    <div>
      <Text>Text: Пересадка 22ч 20 мин</Text>
    </div>
    <div>
      <TextSmall>TextSmall: Пересадка 22ч 20 мин</TextSmall>
    </div>
    <div>
      <Caption>Caption: Пересадка 22ч 20 мин</Caption>
    </div>
    <div>
      <UppercaseLarge>UppercaseLarge: Пересадка 22ч 20 мин</UppercaseLarge>
    </div>
    <div>
      <Uppercase>Uppercase: Пересадка 22ч 20 мин</Uppercase>
    </div>
    <div>
      Price: <Price>12 345</Price>
    </div>
  </div>
)

storiesOf('Utils', module)
  .add('Typography', () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vw',
        alignItems: 'center',
      }}
    >
      { headers }
      { texts }
    </div>
  ))
  .add('List', () => (
    <List style={{ width: '284px' }}>
      <ListItem>Мы рады всем карточкам и банкам</ListItem>
      <ListItem>Гарантируем быстрый возврат средств</ListItem>
      <ListItem>Не будет проблем с двойным списанием авиакомпании</ListItem>
      <ListItem>Цена билета</ListItem>
    </List>
  ))
