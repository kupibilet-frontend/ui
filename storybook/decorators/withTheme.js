import React from 'react'
import ThemeProvider from 'components/ThemeProvider'

export default (story) => (
  <ThemeProvider className="responsive">
    {story()}
  </ThemeProvider>
)
