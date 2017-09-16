import React from 'react'
import initIcons from '@kupibilet/icons'

export default (story) => (
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
