import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../components/formikControl'

function Login () {
    
    const initialValues = {
        username:'',
        password:''
    }
    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        { formik => (
            <Form>
                <FormikControl
                    control='input'
                    type='text'
                    label='نام کاربری'
                    name='username'
                />
                <FormikControl
                    control='input'
                    type='password'
                    label='رمز عبور'
                    name='password'
                />
                <button type='submit'>Submit</button>
            </Form>
        )}
        </Formik>
    )
}

export default Login;