import styled from 'styled-components'

import media from 'utils/media-queries'

const FluidContainer = styled.div`
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${media.handheld`
    margin: 0;
    width: auto;
    flex-direction: column;
  `};
`

FluidContainer.displayName = 'FluidContainer'

const FluidSection = styled.div`
  flex-grow: 1;
  max-width: 870px;

  ${media.handheld`
    max-width: none;
    width: 100%;
  `};
`
FluidSection.displayName = 'FluidSection'

const Aside = styled.div`
  width: 252px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 42px;

  ${media.handheld`
    width: auto;
    margin-left: 0;
  `} ${({ beforeSection }) => beforeSection && 'order: 0;'};
`
Aside.displayName = 'Aside'

const SingleFluidSection = styled.div`
  margin: 0 auto;
  max-width: 966px;

  ${media.handheld`
    margin: 0 18px;
  `};
`

SingleFluidSection.displayName = 'SingleFluidSection'

export { FluidContainer, FluidSection, Aside, SingleFluidSection }
