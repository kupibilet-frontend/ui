import React from 'react'
import { Meta, Story } from '@storybook/react'
import TitleHero from './TitleHero'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import TextAccent from './TextAccent'
import Text from './Text'
import TextCation from './TextCation'
import TextLarge from './TextLarge'
import TextDescription from './TextDescription'
import { List as UIList, ListItem } from './List'

const headers = (
  <div>
    <TitleHero>TitleHero: 22ч 20 мин</TitleHero>
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
      <TextAccent>TextAccent: Пересадка 22ч 20 мин</TextAccent>
    </div>
    <div>
      <TextLarge>TextLarge: Пересадка 22ч 20 мин</TextLarge>
    </div>
    <div>
      <Text>Text: Пересадка 22ч 20 мин</Text>
    </div>
    <div>
      <TextCation>TextCation: Пересадка 22ч 20 мин</TextCation>
    </div>
    <div>
      <TextDescription>TextDescription: Пересадка 22ч 20 мин</TextDescription>
    </div>
  </div>
)

const Typography: Story = () => (
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
)

const List: Story = () => (
  <UIList style={{ width: '284px' }}>
    <ListItem>Мы рады всем карточкам и банкам</ListItem>
    <ListItem>Гарантируем быстрый возврат средств</ListItem>
    <ListItem>Не будет проблем с двойным списанием авиакомпании</ListItem>
    <ListItem>Цена билета</ListItem>
  </UIList>
)

export default {
  title: 'Typography',
} as Meta

export { Typography, List }
