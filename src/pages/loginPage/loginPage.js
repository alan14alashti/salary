import { useState } from "react";
import classes from "./login.module.css"
import { Input } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from 'sweetalert2'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
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
			history.push(`${path}/MainPage`);
		}
	})
	.catch((error) => {
		Swal.fire({
			title: 'Error!',
			text: " نام کاربری یا رمز عبور شما اشتباه است ",
			icon: 'error',
			confirmButtonColor: '#0049a5',
			confirmButtonText: 'امتحان دوباره'
		})
	});
}
//Login page component
const Login = () => {
	let history = useHistory()
	let { path, url } = useRouteMatch();
    const [formState, setFormState] = useState({
		username: "",
    	password: ""
    })
	const [buttonDisabled, setbuttonDisabled] = useState(false)
    const BlurHandler = (event) => {
        setFormState({
			...formState,
          	[event.target.name] : event.target.value
        })
    }
	const clickHandler = (event) => {
		event.preventDefault();
		const body = JSON.stringify(formState)
		PostForm(body, history, path)
	}
    return (
		<div className="container my-5">
			<div className='row d-flex justify-content-center'>
				<form onSubmit={(e) => clickHandler(e)} className={`${classes.login_page_container} col-11 col-lg-7 col-sm-9 d-flex flex-column align-items-center`}>
					<h3> ورود به پنل فرا تکنو </h3>
					<div className="col-11 col-lg-7 col-sm-8">
						<Input
							required="true"
							label="نام کاربری"
							BlurHandler={BlurHandler}
							id="username"
							name="username"
							type="text"
						/>
					</div>
					<div className="col-11 col-lg-7 col-sm-8">
						<Input
							required="true"
							label="رمز عبور"
							BlurHandler={BlurHandler}
							id="password"
							name="password"
							type="password"
						/>
					</div>
					<button type="submit" disabled={buttonDisabled} className={`${classes.login_button} col-auto`}> ورود </button>
				</form>
			</div>
		</div>
    );
}
export default Login;