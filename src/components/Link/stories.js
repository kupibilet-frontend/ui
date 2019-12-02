import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'

import Icon from 'components/Icon'
import Link from 'components/Link'

const onToggle = () => {
  updateKnob('rotate', 'boolean', !boolean('rotate', false))
}

export const aLink = () => {
  return (
    // eslint-disable-next-line no-script-url
    <Link href="javascript:void(0)">
      I will click you
    </Link>
  )
}

aLink.story = {
  name: '<a> Link',
}

export const spanLink = () => (
  <Link>
    Span link
  </Link>
)
spanLink.story = {
  name: '<span> link',
}

export const withIconLink = () => (
  <Link
    onClick={onToggle}
    rightIcon={
      <Icon name="angle" inheritColor rotate={boolean('rotate', false)} size="normal" />
    }
  >
    Dropdown link
  </Link>
)
withIconLink.story = {
  name: 'Link with Icon',
}

export default {
  title: 'COMPONENTS|Controls/Link',
  parameters: {
    component: Link,
    componentSubtitle: `import '@kupibilet/ui/components/Link'`,
  },
}
