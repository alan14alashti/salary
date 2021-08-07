import Button from "../../utils/button"
import { useState } from "react";
import { Input } from "../../utils/input"
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from 'sweetalert2'
const token = localStorage.getItem("accessToken")
const PostForm = (body) => {
    console.log(body)
	axios(`${BaseUrl}/api/Loan/RegistrerLoan`, {
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
const RegisterLoan = () => {
    const [formState, setFormState] = useState({
		title: "",
    	amount: 0,
        defaultInstallmentCount: 0,
        loanType: ""
    })
    const BlurHandler = (event) => {
        console.log(event.target.value)
        let value = event.target.value
        if(event.target.name === "amount" || event.target.name === "defaultInstallmentCount") {
            value = Number(value)
        }
        setFormState({
			...formState,
          	[event.target.name]: value
        })
    }
    const clickHandler = (event) => {
		event.preventDefault();
		const body = JSON.stringify(formState)
		PostForm(body)
	}
    return (
        <div className="w-100 mx-auto">
            <form onSubmit={(e) => clickHandler(e)} className={`w-100 d-flex flex-column align-items-center`}>
				<h3> ثبت وام  </h3>
				<Input
					required="true"
					label=" عنوان وام "
					BlurHandler={BlurHandler}
					id="title"
					name="title"
					type="text"
				/>
				<Input
					required="true"
					label=" مقدار وام "
					BlurHandler={BlurHandler}
					id="amount"
					name="amount"
					type="number"
				/>    
				<Input
					required="true"
					label=" تعداد قسط "
					BlurHandler={BlurHandler}
					id="defaultInstallmentCount"
					name="defaultInstallmentCount"
					type="number"
				/>  
				<Input
					required="true"
					label=" نوع وام "
					BlurHandler={BlurHandler}
					id="loanType"
					name="loanType"
					type="text"
				/>
				<div className="my-3">
					<Button text=" ثبت وام " type="submit" sty="primary"/>
				</div>
			</form>
        </div>
    );
}
export default RegisterLoan;