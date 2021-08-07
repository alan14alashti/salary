import { useState } from "react";
import classes from "../loginPage/login.module.css"
import { Input, Select } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
// get roles
const token = localStorage.getItem("accessToken")
const getfetcher = async () => {
    const res =await 
		axios(`${BaseUrl}/api/Authenticate/listOfRoles`,  {
		   method:'POST',
		   headers: {
			   "Content-Type": "application/json"	,
			   "accept": "*/*",
			   'Authorization':`Bearer ${token}`
		   },                                   
		   data : ""
	   })
    return res
}
// post form method
const PostForm = (body) => {
	axios(`${BaseUrl}/api/Authenticate/removeRoleFromUser`, {
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
const RemoveRFU = () => {
    const [formState, setFormState] = useState({
		roleName: "",
        userName:""
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
	let defaultOpt = ""
	let options = []
	const { isLoading, error, data } = useQuery('listOfRoles', getfetcher)
   	if (error || isLoading) {
		defaultOpt = "نقشی وجود ندارد"
	}
	else if(data) {
		defaultOpt = "انتخاب کنید"
		options = data.data
	}
    return (
        <div className="container my-5">
			<div className='row d-flex justify-content-center'>
				<form onSubmit={(e) => clickHandler(e)} className={`${classes.login_page_container} col-11 col-lg-7 col-sm-9 d-flex flex-column align-items-center`}>
					<h3> حذف نقش از کارمند </h3>
					<div className="col-11 col-lg-7 col-sm-8">
						<Select
						 	options= {options}
							defaultOpt= {defaultOpt}
							required="true"
							label="انتخاب نقش"
							changeHandler={BlurHandler}
							id="roleName"
							name="roleName"
						/>
                        <Input
							required="true"
							label="نام کاربر"
							BlurHandler={BlurHandler}
							id="userName"
							name="userName"
							type="text"
						/>
					</div>
					<button type="submit" className={`${classes.login_button} col-auto`}> اعمال </button>
				</form>
			</div>
		</div>
    );
}
export default RemoveRFU;