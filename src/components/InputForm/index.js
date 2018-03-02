// @flow
import React, { Component } from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import type { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form'
import ControlsGroup from 'components/ControlsGroup'
import { StyledInputWrapper, StyledError, SuccessMessage, Wrapper, StyledButton } from './styled'
import { InnerInput, IconWrap } from 'components/Input'
import { NotMobileOnly, MobileOnly} from 'components/ResponsiveOnly'


type InputProps = {
  active?: boolean,
  error?: boolean | null | string,
  success?: boolean,
  disabled?: boolean,
  placeholder?: string,
  value?: string,
  neighboringInGroup?: null | 'left' | 'right' | 'both',
  onBlur?: Function,
  onFocus?: Function,
  icon?: React$Element<*>,
  handleLeftIconPress?: Function,
  handleRightIconPress?: Function,
  innerRef?: Function,
}

type FormProps = {
  inputName: string,
  buttonText: string,
  className: string,
  successMessage?: boolean | null | string,
  normalize?: Function,
  onSubmit: Function,
  validate?: Function,
}

type State = {
  isActive: boolean,
}

type FieldProps = {
  input: fieldInputPropTypes,
  meta: fieldMetaPropTypes,
}

class Input extends Component<InputProps, State> {
  state = {
    isActive: false,
  }

  handleFocus = (onFocus, e: Event) => {
    if (this.props.onFocus) this.props.onFocus(e)
    if (onFocus) onFocus(e)
    this.setState({
      isActive: true,
    })
  }

  handleBlur = (onBlur, e: Event) => {
    if (this.props.onBlur) this.props.onBlur(e)
    if (onBlur) onBlur(e)
    this.setState({
      isActive: false,
    })
  }

  innerRef(node) {
    const { innerRef } = this.props
    this.innerInput = node
    if (innerRef) {
      this.props.innerRef(node)
    }
  }

  renderInputElement = () => {
    const {
      disabled,
      icon,
      placeholder,
      error,
      success,
      ...props
    } = this.props

    return (
      <InnerInput
        size="large"
        disabled={disabled}
        error={error}
        success={success}
        onFocus={this.handleFocus.bind(null, null)}
        onBlur={this.handleBlur.bind(null, null)}
        innerRef={(el) => this.innerRef(el)}
        leftIcon={icon}
        placeholder={placeholder}
        {...props}
      />
    )
  }

  render() {
    const {
      active,
      disabled,
      leftIcon,
      handleLeftIconPress,
      error,
      success,
      ...props
    } = this.props

    const leftIconsArray = React.Children.toArray(leftIcon)

    return (
      <StyledInputWrapper
        active={active || this.state.isActive}
        size="large"
        success={success}
        error={error}
        disabled={disabled}
        {...props}
      >
        {
          leftIcon ? (
            <IconWrap
              onMouseDown={handleLeftIconPress
                ? (e) => handleLeftIconPress(this.innerInput, e)
                : this.onIconPress
              }
              size="large"
              isGroup={leftIconsArray.length > 1}
              left
            >
              {leftIconsArray}
            </IconWrap>
          ) : (
            null
          )
        }
        {this.renderInputElement()}
        {error && <StyledError size="large">
          {error}
        </StyledError>
        }
      </StyledInputWrapper>
    )
  }
}

const RFInput = (props: FieldProps) => {
  const { input, meta } = props
  return (
    <Input
      {...input}
      {...meta}
      {...props}
      error={meta.touched && meta.error}
      success={meta.touched && meta.valid}
    />
  )
}

const renderInput = ({ input, meta, ...props }: FieldProps) => <RFInput input={input} meta={meta} {...props} />

class InputForm extends Component<void, FormProps> {
  static defaultProps = {
    buttonText: 'Отправить',
  }

  render() {
    const {
      buttonText,
      successMessage,
      className,
      inputName,
      normalize,
      onSubmit,
      ...props
    } = this.props
    return (
      <Wrapper className={className}>
        <NotMobileOnly>
          <Form onSubmit={onSubmit}>
            <ControlsGroup>
              <Field name={inputName} component={renderInput} normalize={normalize} {...props} />
              <StyledButton type="submit" size="large">{buttonText}</StyledButton>
            </ControlsGroup>
          </Form>
        </NotMobileOnly>
        <MobileOnly>
          <Field name={inputName} component={renderInput} normalize={normalize} {...props} />
          <StyledButton type="submit" size="large">{buttonText}</StyledButton>
        </MobileOnly>
        {successMessage && <SuccessMessage>
          {successMessage}
        </SuccessMessage>}
      </Wrapper>
    )
  }
}

const withReduxForm = compose(
  connect((state, props) => ({
    form: props.formName,
    validate: props.validate,
    touchOnBlur: true,
    touchOnChange: false,
  })),
  reduxForm())


export default withReduxForm(InputForm)
