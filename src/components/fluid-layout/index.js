import styled from 'styled-components'

const FluidContainer = styled.div`
  margin: 0 18px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media(min-width: 1000px) {
    margin: 0;
    padding: 0 18px;
    justify-content: center;
    align-items: flex-start;
  }

  @media(min-width: 1200px) {
    width: 1164px;
    margin: 0 auto;
  }
`
FluidContainer.displayName = 'FluidContainer'

const FluidSection = styled.div`
  flex-grow: 1;

  @media(min-width: 1000px) {
    order: 1;
  }

  @media(min-width: 1200px) {
    max-width: 870px;
  }
`
FluidSection.displayName = 'FluidSection'

const Aside = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;

  @media(min-width: 1000px) {
    order: 2;
    width: 252px;
    margin-left: 18px;
  }

  @media(min-width: 1200px) {
    margin-left: 42px;
  }
`
Aside.displayName = 'Aside'

const SingleFluidSection = styled.div`
  margin: 0 18px;
  max-width: 966px;

  @media(min-width: 1002px) {
    margin: 0 auto;
  }
`
SingleFluidSection.displayName = 'SingleFluidSection'

export { FluidContainer, FluidSection, Aside, SingleFluidSection }
