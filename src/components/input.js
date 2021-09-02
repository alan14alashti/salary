import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './textError'

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='d-flex flex-column'>
      <label className='m-2' htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input