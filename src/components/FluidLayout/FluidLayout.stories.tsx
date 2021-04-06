import React from 'react'
import styled from 'styled-components'
import { FluidContainer, FluidSection, Aside, SingleFluidSection } from 'components/FluidLayout'


const StyledMainContent = styled.div`
  background: rgba(35, 194, 86, .4);
  height: 140px;
  display: flex;
  justifyContent: center;
  alignItems: center;
`

const StyledAsideContent = styled.div`
  height: 140px;
  background: rgba(230, 73, 38, .4);
  display: flex;
  justifyContent: center;
  alignItems: center;
`

export function TwoColumns(): JSX.Element {
  return (
    <FluidContainer>
      <FluidSection>
        <StyledMainContent>
            Main content
        </StyledMainContent>
      </FluidSection>
      <Aside>
        <StyledAsideContent>
            Sidebar
        </StyledAsideContent>
      </Aside>
    </FluidContainer>
  )
}

export function OneColumn(): JSX.Element {
  return (
    <SingleFluidSection>
      <StyledMainContent>
        Main content
      </StyledMainContent>
    </SingleFluidSection>
  )
}

export default {
  title: 'FluidLayout',
}
