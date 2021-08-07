import { useState } from "react";
import classes from "../loginPage/login.module.css"
import { Input } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
const PostForm = (body) => {
	const token = localStorage.getItem("accessToken")
	axios(`${BaseUrl}/api/Authenticate/createRole`, {
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
				title: 'success',
				text: " نقش با موفقیت اضافه شد ",
				icon: 'success',
				confirmButtonColor: '#0049a5',
				timer: 3000
			})
		}
	})
	.catch((error) => {
		Swal.fire({
			title: 'خطا',
			text: error.response.data.message,
			icon: 'error',
			confirmButtonColor: '#0049a5',
			confirmButtonText: 'امتحان دوباره',
			timer: 3000
		})
	});
}
const CreateRole = () => {
    const [formState, setFormState] = useState({
		roleName: ""
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
        <div className="container my-5">
			<div className='row d-flex justify-content-center'>
				<form onSubmit={(e) => clickHandler(e)} className={`${classes.login_page_container} col-11 col-lg-7 col-sm-9 d-flex flex-column align-items-center`}>
					<h3> نقش های مورد نظر را بسازید </h3>
					<div className="col-11 col-lg-7 col-sm-8">
						<Input
							required="true"
							label="نام نقش"
							BlurHandler={BlurHandler}
							id="roleName"
							name="roleName"
							type="text"
						/>
					</div>
					<button type="submit" disabled={buttonDisabled} className={`${classes.login_button} col-auto`}> ساخت نقش </button>
				</form>
			</div>
		</div>
    );
}
export default CreateRole;