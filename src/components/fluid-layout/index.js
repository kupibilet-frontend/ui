import styled from 'styled-components'

const FluidContainer = styled.div`
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media(max-width: 999px) {
    margin: 0;
    width: auto;
    flex-direction: column;
  }
`
FluidContainer.displayName = 'FluidContainer'

const FluidSection = styled.div`
  flex-grow: 1;
  max-width: 870px;

  @media(max-width: 999px) {
    max-width: none;
    width: 100%;
  }
`
FluidSection.displayName = 'FluidSection'

const Aside = styled.div`
  width: 252px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 42px;

  @media(max-width: 999px) {
    width: auto;
    margin-left: 0;
  }

  ${({ top }) => top && 'order: 0;' }
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
