export type TNeighboringInGroup = null | 'left' | 'right' | 'both'

export type TIconMouseEvent = React.MouseEvent<Element, MouseEvent>

type TIconPressHandlerProp = ((
  element: HTMLElement | React.RefObject<HTMLElement>,
  event: TIconMouseEvent
) => void) | null

export type TInputSize = 'medium'

export type TInputProps<THTMLElement = HTMLInputElement | HTMLTextAreaElement> = {
  onChange?: (event: React.ChangeEvent<THTMLElement>) => void,
  value?: string,
  name?: string,
  type?: string,
  active?: boolean,
  error?: React.ReactNode,
  disabled?: boolean,
  placeholder?: string,
  neighboringInGroup?: TNeighboringInGroup,
  onBlur?: (event: React.FocusEvent<THTMLElement>) => void,
  onFocus?: (event: React.FocusEvent<THTMLElement>) => void,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  handleLeftIconPress?: TIconPressHandlerProp,
  handleRightIconPress?: TIconPressHandlerProp,
  innerRef?: React.RefObject<THTMLElement> | null,
  children?: React.ReactElement[] | null,
  isTextarea?: boolean,
  rows?: number,
  autoComplete?: 'no' | null,
  className?: string | null,
  readOnly?: boolean,
  'data-test'?: string | null,
  helperText?: React.ReactNode,
  size?: TInputSize,
}

export type TNormalizedProps<T> = Required<TInputProps<T>>
