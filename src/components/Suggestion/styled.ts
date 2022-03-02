import styled, { css } from 'styled-components'

type TSuggestionContainerProps = {
  isHighlighted?: boolean;
  title: string;
}

export const SuggestionContainer = styled.div<TSuggestionContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
  min-height: 30px;

  cursor: pointer;
  color: ${({ theme }) => theme.color.text600};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted
    ? theme.color.colorBgPrimaryHover
    : theme.color.background
  )};

  &:hover {
    background: ${({ theme }) => theme.color.colorBgPrimaryHover};
    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.text600};
    }
    &::after {
      background: linear-gradient(to left, ${({ theme }) => theme.color.colorBgPrimaryHover} 25%, transparent 0%);
    }
  }
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    right: 0;
    width: 24px;
    background: linear-gradient(to left,
      ${({ theme, isHighlighted }) => (isHighlighted
    ? theme.color.colorBgPrimaryHover
    : theme.color.background
  )} 25%, transparent 0%);
  }
`
export const SuggestionIcon = styled.div`
  width: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SuggestionText = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;

${({ theme }) => css`
  @media ${theme.queries.isMobile} {
    font-size: 14px;
    line-height: 20px;
  }
`}
`
