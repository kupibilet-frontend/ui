import styled from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import { shadowSmall } from 'utils/shadows'

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 3px;
  left: 0;
  right: 0;
  padding: 18px 12px;
  background: ${({ theme }) => theme.color.background};
  ${shadowSmall}
  ${borderRadiusSmall.all}
  z-index: 10;

  margin-bottom: 18px;
`

export { DropdownWrapper, DropdownContent }
