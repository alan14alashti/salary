import { useState } from "react";
import classes from "../loginPage/login.module.css"
import { Input, Select } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
// get roles request
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
	axios(`${BaseUrl}/api/Authenticate/assignRoleToUser`, {
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
// role to user component
const RoleToUser = () => {
    const [formState, setFormState] = useState({
		roleName: "",
        userName:""
    })
	const { isLoading, error, data } = useQuery('listOfRoles', getfetcher)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
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
					<h3>نقش را به کاربر مورد نظر ارتباط دهید</h3>
					<div className="col-11 col-lg-7 col-sm-8">
						<Select
						 	options={data.data}
							defaultOpt=""
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
					<button type="submit" className={`${classes.login_button} col-auto`}> ارتباط </button>
				</form>
			</div>
		</div>
    );
}
export default RoleToUser;