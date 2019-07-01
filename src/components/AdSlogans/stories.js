import React from 'react'
import { storiesOf } from '@storybook/react'

import AdSlogans from 'components/AdSlogans'

const IMG = 'data:image/svg+xml,%3C%3Fxml version=\'1.0\' encoding=\'UTF-8\'%3F%3E%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 200 200\' preserveAspectRatio=\'xMinYMin meet\' %3E%3Crect x=\'0\' y=\'50\' width=\'200\' height=\'109\' fill=\'%23dedede\' /%3E%3Cline x1=\'0\' y1=\'50\' x2=\'200\' y2=\'160\' stroke=\'%23b3b3b3\' stroke-width=\'2\' /%3E%3Cline x1=\'0\' y1=\'160\' x2=\'290\' y2=\'0\' stroke=\'%23b3b3b3\' stroke-width=\'2\' /%3E%3C/svg%3E'

const TEXTS = [
  {
    name: 'smart',
    text: 'По-умному стыкуем разные билеты в один',
    src: IMG,
  },
  {
    name: 'flights',
    text: 'Уже более 10 000 человек летает с нами каждый день',
    src: IMG,
  },
  {
    name: 'support',
    text: 'Оперативная связь со службой заботы о клиентах 24/7',
    src: IMG,
  },
]

storiesOf('COMPONENTS|Controls/AdSlogans', module)
  .add('Default', () => (
    <AdSlogans
      slogans={TEXTS}
    />
  ))
