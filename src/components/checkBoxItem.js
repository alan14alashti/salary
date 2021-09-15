import React from 'react'
import { Field, ErrorMessage, FastField } from 'formik'
import TextError from './textError'

function CheckBoxItem (props) {
    const { label, name,...rest} = props
    return (
            <label className='mt-2 d-flex justify-content-evenly align-items-center' htmlFor={name} >
                <span className='fs-6'>{label}</span>
                <Field type='checkbox' id={name} name={name} {...rest} />
            </label>
    )
}

export default CheckBoxItem;