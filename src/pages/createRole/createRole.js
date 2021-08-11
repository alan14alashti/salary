import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Button from "../../utils/button";
import { Input } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
const PostForm = async (body) => {
	const token = localStorage.getItem("accessToken")
	const res = await axios(`${BaseUrl}/api/Authenticate/createRole`, {
		method:'POST',
		headers: {
			"Content-Type": "application/json"	,
			"accept": "*/*",
			'Authorization':`Bearer ${token}`
		},                                   
		data : body.body
	})
	return res
}
const CreateRole = ({closeModal}) => {
	const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		roleName: ""
    })
	// const [buttonDisabled, setbuttonDisabled] = useState(false)
    const BlurHandler = (event) => {
        setFormState({
			...formState,
          	[event.target.name]: event.target.value
        })
    }
    const mutation = useMutation(PostForm, {
        onSuccess: (res) => {
			console.log(res)
            Swal.fire({
    			title: 'Success',
                text: res.data.message,
        		icon: 'success',
    			confirmButtonColor: '#0050F0',
                timer: 3000
            })
            // console.log(res)
            // const charts = queryClient.getQueryData("OrgChart")
            // console.log(charts)
            // QueryClient.refetchQueries("OrgChart")
            // queryClient.refetchQueries(["OrgChart"])
            queryClient.refetchQueries({ stale: true })
        },
        onError: () => {
            Swal.fire({
                title: 'Error!',
                text:   " مشکلی وجود دارد ",
                icon: 'error',
                confirmButtonColor: '#0050f0',
                confirmButtonText: 'امتحان دوباره',
                timer: 3000
            }
        )}
    })
	const clickHandler = (event) => {
		event.preventDefault();
		const body = JSON.stringify(formState)
        mutation.mutate({body: body})
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
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
				<div className="my-3 col-11 col-lg-7 col-sm-8 d-flex flex-column">
					<span>دسترسی ها : </span>
					<div className="my-1">
						<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
						<label className="mx-2" for="vehicle1">لیست کارمندان</label>
					</div>
					<div className="my-1">
						<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
						<label className="mx-2" for="vehicle2">اضافه کردن کارمند</label>
					</div>
					<div className="my-1">
						<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
						<label className="mx-2" for="vehicle3"> اضافه کردن نقش </label>
					</div>
					<div className="my-1">
						<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
						<label className="mx-2" for="vehicle3"> ثبت وام </label>
					</div>
					<div className="my-1">
						<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
						<label className="mx-2" for="vehicle3"> گزارش ها </label>
					</div>
				</div>
				<div className="mt-5 col-12 d-flex justify-content-between my-3">
					<Button onclick={() => console.log("ثبت")} sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}
export default CreateRole;