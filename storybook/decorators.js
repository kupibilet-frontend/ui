import React from 'react'
import initIcons from '@kupibilet/icons'
import ThemeProvider from '../src/components/ThemeProvider'

export const ThemeDecorator = (story) => {
  initIcons()

  return (
    <ThemeProvider>
      {story()}
    </ThemeProvider>
  )
}


export const IconsDecorator = (story) => (
  <div>
    {story()}
    <div
      dangerouslySetInnerHTML={{ __html: initIcons() }}
      style={{
        display: 'none',
      }}
    />
  </div>
)
