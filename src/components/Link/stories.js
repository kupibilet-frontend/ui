import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom'
import updateKnob from 'storybook/updateKnob'

import Icon from 'components/Icon'
import Link from 'components/Link'

const onToggle = () => {
  updateKnob('rotate', 'boolean', !boolean('rotate', false))
}

export const aLink = () => (
  // eslint-disable-next-line no-script-url
  <Link href="javascript:void(0)">
    I will click you
  </Link>
)

aLink.story = {
  name: '<a> Link',
}

export const spanLink = () => (
  <Link>
    Span link
  </Link>
)

spanLink.story = {
  name: '<span> Link',
}

export const divLink = () => (
  <Link as="div">
    Div link
  </Link>
)

divLink.story = {
  name: '<div> Link',
}

const StyledLink = styled(Link)`
  color: red;
`

export const routerLink = () => (
  <Router>
    <StyledLink as={RouterLink} to="/">
      Router Link
    </StyledLink>
  </Router>
)

routerLink.story = {
  name: 'Router Link',
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
