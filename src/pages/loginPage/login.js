import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../components/formikControl'
import classes from './login.module.css'
import React, { useContext, useState } from "react";
import { UserContext } from "../../userContext";
import Button from "../../utils/button";
import { useMutation } from "react-query";
import useRequest from "../../components/fetchReq";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Login () {
    const [ formState, setFormState ] = useState(null)
    const initialValues = {
        username:'',
        password:''
    }
    const validationSchema = Yup.object({
        username: Yup.string().required('فیلد اجباری است'),
        password: Yup.string().required('فیلد اجباری است'),
    })
    const { user, setUser } = useContext(UserContext);
	let history = useHistory()
	const mutation = useMutation(useRequest({
        url:"api/Authenticate/login",
        method:"POST",
        body: formState
    }), {
        onSuccess: (res) => {
            const data = res.data
			setUser(res.data)
			toast.success('خوش آمدید')
			localStorage.setItem("accessToken", data.token)
			history.push(`/MainPage`);
        },
        onError: (error) => {
            toast.error('نام کاربری و یا رمز عبور شما اشتباه است')
        }
    }
    )
    
    const onSubmit = (values, onSubmitProps) => {
        setFormState(values)
		mutation.mutate() 
        onSubmitProps.setSubmitting(false)
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        { formik => (
            <Form className={classes.login_page_container}>
                <span className='fs-4'> ورود به پنل فراتکنو </span>
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
                <Button text='ورود' sty='primary' type="submit" disabled={!formik.isValid || formik.isSubmitting} />
            </Form>
        )}
        </Formik>
    )
}
export default Login;