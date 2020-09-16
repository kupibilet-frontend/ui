import React from 'react'
import ThemeProvider from 'components/ThemeProvider'

export default (story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
)
