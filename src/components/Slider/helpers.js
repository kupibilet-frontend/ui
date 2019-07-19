export const getHandleBgColor = (props) => {
  const min = props['aria-valuemin']
  const max = props['aria-valuemax']
  const value = props['aria-valuenow']
  const { theme } = props

  return (value === min || value === max)
    ? theme.color.miscDark
    : theme.color.primaryDarkest
}

export const getBarColor = ({ isHighlighted, theme }) => (
  isHighlighted
    ? theme.color.secondaryLight
    : theme.color.miscLighter
)
