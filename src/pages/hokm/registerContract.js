import Button from "../../utils/button";
import { Input } from "../../utils/input";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";
import Swal from "sweetalert2";
const PostForm = (body) => {
    console.log(body)
	const token = localStorage.getItem("accessToken")
	axios(`${BaseUrl}/api/Contract/RegisterContract`, {
		method:'POST',
		headers: {
			"Content-Type": "application/json",
			"accept": "*/*",
			'Authorization':`Bearer ${token}`
		},                                   
		data : body
	})
	.then(res => {
		if(res.statusText === "OK"){
			Swal.fire({
				title: 'success',
				text: res.data.message,
				icon: 'success',
				confirmButtonColor: '#0050F0',
				confirmButtonText: 'ورود',
				timer: 3000
			})
		}
	})
	.catch((error) => {
		Swal.fire({
			title: 'Error!',
			text: error.response.data.message,
			icon: 'error',
			confirmButtonColor: '#0050F0',
			confirmButtonText: 'امتحان دوباره'
		})
	});
}
const RegisterContract = ({clickedUser, formProps}) => {
    const [contractDet, setContractDet] = useState(formProps.map(item => ({
		title: item.detailName,
		value: null
	})))
    const [formState, setFormState] = useState({})
    const BlurHandler = (event,index) => {
        let value = event.target.value 
        const name = event.target.name
    	const numValue = Number(value)
    		setContractDet([...contractDet].map((object) => {
				if(object.title === name){
					return{
						...object,
						value: numValue
					}
				}
				else {
					return object
				}
			}
        ))
        setFormState({
            userName: clickedUser.userName,
            hokmType: clickedUser.detailName,
            executeDate: clickedUser.executeDate,
            effectiveDate: clickedUser.effectiveDate,
            contractDetails: contractDet
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
				<h3> ثبت حکم </h3>
				{formProps.map((item,index) => (
					<Input
						required="true"
						label={item.detailName}
						BlurHandler={(e) => BlurHandler(e,index)}
						id={item.detailName}
						name={item.detailName}
						type="number"
					/>
				))}
				<div className="my-3">
					<Button text=" ثبت حکم " type="submit" sty="primary"/>
				</div>	
				<div className="my-3">
					<Button text=" ثبت گروهی حکم " type="submit" sty="primary"/>
				</div>	
            </form>
		</div>
    );
}
export default RegisterContract;