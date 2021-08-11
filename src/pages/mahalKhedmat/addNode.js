import { useState } from "react";
import classes from "../loginPage/login.module.css"
import {Input} from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
// post form method
// const PostForm =async (body) => {
// 	const token = localStorage.getItem("accessToken")
// 	const res = await axios(`${BaseUrl}/api/OrganizationChart/AddPosition`, {
// 		method:'POST',
// 		headers: {
// 			"Content-Type": "application/json",
// 			"accept": "*/*",
// 			'Authorization':`Bearer ${token}`
// 		},                                   
// 		data : body.body
// 	})
//     return res
// 	// .then(res => {
// 	// 	if(res.data.status === "Success"){
// 	// 		Swal.fire({
// 	// 			title: 'Success',
// 	// 			text: " پوزیشن با موفقیت ثبت شد ",
// 	// 			icon: 'success',
// 	// 			confirmButtonColor: '#0050F0',
// 	// 			timer: 3000
// 	// 		})
// 	// 	}
// 	// })
// 	// .catch((error) => {
// 	// 	Swal.fire({
// 	// 		title: 'Error!',
// 	// 		text: error.response.data.message,
// 	// 		icon: 'error',
// 	// 		confirmButtonColor: '#0050f0',
// 	// 		confirmButtonText: 'امتحان دوباره',
// 	// 		timer: 3000
// 	// 	})
// 	// });
// }
// add Node component
const AddNode = ({ nodeData, closeModal }) => {
    // const queryClient = useQueryClient()
    // const [formState, setFormState] = useState({
	// 	title: "",
    //     parent: nodeData.id ? nodeData.id : null
    // })
    const BlurHandler = (event) => {
        let value = event.target.value 
        const name = event.target.name
        // if(name === "parent") {
        //     value = Number(value)
        // }
        // setFormState({
		// 	...formState,
        //   	[name]: value
        // })
    }
    // const queryClient = useQueryClient()
    // const charts = queryClient.getQueryData("OrgChart")
    // console.log(charts)
    // const mutation = useMutation(PostForm, {
    //     onSuccess: (res) => {
    //         // console.log(res)
    //         // const charts = queryClient.getQueryData("OrgChart")
    //         // console.log(charts)
    //         // QueryClient.refetchQueries("OrgChart")
    //         // queryClient.refetchQueries(["OrgChart"])
    //         queryClient.refetchQueries({ stale: true })
    //     },
    // })
	const clickHandler = (event) => {
		event.preventDefault();
		// const body = JSON.stringify(formState)
        // mutation.mutate({body: body})
  	}
    return (
		<div className="w-100 mx-auto">
				<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
					<h3> اضافه کردن محل خدمت </h3>
					<Input
						required="true"
						label="نام محل خدمت"
						BlurHandler={BlurHandler}
						id="title"
						name="title"
						type="text"
					/>
					<div className="col-12 d-flex justify-content-between mt-3">
                        <Button onclick={() => console.log("ثبت")} sty="secondary" text=" ثبت "/>
                        <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                    </div>
					<span> محل خدمت مورد نظر به زیر  گروه  {nodeData.title} اضافه میشود </span>
				</form>
		</div>
    );
}
export default AddNode;