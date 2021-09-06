import FormikControl from '../../../components/formikControl'
import { useState } from 'react'
import { useListOfRoles } from '../../../hooks'


const LoginInfo = () => {
    const [pass, setPass] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [message, setMessage] = useState('')
    const { isLoading, error, data } = useListOfRoles()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const roles = []
    data.data.map((item) => {
        roles.push({
            value: item.id,
            title: item.roleName
        })
    })
    return (
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10  row row-cols-1 g-2">
            <div className="col">
                <FormikControl
                    control='input'
                    type='checkbox'
                    label=' اجازه ورود به سیستم '
                    name='isLogin'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='text'
                    label=' نام کاربری '
                    name='userName'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='password'
                    label=' کلمه عبور '
                    name='password'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='password'
                    label= ' تکرار کلمه عبور '
                    name='passwordConfirm'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='select'
                    options={roles}
                    label=' نقش '
                    name='roleId'
                />
            </div>
        </div>
    );
}
export default LoginInfo;