import React from 'react'
import { Field, reduxForm } from 'redux-form'

export default (story, context) => {
  const Connected = reduxForm({
    form: context.kind,
    // updating knobs will recreate entire story
    destroyOnUnmount: false,
  })(story)

  return <Connected />
}
