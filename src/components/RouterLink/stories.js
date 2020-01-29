import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import updateKnob from 'storybook/updateKnob'

import Icon from 'components/Icon'
import RouterLink from 'components/RouterLink'

const onToggle = () => {
  updateKnob('rotate', 'boolean', !boolean('rotate', false))
}

export const Link = () => (
  <Router>
    <RouterLink to="/">
      I will click you
    </RouterLink>
  </Router>
)

Link.story = {
  name: 'RouterLink',
}

const StyledLink = styled(RouterLink)`
  color: red;
`

export const StyledRouterLink = () => (
  <Router>
    <StyledLink to="/">
      Router Link
    </StyledLink>
  </Router>
)

StyledRouterLink.story = {
  name: 'StyledRouterLink',
}

export const withIconLink = () => (
  <Router>
    <RouterLink
      to="/"
      onClick={onToggle}
      rightIcon={
        <Icon name="angle" inheritColor rotate={boolean('rotate', false)} size="normal" />
      }
    >
      Dropdown link
    </RouterLink>
  </Router>
)

withIconLink.story = {
  name: 'RouterLink with Icon',
}

export default {
  title: 'COMPONENTS|Controls/RouterLink',
  parameters: {
    component: RouterLink,
    componentSubtitle: `import '@kupibilet/ui/components/RouterLink'`,
  },
}
