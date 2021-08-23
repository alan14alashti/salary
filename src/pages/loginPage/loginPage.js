import { useState } from "react";
import classes from "./login.module.css"
import { Input } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from 'sweetalert2'
import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import Button from "../../utils/button";
import { useMutation } from "react-query";
import useRequest from "../../components/fetchReq";
import { useHistory } from "react-router-dom";
// post form method
const PostForm = (body, history, path) => {
	axios(`${BaseUrl}/api/Authenticate/login`, {
		method:'POST',
		headers: {
			"Content-Type": "application/json"	,
			"accept": "*/*"
		},                                   
		data : body
	})
	.then(res => {
		const data = res.data
		if(res.statusText === "OK"){
			Swal.fire({
				title: 'success',
				text: " برای ورود کلیک کنید ",
				icon: 'success',
				confirmButtonColor: '#0049a5',
				confirmButtonText: 'ورود',
				timer: 3000
			})
			localStorage.setItem("accessToken", data.token)
			history.push(`/MainPage`);
		}
	})
	.catch((error) => {
		
	});
}
//Login page component
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
			console.log(res)
			Swal.fire({
				title: 'success',
				text: " خوش آمدید ",
				icon: 'success',
				confirmButtonColor: '#215A88',
				confirmButtonText: 'ورود',
				timer: 3000
			})
			localStorage.setItem("accessToken", data.token)
			history.push(`/MainPage`);
        },
        onError: (error) => {
            console.log(error.response)
			Swal.fire({
				title: 'Error!',
				text: " نام کاربری یا رمز عبور شما اشتباه است ",
				icon: 'error',
				confirmButtonColor: '#215A88',
				confirmButtonText: 'امتحان دوباره'
			})
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