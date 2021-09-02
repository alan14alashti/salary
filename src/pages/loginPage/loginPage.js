import { useState } from "react";
import classes from "./login.module.css"
import { Input } from "../../utils/input";
import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import Button from "../../utils/button";
import { useMutation } from "react-query";
import useRequest from "../../components/fetchReq";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	let history = useHistory()
	// let { path, url } = useRouteMatch();
    const [formState, setFormState] = useState({
		username: "",
    	password: ""
    })
	const [buttonDisabled, setbuttonDisabled] = useState(false)
    const inputHandler = (event) => {
        setFormState({
			...formState,
          	[event.target.name] : event.target.value
        })
    }
	const mutation = useMutation(useRequest({
        url:"api/Authenticate/login",
        method:"POST",
        body: JSON.stringify(formState)
    }), {
        onSuccess: (res) => {
            const data = res.data
			setUser(res.data)
			toast.success('خوش آمدید')
			toast.success(res.data.message)
			localStorage.setItem("accessToken", data.token)
			history.push(`/MainPage`);
        },
        onError: (error) => {
            toast.error('نام کاربری و یا رمز عبور شما اشتباه است')
        }
    }
    )
	const clickHandler = (event) => {
		event.preventDefault();
		mutation.mutate()
	}
    return (
		<form onSubmit={clickHandler} className={`${classes.login_page_container}`}>
			<h3> ورود به پنل فرا تکنو </h3>
			<Input
				required="true"
				label="نام کاربری"
				changeHandler={inputHandler}
				id="username"
				name="username"
				type="text"
			/>
			<Input
				required="true"
				label="رمز عبور"
				changeHandler={inputHandler}
				id="password"
				name="password"
				type="password"
			/>
			<Button type="submit" sty="primary" text="ورود"/>
		</form>
    );
}
export default Login;