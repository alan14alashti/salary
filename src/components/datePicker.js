import React from 'react'
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { Field, ErrorMessage, useFormikContext } from 'formik'
import TextError from './textError'
import { useState } from 'react';

function DatePickerr (props) {
    const { label, name, calendarPopperPosition, ...rest } = props
    const formik = useFormikContext();
    const field = formik.getFieldProps(name);
    const renderCustomInput = ({ ref }) => (
        
        <div>
            <input
                name={name}
                readOnly
                ref={ref} // necessary
                placeholder="انتخاب کنید ... "
                value={field.value ? `${field.value.year}/${field.value.month}/${field.value.day}` : null}
                className='w-100'
            />
        </div>
    )
    const [selectedDay, setSelectedDay] = useState("");
    return (
        <div className='form-item-container'>
            {label?
                <label htmlFor={name} >{label} <i class="m-2 fas fa-calendar-alt"></i></label>:
                null
            }
            <Field name={name}>
                {({ form }) => {
                
                return (
                    <DatePicker
                        calendarPopperPosition={calendarPopperPosition ? calendarPopperPosition : 'top'}
                        renderInput={renderCustomInput}
                        value={field.value}
                        onChange={value => formik.setFieldValue(name, value)}
                        shouldHighlightWeekends
                        locale="fa"
                    />
                )
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default DatePickerr;