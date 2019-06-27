import React from 'react'
import { storiesOf } from '@storybook/react'

import AdSlogans from 'components/AdSlogans'

const texts = [
  {
    name: 'smart',
    text: 'По-умному стыкуем разные билеты в один',
    src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0IiA+ICAKIDxyZWN0IHg9IjAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwOSIgZmlsbD0iI2Q3ZDdkNyIgLz4KIDxsaW5lIHgxPSIwIiB5MT0iNTAiIHgyPSIyMDAiIHkyPSIxNjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz4KIDxsaW5lIHgxPSIwIiB5MT0iMTYwIiB4Mj0iMjkwIiB5Mj0iMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiAvPgo8L3N2Zz4gIA==',
  },
  {
    name: 'flights',
    text: 'Уже более 10 000 человек летает с нами каждый день',
    src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0IiA+ICAKIDxyZWN0IHg9IjAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwOSIgZmlsbD0iI2Q3ZDdkNyIgLz4KIDxsaW5lIHgxPSIwIiB5MT0iNTAiIHgyPSIyMDAiIHkyPSIxNjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz4KIDxsaW5lIHgxPSIwIiB5MT0iMTYwIiB4Mj0iMjkwIiB5Mj0iMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiAvPgo8L3N2Zz4gIA==',
  },
  {
    name: 'support',
    text: 'Оперативная связь со службой заботы о клиентах 24/7',
    src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0IiA+ICAKIDxyZWN0IHg9IjAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwOSIgZmlsbD0iI2Q3ZDdkNyIgLz4KIDxsaW5lIHgxPSIwIiB5MT0iNTAiIHgyPSIyMDAiIHkyPSIxNjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgLz4KIDxsaW5lIHgxPSIwIiB5MT0iMTYwIiB4Mj0iMjkwIiB5Mj0iMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiAvPgo8L3N2Zz4gIA==',
  },
]

storiesOf('COMPONENTS|Controls/AdSlogans', module)
  .add('Default', () => (
    <AdSlogans
      slogans={texts}
    />
  ))
