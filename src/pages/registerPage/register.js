import { useState } from "react";
import classes from "../loginPage/login.module.css"
import {Input} from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "../../utils/button";
// post form method
const PostForm = (body) => {
	const token = localStorage.getItem("accessToken")
	axios(`${BaseUrl}/api/Authenticate/register`, {
		method:'POST',
		headers: {
			"Content-Type": "application/json",
			"accept": "*/*",
			'Authorization':`Bearer ${token}`
		},                                   
		data : body
	})
	.then(res => {
		if(res.data.status === "Success"){
			Swal.fire({
				title: 'Success',
				text: " کارمند با موفقیت ثبت شد ",
				icon: 'success',
				confirmButtonColor: '#0049a5',
				timer: 3000
			})
		}
	})
	.catch((error) => {
		Swal.fire({
			title: 'Error!',
			text: error.response.data.message,
			icon: 'error',
			confirmButtonColor: '#0049a5',
			confirmButtonText: 'امتحان دوباره',
			timer: 3000
		})
	});
}
// Register component
const Register = () => {
    const [formState, setFormState] = useState({
		username: "",
        email: "",
    	password: ""
    })
	const [buttonDisabled, setbuttonDisabled] = useState(false)
    const BlurHandler = (event) => {
        setFormState({
			...formState,
          	[event.target.name]: event.target.value
        })
    }
	const clickHandler = (event) => {
		event.preventDefault();
		const body = JSON.stringify(formState)
		PostForm(body)
  	}
    return (
		<div className="w-100 mx-auto">
				<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
					<h3> ثبت نام کارمند </h3>
					<Input
						required="true"
						label="نام کاربری"
						BlurHandler={BlurHandler}
						id="username"
						name="username"
						type="text"
					/>
					<Input
						required="true"
						label="ایمیل"
						BlurHandler={BlurHandler}
						id="email"
						name="email"
						type="email"
					/>
					<Input
						required="true"
						label="رمز عبور"
						BlurHandler={BlurHandler}
						id="password"
						name="password"
						type="password"
					/>
					<div className="my-3">
						<Button text=" ثبت کارمند " type="submit" sty="primary"/>
					</div>
				</form>
		</div>
    );
}
export default Register;