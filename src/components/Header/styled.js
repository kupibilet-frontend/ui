import styled from 'styled-components'
import mq from 'utils/media-queries'
import Link from 'components/Link'

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
`

export const HeaderInner = styled.div`
  max-width: 1178px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  ${mq.handheld`
    padding: 0 18px;
  `}
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

export const RightSide = styled.div``

export const Logo = styled.div``

export const LogoLink = Link.extend`
  height: 24px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMyIiBoZWlnaHQ9IjI0Ij48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTS40OTkuNTFoMi41djIuNWgtMi41Vi41MXoiLz48cGF0aCBpZD0iYyIgZD0iTTUuODQzLjc1NFY3Ljg3SC41NTVWLjc1NGg1LjI4OHoiLz48cGF0aCBpZD0iZSIgZD0iTTAgMjMuNDkxaDEzMC44NDNWMUgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC4yNSAtLjI0KSI+PHBhdGggZmlsbD0iIzAwOEFFNiIgZD0iTTExNC45OTkgMjIuMjRhMS4yNSAxLjI1IDAgMSAxLTIuNTAxIDAgMS4yNSAxLjI1IDAgMCAxIDIuNSAwem0wLTMuOTk4YTEuMjUgMS4yNSAwIDEgMC0yLjUwMS4wMDEgMS4yNSAxLjI1IDAgMCAwIDIuNSAwbTAtMy45OThhMS4yNSAxLjI1IDAgMSAwLTIuNSAwIDEuMjUgMS4yNSAwIDAgMCAyLjUgMG0wLTMuOTk5YTEuMjUgMS4yNSAwIDEgMC0yLjUuMDAxIDEuMjUgMS4yNSAwIDAgMCAyLjUgMG0wLTMuOTk5YTEuMjUgMS4yNSAwIDEgMC0yLjUuMDAxIDEuMjUgMS4yNSAwIDAgMCAyLjUgMCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMiAuNDkpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjMDA4QUU2IiBkPSJNMi45OTkgMS43NmExLjI1IDEuMjUgMCAxIDAtMi41MDEgMCAxLjI1IDEuMjUgMCAwIDAgMi41IDAiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZmlsbD0iIzAwOEFFNiIgZD0iTTEyMi4wNjcgNy41MTljLjk1IDAgMS40NzQtLjQwNiAxLjQ3NC0xLjE5NyAwLS44MDEtLjUyNS0xLjA4LTEuNDc0LTEuMDhoLS45OTRWNy41MmguOTk0em0tMi4yMzMtMy4yN2gyLjM2YzEuNDUzIDAgMi41NjMuNTE0IDIuNTYzIDIuMDczIDAgMS4wNjgtLjU1NSAxLjcxLTEuMzg4IDEuOTk4bDEuNjY4IDIuOTE3aC0xLjM5bC0xLjUwNi0yLjczNWgtMS4wNjl2Mi43MzVoLTEuMjM5VjQuMjQ5eiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNSAzLjQ5KSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZmlsbD0iIzAwOEFFNiIgZD0iTS41NTUgNC42NzVWLjc1NWgxLjI0VjQuNzdjMCAxLjUxOC41NjUgMi4wMiAxLjQxIDIuMDIuODU0IDAgMS40NTItLjUwMiAxLjQ1Mi0yLjAyVi43NTRoMS4xODZ2My45MjFjMCAyLjI5Ny0xLjAxNCAzLjE5NS0yLjYzOSAzLjE5NS0xLjYxMyAwLTIuNjQ5LS44OTgtMi42NDktMy4xOTUiIG1hc2s9InVybCgjZCkiLz48L2c+PHBhdGggZmlsbD0iIzAwOEFFNiIgZD0iTTkuNDg4IDIwLjI0MWwtNC40MzYtNy43MDYtMi40NDcgMi45OTd2NC43MDlIMFY0LjI0OWgyLjYwNXY3LjI3OGguMjQ5bDUuNzYtNy4yNzhoMi45NjFsLTQuODkzIDYuMjA5IDUuNzYyIDkuNzgzek0yMC4yODcgMjAuNDkzYy0xLjkyIDAtMy4zOC0uNTYzLTQuMzgtMS42NzMtMS4wOS0xLjIxLTEuNjIyLTMuMTA1LTEuNjIyLTUuNjNWNC4yNWgyLjYwNXY5LjE2MmMwIDMuMjA1IDEuMTA4IDQuNzYzIDMuMzY1IDQuNzYzIDIuMzIzIDAgMy40NjMtMS41NTggMy40NjMtNC43NjNWNC4yNWgyLjYwNXY4Ljk0MWMwIDIuNTMxLS41NTUgNC40MjUtMS42MzEgNS42My0uOTkxIDEuMTEtMi40OCAxLjY3My00LjQwNSAxLjY3M20xMi4yMzUtOC4zMzhoMi4xOGMyLjQ1NyAwIDMuNjUxLTEuMDAzIDMuNjUxLTMuMDQ0IDAtMS45NTItMS4xMjItMi43OTYtMy43NS0yLjc5NmgtMi4wODF2NS44NHptLTIuNjk1IDguMDg2VjQuMjQ5aDQuOTk5YzEuOTE0IDAgMy40MDIuMzM5IDQuNDIxIDEuMDUgMS4xNTcuODA4IDEuNzQ0IDIuMDY2IDEuNzQ0IDMuODAyIDAgMy4yMjYtMi4yNjcgNS4xMi02LjA2NiA1LjEyaC0yLjQwM3Y2LjAyaC0yLjY5NXoiLz48bWFzayBpZD0iZiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjZSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjMDA4QUU2IiBtYXNrPSJ1cmwoI2YpIiBkPSJNNDQuMTExIDIwLjI0MWgyLjY5NVY0LjI1aC0yLjY5NXpNNTMuMzY1IDEwLjg5N2gyLjEwNWMyLjczIDAgMy4zMDQtMS4zMDcgMy4zMDQtMi4zODYgMC0xLjU2Ni0xLjAwNC0yLjI4Ni0zLjI1NS0yLjI4NmgtMi4xNTR2NC42NzJ6bTAgNy4yNzdoMi40NzZjMi40ODUgMCAzLjc5OC0uOTU2IDMuNzk4LTIuNzYgMC0xLjcwOS0xLjI0Mi0yLjU0LTMuNzk4LTIuNTRoLTIuNDc2djUuM3pNNTAuNjcgMjAuMjRWNC4yNWg1LjA0N2MzLjc4IDAgNS42OTYgMS4yODYgNS42OTYgMy44NjggMCAxLjU5LS44NiAyLjk1Ni0yLjE3IDMuNDE2bC0uMDM4LjAxdi4yMzRsLjA0OS4wMTZjMS45Mi40MjcgMy4wMSAxLjc5MiAzLjAxIDMuNzQ1IDAgMS41MjEtLjU4NyAyLjcyNS0xLjczNSAzLjUzNy0xLjA1OC43NDctMi41OCAxLjE2NC00LjM5MiAxLjE2NEg1MC42N3pNNjUuMzE0IDIwLjI0MWgyLjY5NVY0LjI1aC0yLjY5NXpNNzIuMzIxIDIwLjI0MVY0LjI0OWgyLjYwNXYxMy43NDZoNi43Mzh2Mi4yNDZ6TTg0LjE4IDIwLjI0MVY0LjI0OWg5LjYxM3YyLjE1N2gtNi45MTh2NC4zMTJoNS44NHYyLjI0NmgtNS44NHY1LjAzMWg3LjE4N3YyLjI0NnpNMTAxLjI1IDIwLjI0MVY2LjQwNmgtNC42NzJWNC4yNDloMTIuMDM5djIuMTU3aC00LjY3MnYxMy44MzV6Ii8+PC9nPjwvc3ZnPg==');
  display: block;
  width: 132px;
  backface-visibility: hidden;
  &:hover {
    opacity: 0.8;
    transition: 0.15s ease-out;
  }
`
