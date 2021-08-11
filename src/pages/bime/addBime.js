import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Button from "../../utils/button";
import { Input } from "../../utils/input";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
// const PostForm = async (body) => {
// 	const token = localStorage.getItem("accessToken")
// 	const res = await axios(`${BaseUrl}/api/Authenticate/createRole`, {
// 		method:'POST',
// 		headers: {
// 			"Content-Type": "application/json"	,
// 			"accept": "*/*",
// 			'Authorization':`Bearer ${token}`
// 		},                                   
// 		data : body.body
// 	})
// 	return res
// }
const AddBimeTypes = ({closeModal}) => {
	// const queryClient = useQueryClient()
    // const [formState, setFormState] = useState({
	// 	roleName: ""
    // })
	// const [buttonDisabled, setbuttonDisabled] = useState(false)
    const BlurHandler = (event) => {
        // setFormState({
		// 	...formState,
        //   	[event.target.name]: event.target.value
        // })
        console.log(event.target.value)
    }
    // const mutation = useMutation(PostForm, {
    //     onSuccess: (res) => {
	// 		console.log(res)
    //         Swal.fire({
    // 			title: 'Success',
    //             text: res.data.message,
    //     		icon: 'success',
    // 			confirmButtonColor: '#0050F0',
    //             timer: 3000
    //         })
    //         // console.log(res)
    //         // const charts = queryClient.getQueryData("OrgChart")
    //         // console.log(charts)
    //         // QueryClient.refetchQueries("OrgChart")
    //         // queryClient.refetchQueries(["OrgChart"])
    //         queryClient.refetchQueries({ stale: true })
    //     },
    //     onError: () => {
    //         Swal.fire({
    //             title: 'Error!',
    //             text:   " مشکلی وجود دارد ",
    //             icon: 'error',
    //             confirmButtonColor: '#0050f0',
    //             confirmButtonText: 'امتحان دوباره',
    //             timer: 3000
    //         }
    //     )}
    // })
	const clickHandler = (event) => {
		event.preventDefault();
        console.log("clicked")
		// const body = JSON.stringify(formState)
        // mutation.mutate({body: body})
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> نوع بیمه </h3>
				<div className="col-11 col-lg-7 col-sm-8">
					<Input
						required="true"
						label="نام بیمه"
						BlurHandler={BlurHandler}
						id="bimeName"
						name="bimeName"
						type="text"
					/>
                    <Input
						required="true"
						label="نام کارگاه"
						BlurHandler={BlurHandler}
						id="kargahName"
						name="kargahName"
						type="text"
					/>
                    <Input
						required="true"
						label=" کد کارگاه "
						BlurHandler={BlurHandler}
						id="kargahCode"
						name="kargahCode"
						type="text"
					/>
                    <Input
						required="true"
						label=" کارفرما "
						BlurHandler={BlurHandler}
						id="karfarma"
						name="karfarma"
						type="text"
					/>
				</div>
				<div className="col-12 d-flex justify-content-between mt-3">
					<Button onclick={() => console.log("ثبت")} sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}
export default AddBimeTypes;