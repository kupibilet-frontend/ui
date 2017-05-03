import styled from 'styled-components'

export const Day = styled.span``

export const AvgCost = styled.div`
  font-size: 11px;
  color: ${({ isCheap, theme }) => (isCheap ? theme.color.success : theme.color.textLight)};
  letter-spacing: .5px;
  line-height: 1;
  text-align: center;

  .CalendarDay:not(.CalendarDay--blocked):hover &,
  .CalendarDay--selected-start &,
  .CalendarDay--selected-end & {
    color: ${({ theme }) => theme.color.background}
  }
`
