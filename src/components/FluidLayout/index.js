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
  `}
`

FluidContainer.displayName = 'FluidContainer'

const FluidSection = styled.div`
  flex-grow: 1;
  max-width: 870px;

  ${media.handheld`
    max-width: none;
    width: 100%;
  `}
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
  `}

  ${({ beforeSection }) => beforeSection && 'order: 0;'}
`
Aside.displayName = 'Aside'

const CONTAINER_MARGIN_HANDHELD = 18

const SingleFluidSection = styled.div`
  margin: 0 auto;
  max-width: 966px;
  width: 100%;

  ${media.handheld`
    width: calc(100% - ${2 * CONTAINER_MARGIN_HANDHELD}px);
  `}

  /*
   * In the past responsiveness was broken by purpose at resolutions 1000px - 1199px,
   * see PR on GitHub: https://github.com/kupibilet-frontend/ui/pull/70
   * At resolutions 1000px - 1199px (and more) there were desktop version of the app,
   * but desktop version has 'min-width: 1200px' rule, so there was horizontal scroll
   *
   * Now we increase breakpoint for desktop to 1200px, but on resolutions
   * more than 1000px it is not centered, so we should write this little hack
   * (I've used !important because styles were overwritten by some old .responsive class)
   */
  && {
    @media screen and (min-width: 1000px) {
      width: 100%;
      margin: 0 auto;
    }
  }
`

SingleFluidSection.displayName = 'SingleFluidSection'

export { FluidContainer, FluidSection, Aside, SingleFluidSection }
