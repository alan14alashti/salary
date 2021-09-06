import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './textError'

function Select (props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-item-container'>
            {label?
                <label htmlFor={name} >{label}</label>:
                null
            }
            <Field as='select' id={name} name={name} {...rest}>
                {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                )
                })}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Select