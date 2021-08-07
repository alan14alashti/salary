import { useState } from "react";
import classes from "../loginPage/login.module.css"
import {Input} from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
// post form method 
const PostForm = (body) => {
	const token = localStorage.getItem("accessToken")
	axios(`${BaseUrl}/api/Authenticate/resetPasswordByAdmin`, {
		method:'POST',
		headers: {
			"Content-Type": "application/json"	,
			"accept": "*/*",
            'Authorization':`Bearer ${token}`
		},                                   
		data : body
	})
	.then(res => {
		if(res.data.status === "Success"){
			Swal.fire({
				title: 'Success',
				text: res.data.message,
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
const ChangePassByAd = () => {
    const [formState, setFormState] = useState({
		username: "",
    	password: ""
    })
	// const [buttonDisabled, setbuttonDisabled] = useState(false)
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
		<div className="container my-5">
			<div className='row d-flex justify-content-center'>
				<form onSubmit={(e) => clickHandler(e)} className={`${classes.login_page_container} col-11 col-lg-7 col-sm-9 d-flex flex-column align-items-center`}>
					<h3> تغییر رمز کارمند توسط ادمین</h3>
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
					<button type="submit" className={`${classes.login_button} col-auto`}> ورود </button>
				</form>
			</div>
		</div>
    );
}
export default ChangePassByAd;