import styled from 'styled-components'

export const WeekdaysWrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  justify-content: center;
  padding: 12px 36px 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Weekday = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  color: ${({ theme }) => theme.color.textLight};
  min-width: 42px;
  max-width: 42px;
  width: 14.3%;
`
