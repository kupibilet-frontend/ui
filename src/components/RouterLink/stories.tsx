import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
// @ts-ignore TODO: fix ts to resolve storybook dir
import updateKnob from 'storybook/updateKnob'
import { storiesOf } from '@storybook/react'
import Icon from 'components/Icon'
import RouterLink from 'components/RouterLink'
import { ICON_SIZES } from 'components/Icon/consts'

const onToggle = () => {
  updateKnob('rotate', 'boolean', !boolean('rotate', false))
}

const StyledLink = styled(RouterLink)`
  color: green;
`

storiesOf('COMPONENTS|Controls/RouterLink', module)
  .add('RouterLink', () => (
    <Router>
      <RouterLink to="/">
        I will click you
      </RouterLink>
    </Router>
  ))
  .add('StyledRouterLink', () => (
    <Router>
      <StyledLink to="/">
        Router Link
      </StyledLink>
    </Router>
  ))
  .add('RouterLink with Icon', () => (
    <Router>
      <RouterLink
        to="/"
        onClick={onToggle}
        rightIcon={
          <Icon name="angle" inheritColor rotate={boolean('rotate', false)} size={ICON_SIZES.normal} />
        }
      >
        Dropdown link
      </RouterLink>
    </Router>
  ))
