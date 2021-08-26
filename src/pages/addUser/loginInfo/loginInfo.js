import { Input ,Select } from '../../../utils/input'
import { useState } from 'react'
import { useListOfRoles } from '../../../hooks'


const LoginInfo = ({formState, moreInfoHandler, commonInfoHandler}) => {
    const [pass, setPass] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [message, setMessage] = useState('')
    const { isLoading, error, data } = useListOfRoles()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const isLoginHandler = (e) => {
        setIsLogin(e.target.checked)
        commonInfoHandler(e.target.name, e.target.checked)
    }
    const roles = []
    data.data.map((item) => {
        roles.push({
            value: item.id,
            title: item.roleName
        })
    })
    const passwordHandler = (e) => {
        commonInfoHandler(e.target.name, e.target.value)
        // if(e.target.value === pass) {
        //     commonInfoHandler(e.target.name, e.target.value, true)
        // }
        // else {
        //     commonInfoHandler(e.target.name, e.target.value, false)
        //     setMessage("password does not match")
        // }
    }
    const passwordConfirmHandler = (e) => {
        if(e.target.value != formState.password) {
            setMessage("password does not match")
        }
    }
    return (
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10  row row-cols-1 g-2">
            <div className="col">
                <label className="mx-2" htmlFor="isLogin"> اجازه ورود به سیستم </label> 
                <input onChange={isLoginHandler} checked={isLogin} type="checkbox" id="isLogin" name="isLogin" />
            </div>
            <div className="col">
                <Input
                    value={formState.userName}
                    required={isLogin}
                    label="نام کاربری"
                    changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                    id="userName"
                    name="userName"
                    type="text"
                />
            </div>
            <div className="col">
                <Input
                    value={formState.password}
                    required={isLogin}
                    label="کلمه رمز"
                    changeHandler={passwordHandler}
                    id="password"
                    name="password"
                    type="password"
                />
            </div>
            <div className="col">
                <Input
                    required={isLogin}
                    label="تکرار کلمه رمز"
                    changeHandler={passwordConfirmHandler}
                    id="passwordB"
                    name="passwordB"
                    type="password"
                />
                <span>{message}</span>
            </div>
            <div className="col">
                <Select
                    value={formState.roleId}
                    options={roles}
                    defaultOpt="انتخاب کنید"
                    required="true"
                    label=" نقش "
                    changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                    id="roleId"
                    name="roleId"
                />
            </div>
        </div>
    );
}
export default LoginInfo;