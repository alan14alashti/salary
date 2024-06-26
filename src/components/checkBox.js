import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './textError'

function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-item-container'>
        {label?
            <label htmlFor={name} >{label}</label>:
            null
        }
        <Field name={name}>
            {({ field }) => {
                console.log(field)
            return options.map(option => {
                return (
                <React.Fragment key={option.key}>
                    <input
                        type='checkbox'
                        id={option.value}
                        {...field}
                        {...rest}
                        value={option.value}
                        checked={field.value == option.value}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
                )
            })
            }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CheckboxGroup