import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { FluidContainer, FluidSection, Aside, SingleFluidSection } from './index'

const MainContent = () => (
  <div
    style={{
      background: 'rgba(35, 194, 86, .4)',
      height: 140,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Main content
  </div>
)

const AsideContent = () => (
  <div
    style={{
      height: 140,
      background: 'rgba(230, 73, 38, .4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Sidebar
  </div>
)

storiesOf('Fluid layout', module)
  .addDecorator((story) => (
    <div style={{ width: '100vw' }}>
      { story() }
    </div>
  ))
  .addWithInfo(
    'Two columns',
    '<Aside> всегда должен быть первым дочерним блоком <FluidContainer>',
    () => (
      <FluidContainer>
        <Aside>
          <AsideContent />
        </Aside>
        <FluidSection>
          <MainContent />
        </FluidSection>
      </FluidContainer>
    ),
  )
  .addWithInfo('Single column', () => (
    <SingleFluidSection>
      <MainContent />
    </SingleFluidSection>
  ))
