import React from 'react'
import { Meta, Story } from '@storybook/react'
import Typography from '.'


const TypographyPreview: Story = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      width: '100vw',
      alignItems: 'center',
      fontFamily: 'KB Suisse Intl',
      color: 'black',
    }}
  >
    <Typography variant="hero">
      hero: Пример заголовка headline-hero-default
    </Typography>

    <Typography variant="h1">
      h1: Пример заголовка headline-1-default
    </Typography>

    <Typography variant="h2">
      h2: Пример заголовка headline-2-default
    </Typography>

    <Typography variant="h3">
      h3: Пример заголовка headline-3-default
    </Typography>

    <Typography variant="h4">
      h4: Пример заголовка headline-4-default
    </Typography>

    <Typography variant="h5">
      h5: Пример заголовка headline-5-default
    </Typography>

    <Typography variant="accent">
      accent: Пример текста text-accent-normal
    </Typography>

    <Typography variant="caption">
      caption: Пример текста Text-Caption-Normal
    </Typography>

    <Typography 
      variant="caption"
      isBold
    >
      caption: Пример текста Text-Caption-Bold
    </Typography>

    <Typography variant="description">
      description: Пример текста
    </Typography>

    <Typography variant="large">
      large: Пример текста Text-Large-Normal
    </Typography>

    <Typography
      variant="large"
      isBold
    >
      large: Пример текста Text-Large-Bold
    </Typography>

    <Typography variant="medium">
      medium: Пример текста Text-Medium-Normal
    </Typography>

    <Typography
      variant="medium"
      isBold
    >
      medium: Пример текста Text-Medium-Bold
    </Typography>

    <Typography variant="small">
      small: Пример текста Text-Small-Normal
    </Typography>

    <Typography
      variant="small"
      isBold
    >
      small: Пример текста Text-Small-Bold
    </Typography>
  </div>
)

export default {
  title: 'Typography',
} as Meta

export { TypographyPreview }
